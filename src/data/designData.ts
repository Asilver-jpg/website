import { PageExhibitProps } from "../components";
import { photoAssetLoc } from "./photoData";

export const designAssetLoc = '/assets/images/Design'
export const designData: PageExhibitProps = {
    pageTitle: 'Design',
    data:[
        {
            boxId:'graveDigger',
            text:'While I was working at Primal RC, I designed this as a sticker to be the first thing a customer saw when they opened up their Grave Digger RC vehicle.',
            title:'Grave Digger Sticker',
            photoLightBoxData:[
                { 
                    height:"600",
                    width:"464",
                    extraClass:'singleImage',
                     photoDest:`${designAssetLoc}/innerBoxSticker.jpg`,
                    thumbDest:`${designAssetLoc}/innerBoxStickerThumb.jpg`
        }
            ]
        },
        {
            boxId:'concertPosters',
            text: `Posters designed for the band Muse's albumn Origin of Symmetry. Each poster is designed based on one of three artistic movements: Dadism, Russian Constructivism, and Futurism.`,
            title: 'Mechanical Convergence of Song',
            photoLightBoxData:[
                {
                    height:"600",
                    width:"464",
                    photoDest:`${designAssetLoc}/poster/posterOne.jpg`,
                    thumbDest:`${designAssetLoc}/thumbnails/posterThumb/posterOneThumb.png`,             
                },
                {
                    height:"600",
                    width:"388",
                    photoDest:`${designAssetLoc}/poster/dude.jpg`,
                    thumbDest:`${designAssetLoc}/thumbnails/posterThumb/dudeThumb.png`,             
                },
                {
                    height:"600",
                    width:"388",
                    photoDest:`${designAssetLoc}/poster/perfect.jpg`,
                    thumbDest:`${designAssetLoc}/thumbnails/posterThumb/perfectThumb.png`,             
                },
                {
                    height:"600",
                    width:"388",
                    photoDest:`${designAssetLoc}/poster/muse.jpg`,
                    thumbDest:`${designAssetLoc}/thumbnails/posterThumb/museThumb.png`,             
                },
                {
                    height:"600",
                    width:"388",
                    photoDest:`${designAssetLoc}/poster/robo.jpg`,
                    thumbDest:`${designAssetLoc}/thumbnails/posterThumb/roboThumb.png`,             
                },
            ]
        },
        {
        boxId: 'photoCollage',
        text: "A set of pieces exploring themes of obstruction and hiding. Inspired by the Picture Generation. Created with Photoshop and Illustrator.",
        title:'Hiding in Plain View', 
        photoLightBoxData:[
            {
                height:"2500",
                width:"2000",
                photoDest:`${photoAssetLoc}/collage/laughing at the blind.jpg`,
                thumbDest:`${photoAssetLoc}/thumbnails/collageThumb/laughing at the blind.png`,             
            },
            {
                height:"600",
                width:"968",
                photoDest:`${photoAssetLoc}/final/glance across the streetway.jpg`,
                thumbDest:`${photoAssetLoc}/thumbnails/finalThumb/glance across the streetway.png`,             
            },
            {
                height:"600",
                width:"804",
                photoDest:`${photoAssetLoc}/final/men in suits.jpg`,
                thumbDest:`${photoAssetLoc}/thumbnails/finalThumb/men in suits.png`,             
            },
            {
                height:"2500",
                width:"1600",
                photoDest:`${photoAssetLoc}/collage/model in the eyes of death.jpg`,
                thumbDest:`${photoAssetLoc}/thumbnails/collageThumb/model in the eyes of death.png`,             
            },
            {
                height:"600",
                width:"509",
                photoDest:`${photoAssetLoc}/final/untitled 1.jpg`,
                thumbDest:`${photoAssetLoc}/thumbnails/finalThumb/untitled 1.png`,             
            },
        ]
    },
    {
        boxId: 'type',
        text:'Expressing the meanings of words with design fundamentals',
        title: "The Possibilities of Type",
        photoLightBoxData:[
            {
                height:"2500",
                width:"3000",
                photoDest:`${designAssetLoc}/type/maddening.jpg`,
                thumbDest:`${designAssetLoc}/thumbnails/typeThumb/maddening.png`,             
            },
            {
                height:"2500",
                width:"3000",
                photoDest:`${designAssetLoc}/type/depth.jpg`,
                thumbDest:`${designAssetLoc}/thumbnails/typeThumb/depth.png`,             
            },
            {
                height:"2500",
                width:"3000",
                photoDest:`${designAssetLoc}/type/imperfect.jpg`,
                thumbDest:`${designAssetLoc}/thumbnails/typeThumb/imperfect.png`,             
            },
            {
                height:"2500",
                width:"3000",
                photoDest:`${designAssetLoc}/type/dense.jpg`,
                thumbDest:`${designAssetLoc}/thumbnails/typeThumb/dense.png`,             
            },
            {
                height:"2500",
                width:"3000",
                photoDest:`${designAssetLoc}/type/whimsy.jpg`,
                thumbDest:`${designAssetLoc}/thumbnails/typeThumb/whimsy.png`,             
            },
        ]
    }
]
}