import { isGifSectionProps, isLinkSectionProps, isVideoSectionProps } from "../../../guards"
import { GifSection, GifSectionProps } from "../../molecules/gifSection/gifSection"
import { LinkedSectionProps, LinkSection } from "../../molecules/linkSection"
import { PhotoSection, PhotoSectionProps } from "../../molecules/photoSection"
import { VideoSection, VideoSectionProps } from "../../molecules/videoSection"
import './pageExhibits.css'

export interface PageExhibitProps{
    pageTitle: string
    data: Array<VideoSectionProps | PhotoSectionProps | LinkedSectionProps | GifSectionProps>
    
}

export function PageExhibits({pageTitle, data}:PageExhibitProps){
    return(
        <div className='pageContent'>
            <h1 className='pageTitle'>{pageTitle}</h1>
            {
                data.map((props)=>{
                    if(isVideoSectionProps(props)){
                        const {text, title, urls, bioTechManifesto} = props
                        return(
                            <VideoSection text={text} title={title} urls={urls} bioTechManifesto={bioTechManifesto}/>
                        )
                    }else if(isLinkSectionProps(props)){
                        const {text, title, images, link} = props
                        return(
                            <LinkSection images={images} link={link} text={text} title={title}/>
                        )
                    }else if(isGifSectionProps(props)){
                        const{gifUrls, text, title, gifLink} = props
                        return(
                            <GifSection gifUrls={gifUrls} text={text} title={title} gifLink={gifLink}/>
                        )
                    
                    }else{
                        const {boxId, photoLightBoxData, text, title} = props
                        return (
                            <PhotoSection boxId={boxId} photoLightBoxData={photoLightBoxData} text={text} title={title}/>
                        )
                    }
                })
            }
        </div>
    )

}