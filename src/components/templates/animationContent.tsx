import {animationData} from '../../data'
import { PageExhibits } from '../organisms'

export function AnimationContent(){
    return <PageExhibits data={animationData.data} pageTitle={animationData.pageTitle}/>
}