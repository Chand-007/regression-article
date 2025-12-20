import {useState} from 'react'
import LeftSideNavigation from "./ArticlePages/LeftSideNavigation"
import RegressionBlogArticle from "./ArticlePages/RegressionBlogArticle"
import RightSideNavigation from "./ArticlePages/RightSideNavigation"
import './StyleSheets/RegressionArticle.css'
import ProgressbarContainer from "./utils/ProgressbarContainer"


export default function RegressionArticle(){
    const[classVariable,setClassVariable] = useState("headLink1")

    return(
        <div className="dynamic-container">
            <div className="progressbar-container">
                <ProgressbarContainer/>
            </div>

            <div className="page-container">
                <div className='left-container'>
                    <LeftSideNavigation/>
                </div>
                <div className='middle-container'>
                     <RegressionBlogArticle setClassVariable={setClassVariable}/>
                </div>
                <div className='right-container'>
                <RightSideNavigation classVariable={classVariable}/>
                </div>
            </div>
        </div>
        
    )
}