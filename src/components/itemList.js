import { Img_src } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border border-grey-200 border-b-2 text-left"
        >
          <div className="px-2">
            <span>{item.card.info.name}</span>
            <div className="w-40 h-auto">
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
