import "@measured/puck/puck.css";
import { Client } from "./client";
import { getPage } from "../../../../lib/get-page";
import { Data } from "@measured/puck";

export default async function ServicesPuckEditor({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}) {
  const { puckPath = [] } = await params;
  const path = `/services/${puckPath.join("/")}`;
  
  // Données par défaut avec le layout pré-configuré
  const defaultData: Partial<Data> = {
    content: [
      {
        type: "ServicesPage",
        props: {
          id: "ServicesPage-0",
        }
      }
    ],
    zones: {
      "service-zone": [],
      "description-zone": [],
    },
    root: {},
  };

  return <Client path={path} data={getPage(path) || defaultData} />;
}
