import LeftSideNavigation from "./ArticlePages/LeftSideNavigation"
import RegressionBlogArticle from "./ArticlePages/RegressionBlogArticle"
import RightSideNavigation from "./ArticlePages/RightSideNavigation"
import './StyleSheets/RegressionArticle.css'
import ProgressbarContainer from "./utils/ProgressbarContainer"

export default function RegressionArticle(){
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
                     <RegressionBlogArticle/>
                </div>
                <div className='right-container'>
                <RightSideNavigation/>
                </div>
            </div>
        </div>
        
    )
}