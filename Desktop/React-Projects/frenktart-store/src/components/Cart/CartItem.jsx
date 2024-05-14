import { memo } from "react";

const CartItem = memo(({ product, removeItem }) => (
    <li key={product.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3><a href={product.href}>{product.name}</a></h3>
            <div className="flex justify-between gap-1 text-gray-700">
              <p>{product.price} x</p>
              <p>{product.amount}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => removeItem(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  ));

  export default CartItem;
  