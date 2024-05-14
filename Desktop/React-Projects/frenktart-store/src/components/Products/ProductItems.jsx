import { useContext } from "react";
import Card from "../UI/Card";
import { CartContext } from "../../contexts/CartProvider";

const ProductItems = ({ product }) => {
  const { name, img, description, price } = product;
  const { addItem } = useContext(CartContext);

  return (
    <Card>
      <img className="object-cover mr-1 " src={img} alt={name} />
      <div className="p-4">
        <h3 className="mt-3 text-lg font-semibold text-gray-600">{name}</h3>
        <p className="my-3 text-sm text-gray-500 ">{description}</p>
        <div className="flex justify-between items-center mb-1 font-bold">
          <h1 className="text-yellow-300">Rating</h1>
          <span className=" text-gray-500">Price: ${price}</span>
        </div>
        <button
          className="bg-pink-300 text-white hover:bg-pink-200 hover:text-white transition-all font-semibold rounded px-4 py-2 w-full p-1 mt-3"
          onClick={() => addItem(product)}
        >
          Sepete Ekle
        </button>
      </div>
    </Card>
  );
};

export default ProductItems;
