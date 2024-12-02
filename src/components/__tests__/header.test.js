import { Provider } from "react-redux";
import HeaderComponent from "../HeaderComponent";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should load header component with Login button", () => {
  render (
    <BrowserRouter>
    <Provider store={appStore}>
      <HeaderComponent />
    </Provider>
    </BrowserRouter>
  );

  const LoginButton = screen.getByRole("button", {name :"Login"});
  expect(LoginButton).toBeInTheDocument();
});




it("Should load header component with cart items  zero", () => {
    render (
      <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart (0)"); //RegEx can also be used /Cart/
    expect(cartItems).toBeInTheDocument();
  });


  it("Should change Login button to Logout", () => {
    render (
      <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
      </BrowserRouter>
    );

    const LoginButton = screen.getByRole("button", {name :"Login"});
    fireEvent.click(LoginButton)

    const LogoutButton = screen.getByRole("button", {name :"Logout"});
    expect(LogoutButton).toBeInTheDocument();
  });

