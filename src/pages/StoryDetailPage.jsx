import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StoryDetailPage = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/php-backend/api.php?action=getStory&id=${id}`)
      .then((response) => response.json())
      .then((data) => setStory(data));
  }, [id]);

  if (!story) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
      <p className="text-gray-700">{story.content}</p>
    </div>
  );
};

export default StoryDetailPage;
