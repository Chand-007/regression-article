import '../StyleSheets/LeftSideNavigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function LeftSideNavigation(){
    return(
        <div className='l-s-container'>
            <h3>Basic Analytics in Python</h3>
            <input type='text' placeholder="Search Book..."/>
            <p className="highlight">Introduction to Python for Data <span className="break">Analysis</span></p>
            <ol className="content-list">
                <li>Importing Data</li>
                <li>Basic Visualization</li>
                <li>Filtering Data</li>
                <li>Recording Data</li>
                <li>Gap Analysis Using t-Tests</li>
                <li>Gap Analysis with Categorical Variables</li>
                <li>Correlation and Scatterplots</li>
                <li>Simple Linear regression</li>
                <li>Multiple Linear Regression</li>
            </ol>
        </div>
    )
}