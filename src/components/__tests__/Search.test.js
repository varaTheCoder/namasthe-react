import BodyComponent from "../BodyComponent"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { execPath, hasUncaughtExceptionCaptureCallback } from "process";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn( ()=> {
    return Promise.resolve({
        json :  ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it('Should search Restarunt list for Pizza',async()=> {
    await act(async() =>   render(<BrowserRouter><BodyComponent/></BrowserRouter>));

    const cardBeforSearch = screen.getAllByTestId("resCard")
    expect(cardBeforSearch.length).toBe(8)

    const searhBtn = screen.getByRole("button", {name : "Search"});
    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target : {value : "Pizza"}});
    fireEvent.click(searhBtn)

    const cards = screen.getAllByTestId("resCard")
    expect(cards.length).toBe(1)
    //expect(searhBtn).toBeInTheDocument();
  
})
