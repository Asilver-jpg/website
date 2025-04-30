import { GifSectionProps } from "../components/molecules/gifSection/gifSection";
import { LinkedSectionProps } from "../components/molecules/linkSection";
import { PhotoSectionProps } from "../components/molecules/photoSection";
import { VideoSectionProps } from "../components/molecules/videoSection";

export function isVideoSectionProps(
    props: VideoSectionProps | PhotoSectionProps | LinkedSectionProps | GifSectionProps
  ): props is VideoSectionProps {
    return 'urls' in props
  }

  export function isGifSectionProps(
    props: VideoSectionProps | GifSectionProps | PhotoSectionProps | LinkedSectionProps
  ): props is GifSectionProps {
    return 'gifUrls' in props
  }

  export function isLinkSectionProps(
    props: VideoSectionProps | PhotoSectionProps | LinkedSectionProps | GifSectionProps
  ): props is LinkedSectionProps {
    return 'link' in props
  }
  