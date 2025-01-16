import React, { useState } from "react";
import StoryCard from "../components/StoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePage = () => {
  // Data cerita trending dan cerita lainnya
  const trendingStories = [
    {
      id: 1,
      title: "Rahasia Malam di Kota Bekasi",
      author: "Tukimin Setiawan",
      excerpt: "Di bawah gemerlap lampu jalanan Bekasi, sebuah kisah persahabatan dan petualangan dimulai...",
    },
    {
      id: 2,
      title: "Rindu di Balik Senja",
      author: "Ratri Anggraini",
      excerpt: "Hati yang terluka menemukan kenyamanan di setiap senja yang terlukis di cakrawala...",
    },
    {
      id: 3,
      title: "Misteri Lorong Gelap",
      author: "Dimas Suprapto",
      excerpt: "Dalam lorong gelap, ia menemukan lebih dari sekadar bayangan; sebuah kebenaran yang mengguncang hidupnya...",
    },
  ];

  const stories = [
    {
      id: 4,
      title: "Jejak Langkah di Gurun Pasir",
      author: "Siti Zahra",
      excerpt: "Sebuah perjalanan panjang melintasi gurun pasir untuk menemukan harapan yang hilang...",
    },
    {
      id: 5,
      title: "Di Balik Lensa Kamera",
      author: "Andi Saputra",
      excerpt: "Fotografi membawa Andi ke dunia penuh warna, cinta, dan misteri...",
    },
    {
      id: 6,
      title: "Hujan di Tengah Keramaian",
      author: "Rina Kartika",
      excerpt: "Di tengah keramaian, hujan membawa memori lama yang tak terlupakan...",
    },
  ];

  // Settings untuk slider (carousel)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Jumbotron */}
      <div className="mb-8 bg-blue-500 text-white p-8 rounded-lg shadow-md">
        <h1 className="text-5xl font-bold">Selamat Datang di Dunia Cerita</h1>
        <p className="text-lg mt-4">
          Temukan berbagai kisah menarik dari para penulis hebat. Mulai dari cerita misteri, romansa, hingga petualangan!
        </p>
      </div>

      {/* Cerita Trending */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Cerita Trending</h2>
        <Slider {...sliderSettings}>
          {trendingStories.map((story) => (
            <div key={story.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold">{story.title}</h3>
                <p className="text-gray-700 mt-2">{story.excerpt}</p>
                <p className="text-gray-500 text-sm mt-2">Written by {story.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Daftar Semua Cerita */}
      <h2 className="text-3xl font-bold mb-6">Cerita Terkini</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            title={story.title}
            author={story.author}
            excerpt={story.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
