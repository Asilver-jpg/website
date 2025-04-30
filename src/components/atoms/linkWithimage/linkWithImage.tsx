import { NavLink, useNavigate } from "react-router"
import './linkWithImage.css'

export type LinkData = {
    dest: string,
    name: string
}

export interface LinkedWithImageProps {
    link:LinkData
    images:string[]
}

export function LinkWithImage({images, link}:LinkedWithImageProps){
    const navigate= useNavigate()

    return(
        <div className='linkImageWrapper'>
            <div className ='linkImages'>
                {
                    images.map((img)=>{
                        return(
                            <img src={img}></img>
                        )
                    })
                }
            </div>
            <div className='link' onClick={()=>{navigate(link.dest)}}>
                <button>
                    <NavLink className='text' to={link.dest}><p className= 'linkText'>{link.name}</p></NavLink>
                    <div className="icon-container">
			<div className="icon icon--left">
				<svg>
					<use xlinkHref="#arrow-right"></use>
				</svg>
			</div>
			<div className="icon icon--right">
				<svg>
					<use xlinkHref="#arrow-right"></use>
				</svg>
			</div>
		</div>
                </button>
            </div>
            <svg style={{display: "none"}}>
	<symbol id="arrow-right" viewBox="0 0 20 10">
		<path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
	</symbol>
</svg>
        </div>
    )
}