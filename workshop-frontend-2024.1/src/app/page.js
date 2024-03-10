'use client'

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Estilo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [shows, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = () => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch shows');
        }
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((error) => setError(error.message));
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const renderShows = () => {
    return shows
      .filter((show) => show.name.toLowerCase().includes(search.toLowerCase()))
      .map((show) => (
        <div key={show.id}>
          <img src={show.image?.medium} alt={`Poster for ${show.name}`} />
          <h2>Serie: {show.name}</h2>
          <p className="show-summary text-gray text-center w-full p-24y" style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: show.summary }} />
          <p>Avaliação: {show.rating?.average}</p>
          <p>Estreia: {show.premiered}</p>
        </div>
      ));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <main className="container"> 
      <input 
        type="text" 
        placeholder="Títulos, Gente e Gêneros " 
        onChange={handleSearchChange} 
      />
      {error && <p className="error">Error: {error}</p>}
      
      <Slider {...settings}>
        {renderShows()}
      </Slider>
    </main>  
  );
}
