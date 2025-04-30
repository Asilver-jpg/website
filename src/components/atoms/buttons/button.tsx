import { ReactElement, useEffect, useState } from "react";
import './button.css'
import { NavLink } from "react-router";

export interface ButtonProps {
    text: string
    destination: string
    type: "nav" | "other" | "home"
    active?:boolean
}

export function Button({ text, destination, type, active=false }: ButtonProps): ReactElement {
    const [isFocused, setIsFocused] = useState(false)
    const [activeClass, setActiveClass] = useState(text)
    const [prevRandom, setPrevRandom] = useState(5)
    useEffect(()=>{
        const homeClasses = ['shake','scroll','crossOut','text_shadows'];
        if(type === 'home'){
            if(isFocused){
                let random = Math.floor(Math.random() *4)
                while(random === prevRandom){
                    random = Math.floor(Math.random() *4)
                }
                setPrevRandom(random)
                setActiveClass(homeClasses[random])
            }else{
                setActiveClass('')
            }
        }
    },[isFocused, text, type])
    
    
    return (<div className= {`${type} ${activeClass} ${active ? "active" : ""}`} onMouseEnter={() =>setIsFocused(true)} onMouseLeave={()=>setIsFocused(false)}>
        <NavLink  aria-label={type === 'home' ? 'home' : destination} to={destination}>{<span>{text}</span>}</NavLink>
        </div>)
}