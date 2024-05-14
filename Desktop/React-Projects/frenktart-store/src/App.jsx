import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import CartProvider from "./contexts/CartProvider";

import { StateProvider } from "./contexts/StateContext";

function App() {
  return (
    <CartProvider>
      <StateProvider>
        <div>
          <Cart />
          <Header />
          <Hero />
          <Products />
        </div>
      </StateProvider>
    </CartProvider>
  );
}

export default App;
