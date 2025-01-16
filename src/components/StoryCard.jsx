import React from "react";
import { Link } from "react-router-dom";

const StoryCard = ({ id, title, summary }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 my-2">{summary}</p>
      <Link
        to={`/story/${id}`}
        className="text-blue-500 hover:underline text-sm font-semibold"
      >
        Baca Selengkapnya
      </Link>
    </div>
  );
};

export default StoryCard;
