import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router"


export const ProductsDetailsPage = () => {
  const [data,setProducts] = useState([])
  const {id} = useParams()

    useEffect(()=>{
    axios({
      method: "get",
      url:`http://localhost:3080/data/${id}`,

    }).then((res)=>setProducts(res.data))
    },[id])

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <div className="productDetails" style={{ padding: "20px" }}>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
          <h2 className="productName">{data.name}</h2>
          <h5 className="productPrice">{data.price}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
