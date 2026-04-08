"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";
import CornerFillButton from "./corner-button";

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    let videoId: string | null = null;
    let startTime: string | null = null;

    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.slice(1);
      startTime = parsed.searchParams.get("t");
    } else if (parsed.hostname.includes("youtube.com")) {
      videoId = parsed.searchParams.get("v");
      startTime = parsed.searchParams.get("t");
    }

    if (!videoId) return null;

    const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
    if (startTime) embedUrl.searchParams.set("start", startTime);

    return embedUrl.toString();
  } catch {
    return null;
  }
}

export function VideoDialog({ video_url }: { video_url: string }) {
  const embedUrl = getYouTubeEmbedUrl(video_url);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CornerFillButton label="Video Explanation" />
      </DialogTrigger>
      <DialogContent className="!max-w-4xl w-[90vw] p-0 overflow-hidden">
        <VisuallyHidden.Root>
          <DialogTitle>Video Explanation</DialogTitle>
        </VisuallyHidden.Root>

        {embedUrl ? (
          <div className="w-full aspect-video">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="p-6 text-center font-mono text-sm text-muted-foreground">
            Could not embed video. Open directly:{" "}
            <a
              href={video_url}
              target="_blank"
              className="underline text-foreground"
            >
              {video_url}
            </a>
          </div>
        )}

        <DialogFooter className="p-4 border-t border-border">
          <DialogClose asChild>
            <button className="group relative overflow-hidden text-impact-blue hover:text-white font-mono text-sm font-bold px-4 py-1 transition-colors duration-300">
              <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-impact-orange z-10" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-impact-orange z-10" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-impact-orange z-10" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-impact-orange z-10" />
              <span className="absolute top-0 left-0 w-1/2 h-1/2 bg-impact-orange -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <span className="absolute top-0 right-0 w-1/2 h-1/2 bg-impact-orange translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <span className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-impact-orange -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <span className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-impact-orange translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <p className="relative z-10">Close</p>
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
