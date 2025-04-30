import { GifProps, ExhibitSectionProps, ExhibitSection, Gifs } from "../../atoms";

export type GifSectionProps = GifProps & ExhibitSectionProps

export function GifSection({text, title, gifUrls, gifLink}:GifSectionProps){
    return(
        <ExhibitSection text={text} title={title}>
            <Gifs gifUrls={gifUrls} gifLink={gifLink}/>
        </ExhibitSection>
    )
}