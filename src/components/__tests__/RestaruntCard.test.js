

import { RestaurantCardComponent } from "../RestaurantCardComponent"
import MOCK_DATA from '../mocks/resCardMock.json'
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";



it("it should render the restarunt card component with props Data" , ()=> {
render(<RestaurantCardComponent restarunts={MOCK_DATA.restarunts}/>)
const name = screen.getByText('Pizza Hut');
expect(name).toBeInTheDocument();


})