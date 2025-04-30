import { videoData } from "../../data";
import { PageExhibits } from "../organisms";


export function VideoContent(){
    return <PageExhibits data={videoData.data} pageTitle={videoData.pageTitle}/>
}