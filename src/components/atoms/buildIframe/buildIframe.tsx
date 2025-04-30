import './buildIframe.css'

interface BuildIframeProps{
    src:string
}

export function BuildIframe({src}:BuildIframeProps){
    return(
        <iframe className="embedded"
            src={src}
        />
    )
}