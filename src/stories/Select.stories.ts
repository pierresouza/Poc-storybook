import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Select } from "./Select";

const cityOptions = [
  { label: "Sao Paulo", value: "sao-paulo" },
  { label: "Rio de Janeiro", value: "rio-de-janeiro" },
  { label: "Belo Horizonte", value: "belo-horizonte" },
  { label: "Curitiba", value: "curitiba" },
];

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    options: cityOptions,
    placeholder: "Select a city",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "sao-paulo",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "City",
  },
};


export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Error: Story = {
  args: {
    error: true,
    defaultValue: "rio-de-janeiro",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomClassName: Story = {
  args: {
    defaultValue: "curitiba",
    className: "rounded-md border-emerald-600 text-emerald-900 focus:ring-emerald-500 focus:border-emerald-500",
  },
};
