import { useParams } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../../components/Product/ProductCard"
import Spinner from "../../components/Loading/Spinner"

function ProductDetail() {
    const {productId} = useParams()
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
      setIsLoading(true)
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(res => {
          setProduct(res.data)
          setIsLoading(false)
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err)
        })
    },[])
    console.log(product)
  return (
    <Layout>
    {isLoading ? (<Spinner/>) :(
        <ProductCard product={product} flag/>
    )}
    </Layout>
  )
}

export default ProductDetail