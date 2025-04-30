import { useEffect, useRef, useState } from 'react'
import './gif.css'
import { LinkData } from '../linkWithimage/linkWithImage';
import { NavLink, useNavigate } from 'react-router';

export interface GifProps{
    gifUrls: string[]
    gifLink?:LinkData
}
interface ScreenOrientationWithLock extends ScreenOrientation {
    lock: (orientation: 'portrait' | 'landscape') => Promise<void>;
  }

export function Gifs({gifUrls, gifLink}:GifProps){
    const navigate= useNavigate()
    const [mobile, setMobile] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(()=>{
        const updateMobile = () => {
            console.log(window.innerWidth< 768)
            setMobile(window.innerWidth< 768);
        }
        updateMobile()
        window.addEventListener('resize', updateMobile); 
        return()=>{
            window.removeEventListener('resize', updateMobile)
        }
    },[])


    const handleVideoClick = async() => {
        const video = videoRef.current;
        if (!video) return;
        if (video.requestFullscreen) {
          video.requestFullscreen();
        }
        const orientation = screen.orientation as ScreenOrientationWithLock
        if  (orientation) {
            await orientation.lock('landscape');
        }
    
      };

   
    return(
        <div className= 'gifSection'>
            {
                gifUrls.map((url)=>{
                    if(!mobile){
                    return(
                        <video className='gifVideo' key={url}  autoPlay loop muted>
                            <source type='video/mp4' src={url}/>
                        </video>
                    )
                }
                else{
                    return(
                            <video className='gifVideo' ref={videoRef} src={url} autoPlay onClick={handleVideoClick}
                            ></video>
                    )
                }
                })
            }
            {
                gifLink && 
                <>
                <div className='gifLink' onClick={()=>{navigate(gifLink.dest)}}>
                    <button>
                        <NavLink className='text' to={gifLink.dest}><p className='linkText'>{gifLink.name}</p></NavLink>
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
                </div><svg style={{ display: "none" }}>
                        <symbol id="arrow-right" viewBox="0 0 20 10">
                            <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
                        </symbol>
                    </svg></>
            }
        </div>
    )

}