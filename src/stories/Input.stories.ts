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
    placeholder: "Enter your name",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "John Doe",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Name",
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
    placeholder: "email@example.com",
  },
};

export const Rounded: Story = {
  args: {
    rounded: "medium",
    defaultValue: "Input with custom radius",
  },
};

export const Error: Story = {
  args: {
    error: true,
    defaultValue: "Invalid value",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Disabled input",
  },
};

export const CustomClassName: Story = {
  args: {
    rounded: "medium",
    defaultValue: "Customized input",
    className: "border-emerald-600 text-emerald-900 focus:ring-emerald-500 focus:border-emerald-500",
  },
};

