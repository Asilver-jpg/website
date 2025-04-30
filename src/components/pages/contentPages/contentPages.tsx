import { Header } from "../../molecules/header"
import { AppNavBar } from "../../organisms"
import { PhotoContent, AnimationContent, VideoContent, CodeContent } from "../../templates"
import { DesignContent } from "../../templates/designContent"

interface ContentPagesProps{
    sourceData: SourceData
}

type SourceData = 'animation' | 'photo' | 'code' | 'design' | 'video'

export function ContentPages({sourceData}:ContentPagesProps){
        return(
        <>
            <Header/>
            <AppNavBar/>
            {sourceData === 'animation' && <AnimationContent/>}
            {sourceData === 'photo' && <PhotoContent/>}
            {sourceData==='design' && <DesignContent/>}
            {sourceData==='video' && <VideoContent/>}
            {sourceData==='code' && <CodeContent/>}
            
        </>
        )
    }
    
