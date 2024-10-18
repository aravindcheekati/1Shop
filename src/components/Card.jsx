import { Link } from "react-router-dom";

const Card = ({product}) => {
  const {id, category, image, price, rating, title} = product
  const {count, rate} = rating
  return <>
    <div className="bg-white px-2 py-4 rounded border shadow">
        <div className="w-full h-40 flex items-center justify-center overflow-hidden">
            <img 
                src={image} 
                alt={title}
                className="w-auto h-40 scale-75"
            />
        </div>
        <div className="mt-4 px-2 space-y-2 text-center">
            <h2 className="text-slate-600 w-full h-12 overflow-hidden font-semibold">
               <Link to={`/product/${id}`} className="hover:text-blue-500"> {title} </Link> 
            </h2>
            <div className="space-y-2">
                <p className="text-slate-500">Category: <span className="capitalize">{category}</span></p>
                <p className="text-slate-600">Rating: <span className="bg-green-600 text-white px-2 py-0.5 rounded">{rate} <i className="ri-star-fill text-white"></i></span> ({count}) <i className="ri-group-line"></i> </p>
                <p className="text-green-500 text-xl font-semibold">Price: ${price}</p>
            </div>
            <div>
                <button className="bg-violet-600 w-full h-10 rounded text-white hover:border-2 hover:border-violet-600 hover:bg-white hover:text-violet-600">
                    <i className="ri-shopping-cart-fill text-white"></i> Add to Cart
                </button>
            </div>
        </div>
    </div>
    </>
};

export default Card;
