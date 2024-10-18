import { useEffect, useState } from "react"
import MainLayout from "../layouts/MainLayout"
import axios from "axios"
import Card from "./Card"
import Loader from "./Loader"

const Home = () => {
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)
    
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            setLoad(true)
            const {data} = await axios.get("https://fakestoreapi.com/products")
            setProducts(data)
        } catch (error) {~
            console.log(error)
        } finally {
            setLoad(false)
        }
    }

    return <>
    <MainLayout>
        { load ? <Loader /> : ( <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            { products && products.map((product, index) => <Card key={index} product={product}/> )  }
        </div> ) }
    </MainLayout>
    </>
}

export default Home