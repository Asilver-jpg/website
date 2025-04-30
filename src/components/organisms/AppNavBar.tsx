import { useRef, useState } from "react";
import { Burger, ButtonProps } from "../atoms/buttons";
import { NavBar } from "../molecules";
import { useOnClickOutside } from "../../hooks/useClickOnOutside";
import './AppNavBar.css'

interface AppNavbarProps{
    burgerOnly?:boolean
}

export function AppNavBar({burgerOnly}:AppNavbarProps){
    const urlSegments = window.location.href.split('/')
    const currPage = `/${urlSegments[urlSegments.length -1]}`
    const navBarProps:ButtonProps[] =[
        {destination:'/animation', text:'Animation', type: 'nav'},
        {destination:'/code', text:'Code', type:'nav'},
        {destination:'/design', text:'Design', type: 'nav'},
        {destination:'/photo', text:'Photo', type: 'nav'},
        {destination:'/video', text:'Video', type: 'nav'},
    ]
    const activeTab = navBarProps.findIndex((button) => button.destination === currPage)
    navBarProps[activeTab] = {...navBarProps[activeTab], active: true}
    const [open, setOpen] = useState(false)
    const node = useRef(null);
    useOnClickOutside(node, ()=>setOpen(false))

    return(
        <nav ref = {node} className= 'homeNav'>
            <Burger burgerOnly={burgerOnly} open={open} setOpen={setOpen}/>
  
            <NavBar navButtons={navBarProps} open={open} setOpen={setOpen} burgerOnly={burgerOnly}/>
            
        </nav>
    )
}