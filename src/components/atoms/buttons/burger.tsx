import './burger.css'

interface BurgerProps{
    open: boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    burgerOnly?:boolean
}

export function Burger({open, setOpen, burgerOnly}:BurgerProps){
    return (
        <div className={`${burgerOnly ? 'burgerOnly' : 'burger'} ${open ? 'burgerOpen' : ''}`} onClick={()=> setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </div>
    )
}