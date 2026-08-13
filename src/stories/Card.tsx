import React from "react";
import { Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import { cn } from "../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  videoTitle?: string;
  status?: string;
  imageLabel?: string;
  mediaType?: "image" | "video";
  className?: string;
}

export function Card({
  videoTitle = "Título do vídeo",
  status = "Em processamento",
  imageLabel = "Miniatura do vídeo",
  mediaType = "image",
  className,
  ...props
}: CardProps) {
  return (
    <div className={cn("flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md", className)} {...props}>
      <div className="w-full h-20 flex flex-col items-center justify-center rounded-tl-2xl rounded-tr-2xl gap-2 bg-[#f5f5f7] border border-dashed border-gray-300 p-4">
        {mediaType === "video" ? (
          <VideoIcon className="w-4 h-4 text-gray-400" />
        ) : (
          <ImageIcon className="w-4 h-4 text-gray-400" />
        )}
        <span className="text-sm text-gray-500 font-normal">{imageLabel}</span>
      </div>
      <div className="flex flex-col gap-1 mt-4 p-2 rounded-bl-2xl rounded-br-2xl">
        <p className="font-bold text-sm text-gray-900">{videoTitle}</p>
        <p className="text-xs text-gray-500 italic">{status}</p>
      </div>
    </div>
  );
}

