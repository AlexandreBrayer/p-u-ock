"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "../../../../puck.config";
import { ServicesPage } from "../../../../puck.config.services";

// Créer une config spéciale pour /services avec seulement les composants autorisés
const servicesConfig = {
  ...config,
  components: {
    ...config.components,
    // On ajoute ServicesPage pour le rendu mais on va le cacher de la liste
    ServicesPage,
  },
  categories: {
    components: {
      components: ["HeadingBlock", "Todos", "Layout"],
      title: "Composants",
    },
  },
};

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  return (
    <Puck
      config={servicesConfig as any}
      data={data}
      onPublish={async (data) => {
        await fetch("/puck/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}

