import type { Config } from "@measured/puck";
import { Layout, LayoutProps } from "./app/components/layout.puck";
import { ServicesPage } from "./app/components/services-layout.puck";
import { Todos, TodosProps } from "./app/components/todos";

type Props = {
  HeadingBlock: { title: string };
  Todos: TodosProps;
  Layout: LayoutProps;
};

export const config: Config<Props> = {
  root: {
    fields: {
      headerPhone: {
        type: "text",
        label: "Téléphone du header",
      },
      headerEmail: {
        type: "text",
        label: "Email du header",
      },
      headerLogo: {
        type: "text",
        label: "URL du logo (optionnel)",
      },
    },
    defaultProps: {
      headerPhone: "+33 1 23 45 67 89",
      headerEmail: "contact@example.com",
      headerLogo: "",
    },
    render: ({ children, headerPhone, headerEmail, headerLogo }) => (
      <div>
        <header style={{ 
          padding: "1rem 2rem", 
          background: "#f8f9fa", 
          borderBottom: "1px solid #dee2e6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          {headerLogo && (
            <img src={headerLogo} alt="Logo" style={{ height: "40px" }} />
          )}
          <div style={{ display: "flex", gap: "2rem", fontSize: "0.9rem" }}>
            {headerPhone && <span>📞 {headerPhone}</span>}
            {headerEmail && <span>✉️ {headerEmail}</span>}
          </div>
        </header>
        <main>{children}</main>
      </div>
    ),
  },
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div>
          <h1>{title}</h1>
        </div>
      ),
    },
    Todos: {
      resolveData: async ({ props }) => {
        try {
          const response = await fetch('https://dummyjson.com/todos');
          const data = await response.json();
          
          return {
            props: {
              resolvedTodos: data.todos,
            },
          };
        } catch (error) {
          console.error('Error fetching todos:', error);
          return {
            props: {
              resolvedTodos: [],
            },
          };
        }
      },
      render: Todos,
    },
    Layout,
  },
};

export default config;

// Export ServicesPage séparément pour l'utiliser dans les routes /services
export { ServicesPage };
