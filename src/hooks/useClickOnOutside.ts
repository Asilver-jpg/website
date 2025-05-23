import {  RefObject, useEffect } from "react"


export const useOnClickOutside = (ref: RefObject<HTMLElement> | RefObject<null>, handler:(event:MouseEvent)=>void) =>{
    useEffect(()=>{
        const listener = (event:MouseEvent) => {
            if(ref && !ref.current || ref.current.contains(event.target as Node)){
                return
            }
            handler(event)
        };
        document.addEventListener('mousedown', listener);
        return() =>{
            document.removeEventListener('mousedown', listener)
        }
    }, [ref, handler]
)
}