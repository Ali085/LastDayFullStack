import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet} from 'react-helmet-async';

function Details() {
 
  const [post, setPost] = useState([]);
  let { id } = useParams();
  const allData = () => {
    axios.get(`http://localhost:2020/users/${id}`).then((res) => {
      setPost(res.data);
    });
  };
  useEffect(() => {
    allData();
  }, []);
  return (
    <> <Helmet>
    <title>Details</title>
  </Helmet>;
      <div className="allProduct">
        <div className="product">
          <img src={post.imageUrl} alt="foto" />
          <p>{post.catagory}</p>
          <h3>{post.name}</h3>
          <h4>${post.price}</h4>
        </div>
      </div>
    </>
  );
}

export default Details;
