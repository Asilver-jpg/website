import { PageExhibits } from "../organisms";
import {codeData} from '../../data'

export function CodeContent(){
    return <PageExhibits data={codeData.data} pageTitle={codeData.pageTitle}/>
}