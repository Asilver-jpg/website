import { Button, ButtonProps } from "../../atoms/buttons";
import './navbar.css'

interface NavBarProps {
    navButtons:  ButtonProps[]
    open: boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    burgerOnly?: boolean
}

export function NavBar({navButtons, open, burgerOnly}:NavBarProps) {
    return(
        <div className= {`  ${ burgerOnly ? 'burgerOn' : 'navbar' } ${open? 'open' : ''}`}>
            {
                navButtons.map(( {destination, text, type, active}) => <Button destination={destination} text={text} type={type} active={active} key={text}/>)
            }
        </div>
    )

}