import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { TextArea } from "./TextArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    placeholder: "Digite sua mensagem",
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "Mensagem preenchida para demonstrar o componente.",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    rows: 3,
    placeholder: "Mensagem",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    rows: 5,
  },
};

export const Rounded: Story = {
  args: {
    rounded: "medium",
    defaultValue: "Campo com bordas arredondadas customizadas.",
  },
};

export const Error: Story = {
  args: {
    error: true,
    defaultValue: "Mensagem invalida",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Campo desabilitado",
  },
};

export const CustomClassName: Story = {
  args: {
    rounded: "medium",
    defaultValue: "Campo personalizado",
    className: "border-emerald-600 text-emerald-900 focus:ring-emerald-500 focus:border-emerald-500",
  },
};
