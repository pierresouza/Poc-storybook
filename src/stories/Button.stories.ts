import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Botão Primário",
  },
};

export const Secondary: Story = {
  args: {
    label: "Botão Secundário",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Botão Grande",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Botão Pequeno",
  },
};

export const CustomClassName: Story = {
  args: {
    primary: true,
    label: "Botão Personalizado",
    className: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg rounded-md px-8 py-3",
  },
};
