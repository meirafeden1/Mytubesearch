import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'
import Header from './components/Header'


export default function App(){
return (
<div className="min-h-screen bg-white text-gray-900">
<Header />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/video/:id" element={<VideoPage/>} />
</Routes>
</div>
)
}