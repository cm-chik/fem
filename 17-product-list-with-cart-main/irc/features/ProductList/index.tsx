import useProductList from "./hooks/useProductList";
import ProductCard from "./components/ProductCard";
import { Product } from "../../interfaces/index";

export default function ProductList() {
  const { data, isLoading, isError } = useProductList();
  console.log(data);
  return (
    <div>
      <p>Desserts</p>
      if({data})
      {
        <div>
          {data.map((product: Product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      }{" "}
      else if ({isError}) {<div>Error</div>} else if ({isLoading}){" "}
      {<div>Loading...</div>} else {<div>No data</div>}
    </div>
  );
}
