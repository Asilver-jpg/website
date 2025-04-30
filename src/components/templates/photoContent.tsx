import { photoData } from "../../data/photoData";
import { PageExhibits } from "../organisms";


export function PhotoContent(){
    return <PageExhibits data={photoData.data} pageTitle={photoData.pageTitle}/>
}