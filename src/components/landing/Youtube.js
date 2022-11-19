import axios from "axios";

import React, { useEffect, useState } from "react";


const baseURL = " http://localhost/API_7/youtube.php";

function Youtube() {
  const [post, setPost] = useState('');

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);

    });
  }, []);
  console.log(post.L1)



  return (



    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" >
          <iframe className="cont" width="90%" height="515" src={post.L1}
            title="DELPHIN BOTANIK PLATINUM HOTEL -  Promotion Video" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="carousel-item">
          <iframe className="cont" width="90%" height="515" src={post.L2}
            title="DELPHIN BOTANIK PLATINUM HOTEL -  Promotion Video" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="carousel-item">
          <iframe className="cont" width="90%" height="515" src={post.L3}
            title="DELPHIN BOTANIK PLATINUM HOTEL -  Promotion Video" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="carousel-item">
          <iframe className="cont" width="90%" height="515" src={post.L4}
            title="DELPHIN BOTANIK PLATINUM HOTEL -  Promotion Video" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>








  );
}

export default Youtube