// import axios from 'axios'


// // Use YouTube Data API v3 search endpoint. Put API key in .env as VITE_YT_KEY
// const BASE = 'https://www.googleapis.com/youtube/v3'
// const KEY = import.meta.env.VITE_YT_KEY


// export async function searchVideos(q, maxResults = 8){
// if(!KEY) throw new Error('VITE_YT_KEY not set')
// const res = await axios.get(`${BASE}/search`, {
// params: {
// key: KEY,
// part: 'snippet',
// q,
// maxResults,
// type: 'video'
// }
// })
// return res.data.items
// }

import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const searchVideos = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        maxResults: 12,
        q: query,
        key: API_KEY,
        type: "video",
      },
    });
    return res.data.items;
  } catch (error) {
    console.error("YouTube search error:", error);
    return [];
  }
};

export const getVideoDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet,statistics",
        id,
        key: API_KEY,
      },
    });
    return res.data.items[0];
  } catch (error) {
    console.error("Video details error:", error);
    return null;
  }
};

// export async function getVideoDetails(ids){
// const res = await axios.get(`${BASE}/videos`, {
// params: { key: KEY, part: 'snippet,statistics', id: ids }
// })
// return res.data.items
// }