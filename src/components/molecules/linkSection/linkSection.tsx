import { ExhibitSection, ExhibitSectionProps } from "../../atoms";
import { LinkedWithImageProps, LinkWithImage } from "../../atoms/linkWithimage/linkWithImage";

export type LinkedSectionProps = LinkedWithImageProps & ExhibitSectionProps

export function LinkSection({images, link, text, title}:LinkedSectionProps){
    return (
                <ExhibitSection text={text} title={title}>
                    <LinkWithImage images={images} link={link}/>
                </ExhibitSection>
        
    )
}