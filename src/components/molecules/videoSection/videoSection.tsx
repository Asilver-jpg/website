import { ExhibitSection, ExhibitSectionProps } from "../../atoms";
import { VideoCollection } from "../../atoms/videoCollection";

export type VideoSectionProps = ExhibitSectionProps & {urls: string[], bioTechManifesto?: string[]}

export function VideoSection({urls, text, title, bioTechManifesto}:VideoSectionProps){
return(
    <div>
        <ExhibitSection text={text} title={title} biotechManifesto={bioTechManifesto}>
            {
                urls.map((url)=> <VideoCollection href={url}/>)
            }
        </ExhibitSection>
    </div>
)

}