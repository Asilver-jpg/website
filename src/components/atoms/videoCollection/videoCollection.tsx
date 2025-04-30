import { useState, useRef, useEffect } from 'react';
import './videoCollection.css'

export interface VideoCollectionProps{
    href: string
}

export function VideoCollection({href}:VideoCollectionProps){
    const [embedUrl, setEmbedUrl] = useState(href)
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const updateEmbedUrl = () => {
          const isMobile = window.innerWidth < 768; 
          const url = new URL(href);
          url.searchParams.set('playsinline', isMobile ? '0' : '1');
          setEmbedUrl(url.toString());
        };
    
        updateEmbedUrl(); 
        window.addEventListener('resize', updateEmbedUrl); 
    
        return () => {
          window.removeEventListener('resize', updateEmbedUrl);
        };
      }, [href]);

    return (
        <div className='video'>
            <iframe ref={iframeRef} src={embedUrl} width="640" height="360"allow="autoplay; fullscreen" loading="lazy" allowFullScreen/>
        </div>
    )
}