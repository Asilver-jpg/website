import PhotoSwipeLightBox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import './photoLightbox.css'
import { useEffect } from 'react'

export interface PhotoLightboxProps{
    boxId: string
    photoLightBoxData: PhotoLightBoxData[]
}

type PhotoLightBoxData = {
    thumbDest: string
    photoDest:string
    width: string
    height:string
    extraClass?:string
}

export function PhotoLightbox({boxId, photoLightBoxData}:PhotoLightboxProps){
   useEffect(()=>{
       const lightbox = new PhotoSwipeLightBox({
           gallery: `#${boxId}`,
           children:'a',
           showHideAnimationType:'fade',
           loop: true,
           pinchToClose: true,
           arrowKeys: true,
           pswpModule: () => import('photoswipe')
       })
   
       lightbox.init()
       return () =>{
        lightbox.destroy()
       }
   },[boxId])

    return (
        <div className = 'pwsp-gallery gallery' id={boxId}>
            {
                photoLightBoxData.map(({height, photoDest, thumbDest, width, extraClass})=> {
                    return(
                        <>
                        <a href = {photoDest}
                           data-pswp-width={width}
                           data-pswp-height={height}
                           >
                            <img
                            className= {`thumb ${extraClass}`}
                                 src={thumbDest}
                                 alt=""/>
                           </a>
                        </>
                    )
                })
            }
        </div>
    )
}