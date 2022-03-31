import { Link } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from 'react'

export const HomePage = () => {
  const [data, setProducts] = useState([]);
  // console.log(allMovie);

  useEffect( () => {
    axios({
      method: 'get',
      url:'http://localhost:3080/data',
    })
      .then(({data}) => {
        setProducts(data);
      })
      
  },[])
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {data.map((el) => {
          return <Link to={`/home/${el.id}`}>
            <h3>{el.name}</h3>
            <h3>{el.price}</h3>
          </Link>;
        })}
      </div>
    </>
  );
};

