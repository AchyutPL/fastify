import React, { useEffect } from "react";

import MainnSlider from "../components/MainSlider";
import MainRows from "../components/MainRows";
import SwitchSlider from "../components/Switchslider/SwitchSlider";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useDispatch, useSelector } from "react-redux";
import { rowdatas } from "../components/redux/actions/actions";

export default function Homescreen() {
  const dispatch = useDispatch();
  const ourData = useSelector((state) => state.rowData);
  const { ourdata, loading, error } = ourData;
  useEffect(() => {
    dispatch(rowdatas());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <MainnSlider />
          <MainRows ourdata={ourdata} />
          <SwitchSlider ourdata={ourdata} />
        </>
      )}
    </>
  );
}
