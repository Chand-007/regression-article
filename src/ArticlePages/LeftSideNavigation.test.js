import {render,screen, within} from '@testing-library/react'
import LeftSideNavigation from './LeftSideNavigation'


test('check the test heading',()=>{
    render(<LeftSideNavigation/>);
    const headingElement = screen.getByText(/Basic Analytics in Python/i)
    expect(headingElement).toBeInTheDocument();
})

test("Testing search box",()=>{
    render(<LeftSideNavigation/>)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
})

test("testing list",()=>{
    render(<LeftSideNavigation/>)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
})

test("Testing listitems in the list",()=>{
    render(<LeftSideNavigation/>)
    const listElement = screen.getByRole('list')

    const {getAllByRole} = within(listElement)
    const items = getAllByRole('listitem')
    expect(items.length).toBe(9)
})