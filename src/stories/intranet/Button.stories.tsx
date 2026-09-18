import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Button } from "../Button";

const meta = {
  title: "Intranet/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Define a variante de estilo do botão",
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
      description: "Define o arredondamento dos cantos",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Intranet - Acessar Serviço",
    rounded: "md",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Intranet - Saiba Mais",
    rounded: "md",
  },
};

export const CustomStyle: Story = {
  args: {
    variant: "primary",
    label: "Intranet - Portal do Servidor",
    className: "bg-sky-600 hover:bg-sky-700 text-white shadow-md rounded-md px-6 py-2.5",
  },
};
