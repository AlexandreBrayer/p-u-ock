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
  const path = `/blog/${puckPath.join("/")}`;

  return {
    title: getPage(path)?.root.props?.title || "Blog",
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}) {
  const { puckPath = [] } = await params;
  const path = `/blog/${puckPath.join("/")}`;
  const data = getPage(path);

  if (!data) {
    return notFound();
  }

  return <Client data={data} />;
}

export const dynamic = "force-static";
