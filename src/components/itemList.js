import { useDispatch } from "react-redux";
import { Img_src } from "../utils/constants";
import {addItem} from "../utils/cartSlice"
const ItemList = ({ items }) => {

    const Dispatch = useDispatch();
    const handelAddItem = (item)=> {
        //Dispatch Action
        Dispatch (addItem(item))
    }
  return (
    <div>
      {items.map((item) => (
        <div data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border border-grey-200 border-b-2 text-left"
        >
          <div className="px-2">
            <span>{item.card.info.name}</span>
            <div className="w-40 h-auto">
                <button onClick={() => handelAddItem(item)} className="absolute m-2 p-1  border-black-100 bg-black text-white">ADD</button>
              <img src={Img_src + item.card.info.imageId} />{" "}
            </div>
            <div>
              <span>{item.card.info.price}</span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
