import '../StyleSheets/RegressionBlogArticle.css'
import { concreteData } from '../ArrayTables/FirstArray'
import { data } from '../ArrayTables/FirstArray'
import { Flyash } from '../ArrayTables/FirstArray'
import {modelSummaryone} from '../ArrayTables/FirstArray'
import {modelSummarytwo} from '../ArrayTables/FirstArray'
import { regressionResults } from '../ArrayTables/FirstArray'
import { diagnostics_1 } from '../ArrayTables/FirstArray'
import { diagnostics_2 } from '../ArrayTables/FirstArray'
import { fitPlotValues_1 } from '../ArrayTables/FirstArray'
import { fitPlotValues_2 } from '../ArrayTables/FirstArray'

export default function RegressionBlogArticle(){
    return(
        <div className="main-middle-container">
            <div className="controls-container"></div>
            <h1>8. Simple Linear Regression</h1>
            <h2 id='headlink1'>8.1. Preliminaries</h2>
            <div className="code-box-1">
                <pre>
                 <code>
                    {`import pandas as pd`}{'\n'}{'\n'}
                    {`con = pd.read_csv('Data/ConcreteStrength.csv')`}{'\n'}
                    {`con.rename(columns={'Fly ash': 'FlyAsh', 'Coarse Aggr.': "CoarseAgg",'Fine Aggr.': 'FineAgg',`}{'\n'}
                    {'        '}{`'Air Entrainment': 'AirEntrain','Compressive Strength (28-day)(Mpa)': 'Strength'}, inplace=True)`}{'\n'}
                    {`con['AirEntrain'] = con['AirEntrain'].astype('category')`}{'\n'}
                    {`con.head()`}
                    </code>
                </pre>
            </div>
                <table className='concrete'>
                    <thead>
                        <tr>
                        <th></th>
                        <th>No</th>
                        <th>Cement</th>
                        <th>Slag</th>
                        <th>FlyAsh</th>
                        <th>Water</th>
                        <th>CoarseAgg</th>
                        <th>FineAgg</th>
                        <th>AirEntrain</th>
                        <th>Strength</th>
                        </tr>
                    </thead>
                    <tbody>
                        {concreteData.map((data)=>{
                            return(
                                <tr className='table-body-content'>
                                    <td>{data.Id}</td>
                                    <td>{data.No}</td>
                                    <td>{data.Cement}</td>
                                    <td>{data.Slag}</td>
                                    <td>{data.FlyAsh}</td>
                                    <td>{data.Water}</td>
                                    <td>{data.CoarseAgg}</td>
                                    <td>{data.FineAgg}</td>
                                    <td>{data.AirEntrain}</td>
                                    <td>{data.Strength}</td>
                                </tr>
                            )
                        })}
                    </tbody> 
                </table>
                <h2 id='headlink2'>8.2 Linear Regression with a single explanatory variable</h2>
                <p>There are many ways to do linear regression in Python. We have already used the heavyweight Statsmodels library, so we will continue to use it here. It has much more functionality than we need, but it provides nicely-formatted output similar to SAS Enterprise Guide.</p>
                <p>The method we will use to create linear regression models in the Statsmodels library is OLS(). OLS stands for “ordinary least squares”, which means the algorithm finds the best fit line my minimizing the squared residuals (this is “least squares”). The “ordinary” part of the name gives us the sense that the type of linear regression we are seeing here is just the tip of the methodological iceberg. There is a whole world of non-ordinary regression techniques out there intended to address this or that methodological problem or circumstance. But since this is a basic course, we will stick with ordinary least squares.</p>
                <h3 id='headsublink1'>8.2.1 Preparing the data</h3>
                <p>Recall the general format of the linear regression equation:{' '}
  <math xmlns="http://www.w3.org/1998/Math/MathML" className="math-equation">
  <mi>Y</mi>
  <mo>=</mo>
  <msub>
    <mi>&#x3B2;</mi>
    <mn>0</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>&#x3B2;</mi>
    <mn>1</mn>
  </msub>
  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>.</mo>
  <mo>+</mo>
  <msub>
    <mi>&#x3B2;</mi>
    <mi>n</mi>
  </msub>
  <msub>
    <mi>X</mi>
    <mi>n</mi>
  </msub>
</math>,
 where is the value of the response variable and <math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>X</mi>
    <mi>i</mi>
  </msub>
</math> is the value of the explanatory variable(s).</p>
                <p>If we think about this equation in matrix terms, we see that Y is a 1-dimensional matrix: it is just a single column (or array or vector) of numbers. In our case, this vector corresponds to the compressive strength of different batches of concrete measured in megapascals. The right-hand side of the equation is actually a 2-dimensional matrix: there is one column for our X variable and another column for the constant. We don’t often think about the constant as a column of data, but the Statsmodels library does, which is why we are talking about it.</p>
                <p>Creating a linear regression model in Statsmodels thus requires the following steps:</p>
                <ol>
                    <li>Import the Statsmodels library</li>
                    <li>Define Y and X matrices. This is optional, but it keeps the OLS() call easier to read</li>
                    <li>Add a constant column to the X matrix</li>
                    <li>Call OLS() to define the model</li>
                    <li>Call fit() to actually estimate the model parameters using the data set (fit the line)</li>
                    <li>Display the results</li>
                </ol>
                <p>Let’s start with the first three steps:</p>
                <div className="code-box-2">
                <pre>
                 <code>
                 {`import statsmodels.api as sm`}{'\n'}
                 {`Y = con['Strength']`}{'\n'}
                 {`X = con['FlyAsh']`}{'\n'}
                 {`X.head()`}{'\n'}
                    </code>
                </pre>
            </div>
            <div className='results-table-container'>
            <table className='result-table'>
              <tbody className='result-body'>
                {data.map((dataset)=>{
                  return(
                    <tr className="result-row">
                      <td className="results-first-row">{dataset.index}</td>
                      <td className="results-second-row">{dataset.value}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <p>Name: Flyash, dtype:float64</p>
            </div>
            <p>We see above that X is a single column of numbers (amount of fly ash in each batch of concrete). The numbers on the left are just the Python index (very row in a Python array has a row number, or index).

</p>
<h3 id="headsublink2">8.2.2 Adding a column for the constant</h3>
<p>We can add another column for the regression constant using Statsmodels add_constant() method:</p>
<div className="code-box-3">
                <pre>
                 <code>
                 {`X = sm.add_constant(X)`}{'\n'}
                 {`X.head()`}
                    </code>
                </pre>
            </div>
            <table className='flyash-table'>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Const</th>
                        <th>FlyAsh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Flyash.map((data)=>{
                            return(
                                <tr className='flyash-body-content'>
                                    <td>{data.index}</td>
                                    <td>{data.group}</td>
                                    <td>{data.value}</td>
                                </tr>
                            )
                        })}
                    </tbody> 
                </table>
                <p>Notice the difference: the X matrix has been augmented with a column of 1s called “const”. To see why, recall the point of linear regression: to use data to “learn” the parameters of the best-fit line and use the parameters to make predictions. The
                parameters of a line are its y-intercept and slope. Once we have the y-intercept and slope (<math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>&#x3B2;</mi>
    <mn>0</mn>
  </msub>
</math> and <math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>&#x3B2;</mi>
    <mn>1</mn>
  </msub>
</math> in the equation above or b and m in grade 9 math), we can multiply them by the data in the X matrix to get a prediction for Y.</p>
<p>Written out in words for the first row of our data, we get: Concrete strength estimate = <math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>&#x3B2;</mi>
    <mn>0</mn>
  </msub>
</math> x 1 + <math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>&#x3B2;</mi>
    <mn>1</mn>
  </msub>
</math> x 105.0</p>

<p>The “const” column simply provides a placeholder—a bunch of 1s to multiply the constant by. So now we understand why we have to run add_constant().</p>
<h3 id='headsublink3'>8.2.3 Running the model</h3>
<div className="code-box-4">
                <pre>
                 <code>
                 {`model = sm.OLS(Y, X, missing='drop')`}{'\n'}
                 {`model_result = model.fit()`}{'\n'}
                  {`model_result.summary()`}
                 </code>
                </pre>
            </div>
            <div className='model-analysis-table-container'>
            <table className='model-analysis-table'>
              <tbody className="model-analysis-body">
                {modelSummaryone.map((modeldetails)=>{
                  return(
                    <tr className='model-analysis-row'>
                      <td>{modeldetails.key}: </td>
                      <td>{modeldetails.value}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <table className='model-analysis-table'>
              <tbody className="model-analysis-body">
                {modelSummarytwo.map((modeldetails)=>{
                  return(
                    <tr className='model-analysis-row'>
                      <td>{modeldetails.key}: </td>
                      <td>{modeldetails.value}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            </div>
<p>OLS Regression Results</p>

<table className='regression-analysis'>
  <thead className='regression-head-analysis'>
    <tr>
      <th></th>
      <th>coef</th>
      <th>std err</th>
      <th>t</th>
      <th>P {`<`}|t|</th>
      <th>[0.025</th>
      <th>0.975]</th>
    </tr>
  </thead>
  <tbody className="regression-analysis-body">
    {regressionResults.map((regressionDetails)=>{
      return(
        <tr className='regression-analysis-row'>
          <td>{regressionDetails.variable}</td>
          <td>{regressionDetails.coef}</td>
          <td>{regressionDetails.stdErr}</td>
          <td>{regressionDetails.t}</td>
          <td>{regressionDetails.pValue}</td>
          <td>{regressionDetails.confInterval.lower}</td>
          <td>{regressionDetails.confInterval.upper}</td>
        </tr>
      )
    })}
  </tbody>
</table>
<div className='diagnostics-container'>
  <table className='diagnostics-sub-1'>
    <tbody className="diagnostics-sub-body-1">
      {diagnostics_1.map((diagnosticsdetails)=>{
        return(
          <tr className='diagnostics-sub-row-1'>
            <td>{diagnosticsdetails.key}</td>
            <td>{diagnosticsdetails.value}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  <table className='diagnostics-sub-2'>
  <tbody className="diagnostics-sub-body-2">
      {diagnostics_2.map((diagnosticsdetails)=>{
        return(
          <tr className='diagnostics-sub-row-2'>
            <td>{diagnosticsdetails.key}</td>
            <td>{diagnosticsdetails.value}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
</div>
<p>Notes:</p>
<p>[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.</p>
<p>This output look very similar to what we have seen before.</p>
<p className='hint-container'>
<span>Hint: </span>There is no missing data in the bank data set, so the missing='drop' argument above is not required. However, missing data is a fact of life in most data sets. The simplest way to handle it in linear regression is simply to censor (drop) all rows with missing data from the linear regression procedure. This is what I have done above.
</p>
<h2 id='headLink3'>8.3. Regression Diagnostics</h2>
<p>Like R, Statsmodels exposes the residuals. That is, keeps an array containing the difference between the observed values Y and the values predicted by the linear model. A fundamental assumption is that the residuals (or “errors”) are random: some big, some some small, some positive, some negative, but overall, the errors are normally distributed around a mean of zero. Anything other than normally distributed residuals indicates a serious problem with the linear model.
</p>
<h2 id='headLink4'>8.4. Histogram of residuals</h2>
<p>Plotting residuals in Seaborn is straightforward: we simply pass the histplot() function the array of residuals from the regression model.</p>
<div className="code-box-5">
                <pre>
                 <code>
                 {`import seaborn as sns`}{'\n'}
                 {`sns.histplot(model_result.resid);`}
                 </code>
                </pre>
            </div>
            <img className="hist-residual-pic" src="https://www.sfu.ca/~mjbrydon/tutorials/BAinPy/_images/09_regression_12_0.png"/>
            <p>A slightly more useful approach for assessing normality is to compare the kernel density estimate with the curve for the corresponding normal curve. To do this, we generate the normal curve that has the same mean and standard deviation as our observed residual and plot it on top of our residual.</p>
            <p>We use a Python trick to assign two values at once: the fit() function returns both the mean and the standard deviation of the best-fit normal distribution.</p>
            <div className="code-box-6">
                <pre>
                 <code>
                 {`from scipy import stats`}{'\n'}
                 {`mu, std = stats.norm.fit(model_result.resid)`}{'\n'}
                 {`mu, std`}
                 </code>
                </pre>
            </div> 
            <p className="results-container-1">(-1.283116008265812e-14, 8.418278511304978)</p>
            <p>We can now re-plot the residuals as a kernel density plot and overlay the normal curve with the same mean and standard deviation:</p>
            <div className="code-box-7">
                <pre>
                 <code>
                 {`import matplotlib.pyplot as plt`}{'\n'}
{`import numpy as np`}{'\n'}

{`fig, ax = plt.subplots()`}{'\n'}
{`# plot the residuals`}{'\n'}
{`sns.histplot(x=model_result.resid, ax=ax, stat="density", linewidth=0, kde=True)`}{'\n'}
{`ax.set(title="Distribution of residuals", xlabel="residual")`}{'\n'}

{`# plot corresponding normal curve`}
{`xmin, xmax = plt.xlim() # the maximum x values from the histogram above`}{'\n'}
{`x = np.linspace(xmin, xmax, 100) # generate some x values`}{'\n'}
{`p = stats.norm.pdf(x, mu, std) # calculate the y values for the normal curve`}{'\n'}
{`sns.lineplot(x=x, y=p, color="orange", ax=ax)`}{'\n'}
{`plt.show()`}
                 </code>
                </pre>
            </div> 
            <img className="hist-residual-pic" src="https://www.sfu.ca/~mjbrydon/tutorials/BAinPy/_images/09_regression_16_0.png"/>
            <h2 id='headLink5'>8.5. Boxplot of residuals</h2>
            <p>A boxplot is often better when the residuals are highly non-normal. Here we see a reasonable distribution with the mean close to the median (indicating symmetry).</p>
            <div className="code-box-8">
                <pre>
                 <code>
                 {`sns.boxplot(x=model_result.resid, showmeans=True);`}{'\n'}
                 </code>
                </pre>
            </div>
            <img className='hist-residual-pic' src='https://www.sfu.ca/~mjbrydon/tutorials/BAinPy/_images/09_regression_18_0.png'/>
            <h2 id='headLink6'>8.6. Q-Q plot</h2>
            <p>A Q-Q plot is a bit more specialized than a histogram or boxplot, so the easiest thing is to use the regression diagnostic plots provided by Statsmodels. How did I know Statsmodels has regression diagnostic plots? I Googled it. These plots are not as attractive as the Seaborn plots, but they are intended primarily for the data analyst. I think it is safe to assume that high-level decision makers will not be asking for Q-Q plots.</p>
            <div className="code-box-8">
                <pre>
                 <code>
                 {`sm.qqplot(model_result.resid, line='s');`}{'\n'}
                 </code>
                </pre>
            </div>
            <img className='hist-residual-pic' src='https://www.sfu.ca/~mjbrydon/tutorials/BAinPy/_images/09_regression_21_0.png'/>
            <h2 id='headLink7'>8.7. Fitplot</h2>
            <p>A fit plot shows predicted values of the response variable versus actual values of Y. If the linear regression model is perfect, the predicted values will exactly equal the observed values and all the data points in a predicted versus actual scatterplot will fall on the 45° diagonal.</p>
            <p>The fit plot provided by Statsmodels is okay in the sense that it gives a rough sense of the quality of the model. Since the <math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>R</mi>
    <mrow data-mjx-texclass="ORD">
      <mn>2</mn>
    </mrow>
  </msup>
</math>
            of this model is only 0.165, it should come as no surprise that the fit model is not particularly good.</p>
            <img className="hist-residual-pic" src="https://www.sfu.ca/~mjbrydon/tutorials/BAinPy/_images/09_regression_23_0.png"/>
            <h2 id='headLink8'>8.8. Fit plot in seaborn</h2>
            <p>As in R, creating a better fit plot is a bit more work. The central issue is that the observed and predicted axis must be identical for the reference line to be 45°. To achieve this, I do the following below:</p>
            <ol>
              <li>Determine the min and max values for the observed values of Y</li>
              <li>Predict values of Y</li>
              <li>Create a plot showing the observed versus predicted values of Y. Save this to an object (in my case ax)</li>
              <li>Modify the chart object so that the two axes share the same minimum and maximum values</li>
              <li>Generate data on a 45° line and add the reference line to the plot</li>
            </ol>
            <div className="code-box-8">
                <pre>
                 <code>
                 {`model_result.fittedvalues`}
                 </code>
                </pre>
            </div>
            <div className='fitPlotContainer'>
              <table className='fitPlotTable'>
                <tbody>
                  {fitPlotValues_1.map((plotValues)=>{
                    return(
                      <tr className='fit-plot-row'>
                      <td>{plotValues.index}</td>
                      <td>{plotValues.value}</td>
                    </tr>
                    )
                    
                  })}
                </tbody>
              </table>
            </div>
            <div className="code-box-9">
                <pre>
                 <code>
                 {`Y_max = Y.max()`}{'\n'}
                  {`Y_min = Y.min()`}{'\n'}

{`ax = sns.scatterplot(x=model_result.fittedvalues, y=Y)`}{'\n'}
{`ax.set(ylim=(Y_min, Y_max))`}{'\n'}
{`ax.set(xlim=(Y_min, Y_max))`}{'\n'}
{`ax.set_xlabel("Predicted value of Strength")`}{'\n'}
{`ax.set_ylabel("Observed value of Strength")`}{'\n'}

{`X_ref = Y_ref = np.linspace(Y_min, Y_max, 100)`}{'\n'}
{`plt.plot(X_ref, Y_ref, color='red', linewidth=1)`}{'\n'}
{`plt.show()`}
                 </code>
                </pre>
            </div>

            <img className='hist-residual-pic-1' src="https://www.sfu.ca/~mjbrydon/tutorials/BAinPy/_images/09_regression_26_0.png"/>
            <div className='navigation-button-container'>
              <div className='left-navigation-button nav-button'>
                <p className='nav-para'>{`<<`} 7. Correlation and scatterplot</p>
              </div>
              <div className='right-navigation-button nav-button'>
                <p className='nav-para'>9. Multiple Linear Regression {` >>`}</p>
              </div>
            </div>
            <div className='bottom-border'></div>
            <p>BY Michael Brydon</p>
            <p>{`@`}Copywright</p>


</div>
    )
}