import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import { Link } from "react-router-dom";

function Trending() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const allData = () => {
    axios.get("http://localhost:2020/users").then((res) => {
      setPost(res.data);
    });
  };
  useEffect(() => {
    allData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:2020/users/${id}`).then(() => {
      allData();
    });
  };

  function sortPrice() {
    setPost([
      ...post.sort((a, b) =>
        a.price > b.price ? 1 : b.price > a.price ? -1 : 0
      ),
    ]);
  }
  return (
    <section className="trendingSec">
      <div className="trendingTXT">
        <p>Popular Item in the market</p>
        <h3>Trending Product</h3>
      </div>
      <div className="inpDiv">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={sortPrice}> Sort by Price</button>
      </div>
      <div className="allProduct">
        {post
          .filter((data) => data.name.toLowerCase().includes(search))
          .map((element) => (
            <div className="product">
              <img src={element.imageUrl} alt="foto" />
              <p>{element.catagory}</p>
              <Link to={`/details/${element._id}`}>
                <h3>{element.name}</h3>
              </Link>
              <h4>${element.price}</h4>
              <button onClick={() => handleDelete(element._id)}>X</button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Trending;
