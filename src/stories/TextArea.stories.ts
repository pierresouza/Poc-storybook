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
    placeholder: "Type your message",
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "Pre-filled message to demonstrate component.",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    rows: 3,
    placeholder: "Message",
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
    defaultValue: "Text area with custom rounded corners.",
  },
};

export const Error: Story = {
  args: {
    error: true,
    defaultValue: "Invalid message",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Disabled text area",
  },
};

export const CustomClassName: Story = {
  args: {
    rounded: "medium",
    defaultValue: "Customized text area",
    className: "border-emerald-600 text-emerald-900 focus:ring-emerald-500 focus:border-emerald-500",
  },
};

