import {useState,useEffect} from 'react'
import './ProgressbarContainer.css'



export default function ProgressbarContainer(){

    const [scrollTop,setScrollTop] = useState(0)

    const onScroll= ()=>{
        const windowScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight-document.documentElement.clientHeight
        const scrolled = (windowScroll/height)*100
        setScrollTop(scrolled)
    }

    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
        return ()=>window.removeEventListener("scroll",onScroll)
    },[])

    return(
        <div className="progress-bar-container">
            <div className="progress-bar" style={{width:`${scrollTop}%`}}>
            </div>
        </div>
    )
}