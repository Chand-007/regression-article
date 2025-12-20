import '../StyleSheets/RightSideNavigation.css'

export default function RightSideNavigation({classVariable}){
    return(
        <div className='r-s-container'>
            <h3>Contents</h3>
            <ol className='contents-container'>
                <li><a href="#headLink1" className={classVariable === "headLink1"?"bg-highlight":"bg"}>Preliminaries</a></li>
                <li><a href="#headLink2"className={classVariable === "headLink2"?"bg-highlight":"bg"}>Linear regression with a single explanatory variable</a></li>
                <ol  className='inner-contents-container'>
                    <li><a href="#headsublink1"className={classVariable === "headsublink1"?"bg-highlight":"bg"}>Preparing the Data</a></li>
                    <li><a href="#headsublink2" className={classVariable === "headsublink2"?"bg-highlight":"bg"}>Adding a column for the constant</a></li>
                    <li><a href="#headsublink3" className={classVariable === "headsublink3"?"bg-highlight":"bg"}>Running the model</a></li>
                </ol>
                <li><a href="#headLink3"className={classVariable === "headLink3"?"bg-highlight":"bg"}>Regression Diagnostics</a></li>
                <li><a href="#headLink4" className={classVariable === "headLink4"?"bg-highlight":"bg"}>Histogram of residuals</a></li>
                <li><a href="#headLink5" className={classVariable === "headLink5"?"bg-highlight":"bg"}>Boxplot of residuals</a></li>
                <li><a href="#headLink6" className={classVariable === "headLink6"?"bg-highlight":"bg"}>Q-Q Plots</a></li>
                <li><a href="#headLink7" className={classVariable === "headLink7"?"bg-highlight":"bg"}>Fit Plot</a></li>
                <li><a href="#headLink8" className={classVariable === "headLink8"?"bg-highlight":"bg"}>Fit Plot in seaborn</a></li>
            </ol>

        </div>
    )
}