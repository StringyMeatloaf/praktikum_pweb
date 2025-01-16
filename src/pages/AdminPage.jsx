import React, { useState } from "react";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost/php-backend/api.php?action=createStory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    }).then(() => {
      alert("Cerita berhasil ditambahkan!");
      setTitle("");
      setContent("");
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin - Tambah Cerita</h1>
      <form className="bg-white p-4 shadow-md rounded-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Judul</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Cerita</label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded-md"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Tambahkan Cerita
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
