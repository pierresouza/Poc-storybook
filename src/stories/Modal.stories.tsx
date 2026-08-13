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
      <Button primary label="Abrir modal" onClick={() => setOpen(true)} />
      <Modal {...args} isOpen={open} onClose={handleClose}>
        <ModalContent>{children}</ModalContent>
        <ModalButtonBar>
          <Button label="Cancelar" onClick={handleClose} />
          <Button primary label="Confirmar" onClick={handleClose} />
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
    title: "Titulo do modal",
    onClose: fn(),
    children: (
      <>
        <p className="mb-3">Use este espaco para orientar a acao principal.</p>
        <p>Conteudo do modal para mensagens, formularios curtos ou confirmacoes que precisam de foco.</p>
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
    title: "Modal pequeno",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    title: "Modal grande",
    children:
      "Uma area maior para conteudos com mais contexto, revisoes e detalhes antes da confirmacao.",
  },
};

export const Rounded: Story = {
  args: {
    rounded: "medium",
    title: "Modal com bordas customizadas",
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
        <Button primary label="Abrir modal" onClick={() => setOpen(true)} />
        <Modal {...args} isOpen={open} onClose={handleClose}>
          <ModalContent>{args.children}</ModalContent>
        </Modal>
      </div>
    );
  },
  args: {
    title: "Aviso simples",
    children: "Modal sem rodape para conteudos que nao precisam de acoes adicionais.",
  },
};

export const WithForm: Story = {
  args: {
    title: "Enviar solicitacao",
    children: (
      <div className="grid gap-4">
        <p className="text-gray-600">Preencha os campos para continuar.</p>
        <Input rounded="medium" placeholder="Assunto" />
        <TextArea rounded="medium" placeholder="Descreva sua solicitacao" rows={4} />
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
    title: "Modal personalizado",
    children: <span className="text-emerald-900">Exemplo usando classes customizadas no container.</span>,
  },
};
