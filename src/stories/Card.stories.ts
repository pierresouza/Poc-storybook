import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
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

export const WithImage: Story = {
  args: {
    mediaType: "image",
    videoTitle: "Promotional Banner.png",
    status: "Image loaded",
    imageLabel: "Image thumbnail",
  },
};

export const WithVideo: Story = {
  args: {
    mediaType: "video",
    videoTitle: "Project Presentation.mp4",
    status: "Processing video...",
    imageLabel: "Video thumbnail",
  },
};

export const Completed: Story = {
  args: {
    mediaType: "video",
    videoTitle: "Institutional Video.mp4",
    status: "Completed",
    imageLabel: "Video thumbnail",
  },
};

