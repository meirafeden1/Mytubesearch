import React, { useState } from "react";
import { searchVideos } from "../api/youtubeAPI";

function Home() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearch = async () => {
    const data = await searchVideos(query);
    setVideos(data);
  };

  return (
    <div className="home-container">
      <h1>YouTube Clone 🎥</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="video-grid">
        {videos.length === 0 ? (
          <p>No videos found. Try searching!</p>
        ) : (
          videos.map((video) => (
            <div key={video.id.videoId} className="video-card">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <h3>{video.snippet.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
