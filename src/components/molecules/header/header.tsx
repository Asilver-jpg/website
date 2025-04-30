import { Button } from "../../atoms";
import './header.css'

export function Header(){
    return(
        <div className= 'header'>
            <Button destination="/" text="Alex Silver" type="home" active={false}/>
        </div>
    )
}