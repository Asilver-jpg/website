import { NavLink } from 'react-router';
import './homePage.css'
import baffle from 'baffle';
import { useCallback, useEffect, useRef, useState } from 'react';
// import { motion, useScroll, useTransform } from "framer-motion";
import { AppNavBar } from '../../organisms';
import GoogleMapEmbed from '../../atoms/map/googleMapEmbeded';

interface Baffler {
    start: () => void;
    reveal: (duration: number) => void;
    text: (text: string) => void;
    remove: () => void;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    on: (event: string, callback: Function) => void;
    set: (options: StartOptions) => void;
}

export function HomePage(){
    const letters = "Animation".split('');
    const [isPlayButton, setIsPlayButton] = useState(false);
    const [baffler, setBaffler] = useState<Baffler | null>(null);
    const contentRef = useRef(null);


    // const { scrollYProgress } = useScroll({
    //     target: contentRef,
    //     offset: ["start start", "end start"]
    // });

    // const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    // const contentY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    
    const handleVideoEnter = () => {
        setIsPlayButton(true);
    }

    const handleVideoExit = () => {
        setIsPlayButton(false);
    }

    // Initialize baffle when component mounts
    useEffect(() => {
        const element = document.querySelector('.codeText');
        if (element) {
            const b = baffle('.codeText');
            b.set({
                characters: 'zpxzVpasdfh86136░█▒ ░░░█▓ >░░ ▓/▒█▓ █ █>█▒sayg▒ ░░░█▓ >yf',
                speed: 150
            });
            setBaffler(b);
            
            // Clean up function
            return () => {
                // Only try to remove if b is defined
                if (b) {
                    try {
                        b.text('Code'); // Reset text before removing
                        b.remove();
                    } catch (error) {
                        console.error("Error cleaning up baffle:", error);
                    }
                }
            };
        }
    }, []);

    const baffleCode = useCallback(() => {
        if (baffler) {
            try {
                baffler.start();
                baffler.reveal(2000);
            } catch (error) {
                console.error("Error running baffle animation:", error);
            }
        }
    }, [baffler]);

    const resetBaffle = useCallback(() => {
        if (baffler) {
            try {
                baffler.text('Code');
            } catch (error) {
                console.error("Error resetting baffle:", error);
            }
        }
    }, [baffler]);

    return( 
        <div className='container'>
           
         
            <div className="homeContainer" ref={contentRef}>
                
                {/* end of section */}
                <div className='whiteSection'>
                <AppNavBar burgerOnly={true}/>
                 
                            <div className='whiteSectionContent'>

                            <div className='nameSection'>
                                <h2>Alex Silver</h2>
                                <div className='scrollingContainer'>
                              
                                <div className='scrollingBox'>
                                    <ul>
                                        
                                        <li style={{color:'var(--green)'}}>Engineer</li>
                                        <li style={{color:'#62929E'}}>Artist</li>
                                        <li style={{color:'#FFC15E'}}>Designer</li>
                                        <li style={{color:'#70163C'}}>Animator</li>
                                        <li style={{color:'#824C71 '}}>Collaborator</li>
                                        <li style={{color:'#BA1200'}}>Builder</li>
                                        <li style={{color:'#0A2463'}}>Coder</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className='descriptionContainer'>
                                <div className='headshotWrapper'>
                                    <div className='headshot'>
                                        <img id="head" src='/assets/images/headshot.jpg'/>
                                        <div className="smile"></div>
                                        <div className='leftEye'/>
                                        <div className='rightEye'/>
                                    </div>

                                </div>
           
                            </div>
                            </div>
                  </div>
             
                  <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


            <div className='bioContainer'>
                <div className='descTextWrapper'>

                <p className='descText'>
                    Software Engineer in Astoria, NY blending creativity and code to build intuitive, impactful experiences—from polished frontends to robust backends, always with a human-centered approach.                
                    </p>
                    </div>
                <GoogleMapEmbed/>
            </div>
                
                    <div className='contentContainer'>
                        
                            <h2 className="indexFormat">
                                Come look at my:
                            </h2>
                        <div className="indexList">
                            <div>
                            <NavLink className='waveText' to='/animation'>
                                <p className='animationP'>
                                    {letters.map((letter, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                animationDelay: `${0.1 * index}s`, 
                                                display: 'inline-block',
                                            }}
                                        >
                                            {letter}
                                        </span>
                                    ))}
                                </p>
                            </NavLink>
                            </div>
                            <div>

                            <NavLink 
                                onMouseEnter={baffleCode}  
                                onMouseLeave={resetBaffle} 
                                className='text' 
                                to='/code'
                            >
                                <p className='linkText codeText'>Code</p>
                            </NavLink>
                            </div>
                            <div>
                            <NavLink className='text designText' to='/design'>
                                <p className='linkText'>Design</p> 
                                <div className='funShape'></div>
                            </NavLink>
                            </div>
                            <div>
                            <NavLink className='text photoText' to='/photo'>
                                <p className='linkText'>Photography</p>
                            </NavLink>
                            </div>
                            <div>
                            <NavLink 
                                onMouseEnter={handleVideoEnter} 
                                onMouseLeave={handleVideoExit}
                                className='text videoText' 
                                to='/video'
                            >
                                <p className='linkText'>
                                    {isPlayButton ? 
                                        <div className='v-container'>
                                            <span className='v-letter'>V</span>   
                                            <div className="v-line"></div>
                                        </div>
                                        : <span>V</span>
                                    }
                                    <span>i</span>
                                    <span>d</span>
                                    <span>e</span>
                                    <span>o</span>
                                </p>
                            </NavLink>
                            </div>
                        </div>
                    </div>

                <div className='footer'>
                    <div className="findMe">
                        <h2 className='info'>Information</h2>
                        <p><a href="https://github.com/Asilver-jpg">Github</a></p>
                        <p><a href="https://www.linkedin.com/in/alex-silver-139842155/">LinkedIn</a></p>
                        <p>Email: Asilver7493@gmail.com</p>
                        <p>{`Phone: +1 (914)-552-8909`}</p>
                        <p>
    
                            <a href='/ALEXANDER SILVER Resume  FE.pdff' download>Download Resume</a>
                            </p>
                    </div>
                </div>
                </div>
                        
               
            </div>
    );
}