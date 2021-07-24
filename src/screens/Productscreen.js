import React, { useEffect } from "react";
import "../cssfiles/productscreen/productscreen.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import { buynow, productscreendata } from "../components/redux/actions/actions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useHistory } from "react-router";
import HomeIcon from "@material-ui/icons/Home";
import ReactImageMagnify from "react-image-magnify";
import { Link } from "react-router-dom";
export default function Productscreen(props) {
  const productId = props.match.params.id;
  const screenData = useSelector((state) => state.screenData);
  const { product, loading, error } = screenData;

  const user = useSelector((state) => state.user);
  const { fastifyuser } = user;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productscreendata(productId));
  }, [dispatch, productId]);
  const history = useHistory();
  const qty = 1;
  const addToCartHandler = () => {
    history.push(`/cart/${productId}?qty=${qty}`);
  };
  const buyNowHandler = () => {
    if (fastifyuser) {
      dispatch(buynow(productId));
      history.push("/shipping");
    } else {
      history.push("/signin");
    }
  };

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
              <HomeIcon
                style={{ position: "relative", top: "5px", color: "red" }}
              />
              <Link to='/'> Home</Link> {">"} {product.category} {">"}{" "}
              {product.productname}
            </p>

            <div className='mainProductSection'>
              <div className='productImage'>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: product.path,
                    },
                    largeImage: {
                      src: product.path,
                      width: 1200,
                      height: 1800,
                    },
                    enlargedImageContainerDimensions: {
                      width: "200%",
                      height: "100%",
                    },
                  }}
                />
              </div>
              <div className='productBuyingDetails'>
                <div className='productName'>
                  <h1>{product.productname}</h1>
                </div>
                <div className='price'>
                  <p>Rs.{product.price}</p>
                  <span>Rs.:{product.discount}</span>
                </div>
                <div className='qty'>
                  <select name='' id=''>
                    <option value='1'>1</option>
                  </select>
                </div>
                <div className='buttons'>
                  <button className='addToCart' onClick={addToCartHandler}>
                    <AddShoppingCartIcon style={{ margin: "-1px 5px" }} /> Add
                    To Cart
                  </button>
                  <button className='buyNow' onClick={buyNowHandler}>
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
