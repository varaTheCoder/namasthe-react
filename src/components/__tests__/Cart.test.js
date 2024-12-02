import RestaruntMenu from "../RestaruntMenu";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resMenuMock.json"
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import HeaderComponent from "../HeaderComponent";

    global.fetch = jest.fn( ()=> {
        return Promise.resolve({
            json : () => Promise.resolve(MOCK_DATA)
        })
    } )


it("Should load Restaurent Menu Component", async() => {
await act(async () => render(  <BrowserRouter><Provider store={appStore}>
    <HeaderComponent />
      <RestaruntMenu />
      <Cart /> </Provider></BrowserRouter>))

let accordinHeader = screen.getByText("Guilt Free (1)");
fireEvent.click(accordinHeader);

let menuItemsCount = screen.getAllByTextID('foodItems')

expect(menuItemsCount.length).toBe(1)

const addbtns = screen.getAllByRole('button', {name : Add})

fireEvent.click(addbtns[0])

expect(screen.getByText("Cart(1)")).toBeInTheDocument();

fireEvent.click(addbtns[0])

expect(screen.getByText("Cart(2)")).toBeInTheDocument();

});

