import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Button } from "./Button";
import { Input } from "./Input";
import { Modal, type ModalProps } from "./Modal";
import { ModalButtonBar } from "./ModalButtonBar";
import { ModalContent } from "./ModalContent";
import { TextArea } from "./TextArea";

const ModalExample = ({ onClose, children, ...args }: ModalProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Button variant="primary" label="Open modal" onClick={() => setOpen(true)} />
      <Modal {...args} isOpen={open} onClose={handleClose}>
        <ModalContent>{children}</ModalContent>
        <ModalButtonBar>
          <Button label="Cancel" onClick={handleClose} />
          <Button variant="primary" label="Confirm" onClick={handleClose} />
        </ModalButtonBar>
      </Modal>
    </div>
  );
};

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  render: (args) => <ModalExample {...args} />,
  args: {
    isOpen: false,
    title: "Modal Title",
    onClose: fn(),
    children: (
      <>
        <p className="mb-3">Use this space to guide the primary action.</p>
        <p>Modal content for messages, short forms, or confirmations that require focus.</p>
      </>
    ),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "small",
    title: "Small Modal",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    title: "Large Modal",
    children:
      "A larger area for content with more context, reviews, and details before confirmation.",
  },
};

export const Rounded: Story = {
  args: {
    rounded: "medium",
    title: "Modal with Custom Border Radius",
  },
};

export const WithoutFooter: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
      args.onClose?.();
    };

    return (
      <div className="flex min-h-screen items-center justify-center p-6">
        <Button variant="primary" label="Open modal" onClick={() => setOpen(true)} />
        <Modal {...args} isOpen={open} onClose={handleClose}>
          <ModalContent>{args.children}</ModalContent>
        </Modal>
      </div>
    );
  },
  args: {
    title: "Simple Alert",
    children: "Modal without footer for content that does not require additional actions.",
  },
};

export const WithForm: Story = {
  args: {
    title: "Submit Request",
    children: (
      <div className="grid gap-4">
        <p className="text-gray-600">Fill in the fields to continue.</p>
        <Input rounded="medium" placeholder="Subject" />
        <TextArea rounded="medium" placeholder="Describe your request" rows={4} />
      </div>
    ),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};

export const CustomClassName: Story = {
  args: {
    rounded: "medium",
    className: "border-emerald-600",
    title: "Customized Modal",
    children: <span className="text-emerald-900">Example using custom classes on container.</span>,
  },
};

