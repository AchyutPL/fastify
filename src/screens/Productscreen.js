import React, { useEffect } from "react";
import "../cssfiles/productscreen/productscreen.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import { productscreendata } from "../components/redux/actions/actions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Productscreen(props) {
  const productId = props.match.params.id;
  const screenData = useSelector((state) => state.screenData);
  const { product, loading, error } = screenData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productscreendata(productId));
  }, [dispatch, productId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className='productScreen'>
            <p>
              Home {">"} {product.category} {">"} {product.productname}
            </p>
            <div className='mainProductSection'>
              <div className='productImage'>
                <img
                  className='mainImg'
                  src={product.path}
                  alt={product.productname}
                />
              </div>
              <div className='productBuyingDetails'>
                <div className='productName'>
                  <h1>{product.productname}</h1>
                </div>
                <div className='price'>
                  <p>Rs.{product.price}</p>
                  <span>Price : 60000</span>
                </div>
                <div className='qty'>
                  <select name='' id=''>
                    <option value='1'>1</option>
                  </select>
                </div>
                <div className='buttons'>
                  <button className='addToCart'>
                    <AddShoppingCartIcon style={{ margin: "-1px 5px" }} /> Add
                    To Cart
                  </button>
                  <button className='buyNow'>
                    <ShoppingBasketIcon style={{ margin: "-1px 5px" }} />
                    Buy Now
                  </button>
                </div>
              </div>
              <div className='otherInfo'>
                <h3>Brand and Product Details:</h3>
                <p>In Stock</p>
                <p>Manufacturer(Company's Name)</p>
                <p>SKU : 2156261654654</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}