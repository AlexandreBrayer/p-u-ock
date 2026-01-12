import { ComponentConfig, DropZone } from "@measured/puck";

export type ServicesPageProps = {};

export const ServicesPage: ComponentConfig<ServicesPageProps> = {
  label: "Page Services (Structure fixe)",
  fields: {},
  defaultProps: {},
  render: () => (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <section style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#333" }}>Service</h1>
        <div style={{ background: "#f8f9fa", padding: "2rem", borderRadius: "8px", minHeight: "200px" }}>
          <DropZone zone="service-zone" />
        </div>
      </section>
      
      <section>
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#333" }}>Description</h2>
        <div style={{ background: "#fff", padding: "2rem", border: "1px solid #e0e0e0", borderRadius: "8px", minHeight: "200px" }}>
          <DropZone zone="description-zone" />
        </div>
      </section>
    </div>
  ),
};
