import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    videoTitle: { control: "text" },
    status: { control: "text" },
    imageLabel: { control: "text" },
    mediaType: {
      control: { type: "radio" },
      options: ["image", "video"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComImagem: Story = {
  args: {
    mediaType: "image",
    videoTitle: "Banner Promocional.png",
    status: "Imagem carregada",
    imageLabel: "Miniatura da imagem",
  },
};

export const ComVideo: Story = {
  args: {
    mediaType: "video",
    videoTitle: "Apresentação do Projeto.mp4",
    status: "Processando vídeo...",
    imageLabel: "Miniatura do vídeo",
  },
};

export const Concluido: Story = {
  args: {
    mediaType: "video",
    videoTitle: "Vídeo Institucional PMSP.mp4",
    status: "Concluído",
    imageLabel: "Miniatura do vídeo",
  },
};


