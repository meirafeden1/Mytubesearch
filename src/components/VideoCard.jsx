import React from 'react'
import { Link } from 'react-router-dom'


export default function VideoCard({video}){
const id = video.id.videoId || (video.id && video.id)
const snip = video.snippet
return (
<Link to={`/video/${id}`} className="block">
<div className="border rounded overflow-hidden">
<img src={snip.thumbnails.medium.url} alt={snip.title} className="w-full h-44 object-cover" />
<div className="p-2">
<div className="font-semibold text-sm">{snip.title}</div>
<div className="text-xs text-gray-600">{snip.channelTitle}</div>
</div>
</div>
</Link>
)
}