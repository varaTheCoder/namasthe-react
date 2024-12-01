import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';

describe("Contact Page test cases", ()=> {
    
test('check component loads or not',() => {
    render(<Contact/> ) // render the component that want
     const heading = screen.getByRole("heading") // check the sp
    expect(heading).toBeInTheDocument() // check heading
    })
    

    test('Should load button inside my component',() => {
        render(<Contact/> ) // render the component that want
         const button = screen.getByText("Submit") // check the sp
        expect(button).toBeInTheDocument() // check heading
        })
        

        test('Should load input name inside my component',() => {
            render(<Contact/> ) // render the component that want
             const inputName = screen.getByPlaceholderText("name") // 
            expect(inputName).toBeInTheDocument() // 
            })


            test('Should load 2 input boxes inside my component',() => {
                render(<Contact/> ) // render the component that want
                 const inputBoxes = screen.getAllByRole("textbox"); // 
                expect(inputBoxes.length).toBe(2) // 
                })
    


})
