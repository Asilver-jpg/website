import { PageExhibitProps } from "../components";


export const photoAssetLoc = '/assets/images/Photo'
export const photoData: PageExhibitProps = {
    pageTitle:'Photo',
    data:[
        {
            boxId: 'differentVide',
            text: 'Before taking these, I had little to no experience with cameras. These were taken through various crystal prisms and lightly edited in Photoshop.',
            title:'A Different View of the Everyday',
            photoLightBoxData:[{
                height:"1875",
                width:"2500",
                thumbDest:`${photoAssetLoc}/thumbnails/AbstractThumb/bowl.png`,
                photoDest:`${photoAssetLoc}/abstract/bowl.jpg`,
            },
            {
                height:"2500",
                width:"3000",
                photoDest:`${photoAssetLoc}/abstract/dillapidation.jpg`,
                thumbDest:`${photoAssetLoc}/thumbnails/AbstractThumb/dillapidation.png`,
            },
            {
                height:"2500",
                width:"3000",
                photoDest:`${photoAssetLoc}/abstract/me.jpg`,
                thumbDest:`${photoAssetLoc}/thumbnails/AbstractThumb/me.png`,             
            },
            {
                height:"2500",
                width:"3000",
                photoDest:`${photoAssetLoc}/abstract/plate.jpg`,
                thumbDest:`${photoAssetLoc}/thumbnails/AbstractThumb/plate.png`,             
            },
            {
                height:"2500",
                width:"3000",
                photoDest:`${photoAssetLoc}/abstract/vase.jpg`,
                thumbDest:`${photoAssetLoc}/thumbnails/AbstractThumb/vase.png`,             
            },
        
            ]  
        },
        {
            boxId: 'electricLandscape',
            text: "Originally, I wanted to take streetscapes at night, in a style that would evoke a dark and lonely atmosphere using street lights. Unfortunately, there were too many cars going through my shots, so I decided to switch focus to a set of nightscapes that demonstrate the immediacy and power of light.",
            title:'Electric Landscapes', 
            photoLightBoxData:[
                {
                    height:"2500",
                    width:"3000",
                    photoDest:`${photoAssetLoc}/light/1.jpg`,
                    thumbDest:`${photoAssetLoc}/thumbnails/lightThumb/1.png`,             
                },
                {
                    height:"2500",
                    width:"3000",
                    photoDest:`${photoAssetLoc}/light/bus.jpg`,
                    thumbDest:`${photoAssetLoc}/thumbnails/lightThumb/bus.png`,             
                },
                {
                    height:"2500",
                    width:"3000",
                    photoDest:`${photoAssetLoc}/light/highway.jpg`,
                    thumbDest:`${photoAssetLoc}/thumbnails/lightThumb/highway.png`,             
                },
                {
                    height:"2500",
                    width:"3000",
                    photoDest:`${photoAssetLoc}/light/side.jpg`,
                    thumbDest:`${photoAssetLoc}/thumbnails/lightThumb/side.png`,             
                },
            ]
        }
    ]
}