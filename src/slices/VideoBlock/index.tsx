import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/Bounded";
import { LazyYouTubePlayer } from "./LazyYouTubePlayer";
import clsx from "clsx";
import Image from "next/image";

const MASK_CLASSES = 'mask-[url(/video-mask.png)] mask-alpha mask-center mask-no-repeat mask-[100%_auto]'

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock: FC<VideoBlockProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-zinc-900"
    >
      <h2 className="sr-only">Video Reel</h2>

      <div className="relative aspect-video">

        {/* Lime Border Layer */}
        <div
          className={clsx(
            MASK_CLASSES,
            "absolute inset-0 bg-brand-lime"
          )}
        />

        {/* White Border Layer */}
        <div
          className={clsx(
            MASK_CLASSES,
            "absolute inset-1.5 bg-white"
          )}
        />

        {/*  Video */}
        <div
          className={clsx(
            MASK_CLASSES,
            "absolute inset-5 bg-white"
          )}
        >
          {isFilled.keyText(slice.primary.youtube_video_id) ?
            (<LazyYouTubePlayer youTubeID={slice.primary.youtube_video_id} />) : null
          }
          {/* Texture Overlay */}
          <Image src='/image-texture.png' alt="" fill className="pointer-events-none object-cover opacity-50" />
        </div>

      </div>
    </Bounded>
  );
};

export default VideoBlock;
