import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";


const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const [load, setLoad] = useState(false)
  const { id } = useParams();
  
  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    try {
        setLoad(true)
        const {data} = await axios(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
    } catch (err) {
        console.log(err)
    } finally {
      setLoad(false)
    }
  }

  return (
    <>
      <MainLayout>
        {load ? <Loader /> : (
          <div className="grid md:grid-cols-3 gap-x-10">
          <div className="flex items-center">
            <img
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="col-span-2 py-6 space-y-4">
            <h2 className="text-lg md:text-4xl font-bold text-slate-500">
                {product.title}
            </h2>
            <div className="space-x-2">
               {product.rating && (
                <span className="bg-green-600 px-4 py-1 rounded text-white">
                {product.rating.rate}
               <i className="ri-star-fill text-white"></i></span>
              )}
              {product.rating && ( <span>( {product.rating.count} )</span> )}
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-600">Description</h3>
              <p>{product.description}</p>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600">
                Category: <span className="capitalize">{product.category}</span>
              </p>
              <h3 className="text-xl font-bold text-green-600">Price: ${product.price}</h3>
            </div>
            <div>
              <button className="bg-violet-600 w-full h-10 rounded text-white hover:border-2 hover:border-violet-600 hover:bg-white hover:text-violet-600">
                <i className="ri-shopping-cart-fill text-white"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
        )}
      </MainLayout>
    </>
  );
}

export default ProductDetails;
