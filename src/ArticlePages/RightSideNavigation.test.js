import {screen,render} from '@testing-library/react'
import RightSideNavigation from './RightSideNavigation'


test('Checking h3 heading',()=>{
    render(<RightSideNavigation/>)
    const headingElement = screen.getByRole('heading',{name:"Contents"})
    expect(headingElement).toBeInTheDocument()
})

describe("Checking link elements",()=>{

    test("checking link element1",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Preliminaries"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element2",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Linear regression with a single explanatory variable"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element3",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Preparing the Data"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element4",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Adding a column for the constant"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element5",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Running the model"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element6",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Regression Diagnostics"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element7",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Histogram of residuals"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element8",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Boxplot of residuals"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element9",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Q-Q Plots"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element10",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Fit Plot"})
        expect(linkElement).toBeInTheDocument()
    })
    test("checking link element11",()=>{
        render(<RightSideNavigation/>)
        const linkElement = screen.getByRole("link",{name:"Fit Plot in seaborn"})
        expect(linkElement).toBeInTheDocument()
    })
})

