import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [stori, setStoris] = useState([]);
        const [loading, setLoading] = useState(true);

        const fetchStoris = async () => {
                setLoading(true);
                try {
                        const response = await fetch('http://127.0.0.1:8000/api/stori');
                        const result = await response.json();
                        if (result.success) {
                                setStoris(result.data);
                        }
                } catch (error) {
                        console.error('Error fetching data:', error);
                } finally {
                        setLoading(false);
                }
        };

        useEffect(() => {
                fetchStoris();
      }, []);

  // Data cerita trending dan cerita lainnya
  const trendingStories = [
    { id: 1, title: "Rahasia Malam di Kota ", author: "Tukimin Setiawan", excerpt: "Di bawah gemerlap lampu jalanan, sebuah kisah persahabatan dan petualangan dimulai...", bgimage: "url('public/blur1.png')", image: "public/gh1.jpg" },
    { id: 2, title: "Rindu di Balik Senja", author: "Ratri Anggraini", excerpt: "Hati yang terluka menemukan kenyamanan di setiap senja yang terlukis di cakrawala...", bgimage: "url('public/blur2.png')", image: "public/gh2.jpg" },
    { id: 3, title: "Misteri Lorong Gelap", author: "Dimas Suprapto", excerpt: "Dalam lorong gelap, ia menemukan lebih dari sekadar bayangan; sebuah kebenaran yang mengguncang hidupnya...", bgimage: "url('public/blur3.jpg')", image: "public/gh3.jpg"},
  ];

  const stories = [
    { id: 4, title: "Jejak Langkah di Gurun Pasir", author: "Siti Zahra", excerpt: "Sebuah perjalanan panjang melintasi gurun pasir untuk menemukan harapan yang hilang...",bgimage: "url('public/blur4.jpg')", image: "public/gh4.jpg" },
    { id: 5, title: "Di Balik Lensa Kamera", author: "Andi Saputra", excerpt: "Fotografi membawa Andi ke dunia penuh warna, cinta, dan misteri...",bgimage: "url('public/blur5.jpg')", image: "public/gh5.jpg" },
    { id: 6, title: "Hujan di Tengah Keramaian", author: "Rina Kartika", excerpt: "Di tengah keramaian, hujan membawa memori lama yang tak terlupakan...",bgimage: "url('public/blur6.jpg')", image: "public/gh6.jpg" },
  ];

  const combinedStories = [...trendingStories, ...stories];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // For drag-to-scroll functionality
  const scrollContainerRef = useRef(null);

  const handleDragStart = (e) => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.isDragging = true;
    scrollContainer.initialX = e.clientX;
    scrollContainer.scrollLeft = scrollContainer.scrollLeft;
  };

  const handleDragEnd = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.isDragging = false;
  };

  const handleDragMove = (e) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer.isDragging) return;
    const deltaX = e.clientX - scrollContainer.initialX;
    scrollContainer.scrollLeft = scrollContainer.scrollLeft - deltaX;
    scrollContainer.initialX = e.clientX;
  };

  return (
    <div className="bg-white-100 min-h-screen">

      {/* Cerita Trending */}
      <div className="mb-12">
        <Slider {...sliderSettings}>
          {trendingStories.map((story) => (
            <div key={story.id} className="relative">
              {/* Background */}
              <div
                className="bg-cover bg-center w-full h-[683px] relative"
                style={{ backgroundImage: story.bgimage }}
              >
                {/* Overlay Tulisan */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-3xl font-bold mb-[10px] pt-[20px]">{story.title}</h2>
                  <p className="text-lg">{story.author}</p>
                  <p className="text-lg mt-[480px] mb-[50px]">{story.excerpt}</p>
                </div>

                {/* Gambar Utama */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Daftar Semua Cerita */}
      <div className="max-w-7xl mx-auto py-8 pb-[80px]">
        <h2 className="text-2xl font-medium text-xl text-gray-800 mb-6">Cerita Terkini</h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide cursor-grab"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDragMove}
          >
            {combinedStories.map((story) => (
              <div
                key={story.id}
                className="bg-white shadow-md border-md border-b border-t rounded-lg p-4 w-64 h-[420px] flex-shrink-0 relative"
              >
                <img
                  src={story.image || "https://via.placeholder.com/150"} // Placeholder default
                  alt={story.title}
                  className="rounded-md mb-4 h-[283px] w-full object-cover"
                />
                <h4 className="font-semibold text-gray-800">{story.title}</h4>
                <p className="text-gray-500">{story.author}</p>

                {/* Baca Selengkapnya link */}
                <div className="absolute bottom-4 right-4">
                  <Link
                    to={`/story/${story.id}`}  // Update this URL as per your routing
                    className="text-blue-500 text-sm font-semibold hover:underline"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
