import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    type: "info",
    message: "Info",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    afterClose: fn(),
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    type: "success",
    message: "Success",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Warning",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Error",
  },
};

export const AllTypes: Story = {
  render: (args) => (
    <div className="grid w-[720px] max-w-full gap-3">
      <Alert {...args} type="success" message="Success" />
      <Alert {...args} type="warning" message="Warning" />
      <Alert {...args} type="error" message="Error" />
      <Alert {...args} type="info" message="Info" />
    </div>
  ),
};

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
    message: "Alerta sem icone",
  },
};

export const CloseText: Story = {
  args: {
    closeText: "Fechar",
    message: "Alerta com texto de fechamento",
  },
};

export const NotClosable: Story = {
  args: {
    closable: false,
    message: "Alerta fixo",
  },
};

export const CustomClassName: Story = {
  args: {
    type: "success",
    message: "Alerta personalizado",
    className: "rounded-md",
  },
};
