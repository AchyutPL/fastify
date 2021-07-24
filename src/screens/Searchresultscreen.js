import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

import Axios from "axios";
import "../cssfiles/searchscreen/searchscreen.css";
export default function Searchresultscreen(props) {
  const searchterm = props.match.params.term;

  const [searchData, setsearchData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await Axios.get(
        `https://fastifyera.herokuapp.com/api/search/${searchterm}`
      );
      setsearchData(data);
      setloading(false);
    };
    fetchdata();
  }, [searchterm]);
  console.log(searchData);
  return (
    <>
      <p
        style={{
          fontFamily: '"Titillium Web", sans-serif',
          marginLeft: "20px",
          fontSize: "20px",
        }}
      >
        {searchData.length} items found for "{searchterm}"
      </p>
      {loading ? (
        <Loading />
      ) : (
        <div className='searchScreenItems'>
          {searchData.map((searchdatas) => (
            <div className='sliderItems'>
              <div className='image'>
                <Link to={`/detail/${searchdatas._id}`}>
                  <img
                    src={searchdatas.path}
                    alt={searchdatas.searchDataname}
                  />
                </Link>
              </div>
              <div className='productName'>
                <Link to={`/detail/${searchdatas._id}`}>
                  <h3>{searchdatas.productname}</h3>
                </Link>
              </div>
              <div className='price'>Rs.{searchdatas.price}</div>
              <div className='discount'> Rs.{searchdatas.discount}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
