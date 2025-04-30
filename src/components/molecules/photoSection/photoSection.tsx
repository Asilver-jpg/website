import {ExhibitSection, ExhibitSectionProps, PhotoLightboxProps, PhotoLightbox} from '../../atoms'
export type PhotoSectionProps = PhotoLightboxProps & ExhibitSectionProps

export function PhotoSection({boxId, photoLightBoxData, text, title}:PhotoSectionProps){

    return(
        <ExhibitSection text={text} title={title}>
            <PhotoLightbox boxId={boxId} photoLightBoxData={photoLightBoxData}/>
        </ExhibitSection>
    )

}