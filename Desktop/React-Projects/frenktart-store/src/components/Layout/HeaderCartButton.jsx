import { GiShoppingCart } from "react-icons/gi";
import { useStateContext } from "../../contexts/StateContext";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

const HeaderCartButton = () => {
  const { open, setOpen } = useStateContext();

  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.amount || 0);
  }, 0);

  const toggleCart = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        className="flex justify-around items-center gap-2 cursor-pointer text-pink-400 hover:text-pink-500"
        onClick={toggleCart}
      >
        <div className="relative">
          <GiShoppingCart className="text-3xl" />

          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white text-xs font-semibold rounded-full bg-pink-400 hover:bg-pink-500 px-1 py-0.5">
            {totalItemsInCart}
          </span>
        </div>
      </button>
    </div>
  );
};

export default HeaderCartButton;
