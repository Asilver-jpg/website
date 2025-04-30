import {designData} from '../../data'
import { PageExhibits } from '../organisms'

export function DesignContent(){
    return <PageExhibits data={designData.data} pageTitle={designData.pageTitle}/>
}