import { ComponentConfig } from "@measured/puck";

type SpacingValue = "0" | "8px" | "16px" | "32px" | "64px";

type Spacing = {
  top?: SpacingValue;
  bottom?: SpacingValue;
  left?: SpacingValue;
  right?: SpacingValue;
};

export type LayoutProps = {
  content: any;
  margin?: Spacing;
  padding?: Spacing;
  backgroundColor?: string;
  maxWidth?: string;
  centerContent?: boolean;
};

const spacingOptions = [
  { label: "Aucune (0)", value: "0" },
  { label: "Petite (8px)", value: "8px" },
  { label: "Moyenne (16px)", value: "16px" },
  { label: "Grande (32px)", value: "32px" },
  { label: "Très grande (64px)", value: "64px" },
];

export const Layout: ComponentConfig<LayoutProps> = {
  fields: {
    content: {
      type: "slot",
    },
    margin: {
      type: "object",
      label: "Marges",
      objectFields: {
        top: {
          type: "select",
          label: "Haut",
          options: spacingOptions,
        },
        bottom: {
          type: "select",
          label: "Bas",
          options: spacingOptions,
        },
        left: {
          type: "select",
          label: "Gauche",
          options: spacingOptions,
        },
        right: {
          type: "select",
          label: "Droite",
          options: spacingOptions,
        },
      },
    },
    padding: {
      type: "object",
      label: "Espacements internes",
      objectFields: {
        top: {
          type: "select",
          label: "Haut",
          options: spacingOptions,
        },
        bottom: {
          type: "select",
          label: "Bas",
          options: spacingOptions,
        },
        left: {
          type: "select",
          label: "Gauche",
          options: spacingOptions,
        },
        right: {
          type: "select",
          label: "Droite",
          options: spacingOptions,
        },
      },
    },
    backgroundColor: {
      type: "text",
      label: "Couleur de fond",
    },
    maxWidth: {
      type: "select",
      options: [
        { label: "Pleine largeur", value: "100%" },
        { label: "Petite (640px)", value: "640px" },
        { label: "Moyenne (768px)", value: "768px" },
        { label: "Grande (1024px)", value: "1024px" },
        { label: "Très grande (1280px)", value: "1280px" },
      ],
    },
    centerContent: {
      type: "radio",
      options: [
        { label: "Oui", value: true },
        { label: "Non", value: false },
      ],
    },
  },
  defaultProps: {
    content: [],
    margin: {
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
    },
    padding: {
      top: "16px",
      bottom: "16px",
      left: "16px",
      right: "16px",
    },
    backgroundColor: "transparent",
    maxWidth: "100%",
    centerContent: false,
  },
  render: ({
    content: Content,
    margin = { top: "0", bottom: "0", left: "0", right: "0" },
    padding = { top: "0", bottom: "0", left: "0", right: "0" },
    backgroundColor,
    maxWidth,
    centerContent,
  }) => (
    <div
      style={{
        marginTop: margin.top,
        marginBottom: margin.bottom,
        marginLeft: centerContent ? "auto" : margin.left,
        marginRight: centerContent ? "auto" : margin.right,
        paddingTop: padding.top,
        paddingBottom: padding.bottom,
        paddingLeft: padding.left,
        paddingRight: padding.right,
        backgroundColor,
        maxWidth,
      }}
    >
      <Content />
    </div>
  ),
};
