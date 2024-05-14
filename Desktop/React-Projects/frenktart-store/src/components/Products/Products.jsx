import products from "../../productData"
import ProductItems from "./ProductItems"

const Products = () => {

    const productsList = products.map((product) => <ProductItems key={product.id} product={product}></ProductItems>)

  return (
    <main className="w-full py-12 px-24 ">
        <ul className="mb-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 list-none p-0">
            {productsList}
        </ul>
    </main>
  )
}

export default Products