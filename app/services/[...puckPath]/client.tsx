"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import config from "../../../puck.config";
import { ServicesPage } from "../../../puck.config.services";

// Config pour le rendu avec ServicesPage
const servicesConfig = {
  ...config,
  components: {
    ...config.components,
    ServicesPage,
  },
};

export function Client({ data }: { data: Data }) {
  return <Render config={servicesConfig as any} data={data} />;
}
