import type { Config } from "@measured/puck";
import { Layout, LayoutProps } from "./app/components/layout.puck";
import { Todos, TodosProps } from "./app/components/todos";

type Props = {
  HeadingBlock: { title: string };
  Todos: TodosProps;
  Layout: LayoutProps;
};

export const config: Config<Props> = {
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
