import "@measured/puck/puck.css";
import { Client } from "./client";
import { getPage } from "../../../../lib/get-page";
import { Data } from "@measured/puck";

export default async function ActuPuckEditor({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}) {
  const { puckPath = [] } = await params;
  const path = `/actu/${puckPath.join("/")}`;

  return <Client path={path} data={getPage(path) || ({} as Partial<Data>)} />;
}
