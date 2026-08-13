import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    placeholder: "Digite seu nome",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "Maria Silva",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Nome",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "email@exemplo.com",
  },
};

export const Rounded: Story = {
  args: {
    rounded: "medium",
    defaultValue: "Campo com bordas customizadas",
  },
};

export const Error: Story = {
  args: {
    error: true,
    defaultValue: "Valor invalido",
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
