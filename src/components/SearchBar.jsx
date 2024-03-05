import { InputSearch } from "./index"
import { ProductProvider } from "../context/ProductContext"

const SearchBar = () => {

  return (
    <ProductProvider>
      <InputSearch/>
    </ProductProvider>
  )
}

export default SearchBar
