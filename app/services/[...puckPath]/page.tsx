import { Client } from "./client";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPage } from "../../../lib/get-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}): Promise<Metadata> {
  const { puckPath = [] } = await params;
  const path = `/services/${puckPath.join("/")}`;

  return {
    title: getPage(path)?.root.props?.title || "Services",
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}) {
  const { puckPath = [] } = await params;
  const path = `/services/${puckPath.join("/")}`;
  const data = getPage(path);

  if (!data) {
    return notFound();
  }

  return <Client data={data} />;
}

export const dynamic = "force-static";
