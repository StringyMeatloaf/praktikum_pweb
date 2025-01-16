import React, { useEffect, useState } from "react";
import StoryCard from "../components/StoryCard";


const HomePage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost/php-backend/api.php?action=getStories")
      .then((response) => response.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cerita Terbaru</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            id={story.id}
            title={story.title}
            summary={story.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
