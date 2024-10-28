import '../StyleSheets/RightSideNavigation.css'

export default function RightSideNavigation(){
    return(
        <div className='r-s-container'>
            <h3>Contents</h3>
            <ol className='contents-container'>
                <li><a href="#headLink1">Preliminaries</a></li>
                <li><a href="#headLink2">Linear regression with a single explanatory variable</a></li>
                <ol  className='inner-contents-container'>
                    <li><a href="#headsublink1">Preparing the Data</a></li>
                    <li><a href="#headsublink2">Adding a column for the constant</a></li>
                    <li><a href="#headsublink3">Running the model</a></li>
                </ol>
                <li><a href="#headLink3">Regression Diagnostics</a></li>
                <li><a href="#headLink4">Histogram of residuals</a></li>
                <li><a href="#headLink5">Boxplot of residuals</a></li>
                <li><a href="#headLink6">Q-Q Plots</a></li>
                <li><a href="#headLink7">Fit Plot</a></li>
                <li><a href="#headLink8">Fit Plot in seaborn</a></li>
            </ol>

        </div>
    )
}