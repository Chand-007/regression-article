export const concreteData = [
    {Id:0 , No: 1, Cement: 273.0, Slag: 82.0, FlyAsh: 105.0, Water: 210.0, SP: 9.0, CoarseAgg: 904.0, FineAgg: 680.0, AirEntrain: 'No', Strength: 34.990 },
    { Id:1,No: 2, Cement: 163.0, Slag: 149.0, FlyAsh: 191.0, Water: 180.0, SP: 12.0, CoarseAgg: 843.0, FineAgg: 746.0, AirEntrain: 'Yes', Strength: 32.272 },
    { Id:2,No: 3, Cement: 162.0, Slag: 148.0, FlyAsh: 191.0, Water: 179.0, SP: 16.0, CoarseAgg: 840.0, FineAgg: 743.0, AirEntrain: 'Yes', Strength: 35.450 },
    { Id:3,No: 4, Cement: 162.0, Slag: 148.0, FlyAsh: 190.0, Water: 179.0, SP: 19.0, CoarseAgg: 838.0, FineAgg: 741.0, AirEntrain: 'No', Strength: 42.080 },
    { Id:4,No: 5, Cement: 154.0, Slag: 112.0, FlyAsh: 144.0, Water: 220.0, SP: 10.0, CoarseAgg: 923.0, FineAgg: 658.0, AirEntrain: 'No', Strength: 26.820 }
];

export const data = [
    { index: 0, value: 105.0 },
    { index: 1, value: 191.0 },
    { index: 2, value: 191.0 },
    { index: 3, value: 190.0 },
    { index: 4, value: 144.0 }
];

export const Flyash = [
    { index: 0, group: 1.0, value: 105.0 },
    { index: 1, group: 1.0, value: 191.0 },
    { index: 2, group: 1.0, value: 191.0 },
    { index: 3, group: 1.0, value: 190.0 },
    { index: 4, group: 1.0, value: 144.0 }
];

export const modelSummaryone=[
    { key: "Dep. Variable", value: "Strength" },
    { key: "R-squared", value: 0.165 },
    { key: "Model", value: "OLS" },
    { key: "Adj. R-squared", value: 0.157 },
    { key: "Method", value: "Least Squares" },
    { key: "F-statistic", value: 19.98 },
    { key: "Date", value: "Mon, 24 May 2021" },
    { key: "Prob (F-statistic)", value: 2.05e-05 },

];

export const modelSummarytwo = [
    { key: "Time", value: "12:29:58" },
    { key: "Log-Likelihood", value: -365.58 },
    { key: "No. Observations", value: 103 },
    { key: "AIC", value: 735.2 },
    { key: "Df Residuals", value: 101 },
    { key: "BIC", value: 740.4 },
    { key: "Df Model", value: 1 },
    { key: "Covariance Type", value: "nonrobust" }
]

export const regressionResults = [
    {
        variable: "const",
        coef: 26.2764,
        stdErr: 1.691,
        t: 15.543,
        pValue: 0.000,
        confInterval: { lower: 22.923, upper: 29.630 }
    },
    {
        variable: "FlyAsh",
        coef: 0.0440,
        stdErr: 0.010,
        t: 4.470,
        pValue: 0.000,
        confInterval: { lower: 0.024, upper: 0.064 }
    }
];


export const diagnostics_1 = [
    { key: "Omnibus", value: 5.741 },
    { key: "Durbin-Watson", value: 1.098 },
    { key: "Prob(Omnibus)", value: 0.057 },
    { key: "Jarque-Bera (JB)", value: 2.716 },
];

export const diagnostics_2 = [
    { key: "Skew", value: 0.064 },
    { key: "Prob(JB)", value: 0.257 },
    { key: "Kurtosis", value: 2.215 },
    { key: "Cond. No.", value: 346 }
]

export const fitPlotValues_1 = [
    { index: 0, value: 30.901424 },
    { index: 1, value: 34.689565 },
    { index: 2, value: 34.689565 },
    { index: 3, value: 34.645517 },
    { index: 4, value: 32.619302 },
    { index: 98, value: 36.808282 },
    { index: 99, value: 36.843520 },
    { index: 100, value: 36.830306 },
    { index: 101, value: 36.843520 },
    { index: 102, value: 36.103511 }
]

export const fitPlotValues_2=[

];