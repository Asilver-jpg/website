import { ReactNode } from 'react'
import './exhibitSection.css'
import { OrderedList } from '../orderedList'

export interface ExhibitSectionProps{
    title: string
    text:string
    children?: ReactNode
    biotechManifesto?: string[]
}

export function ExhibitSection({text, title, children, biotechManifesto}:ExhibitSectionProps){
    return (
        <div className = "exhibitSection">
            <h2 className="exhibitTitle">{title}</h2>
            <p className = "exhibitText">{text} {biotechManifesto && <OrderedList list={biotechManifesto}/>}</p>
            
            {children}
        </div>
    )
}

 