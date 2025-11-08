import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getVideoDetails } from '../api/youtubeAPI'
import CommentSection from '../components/CommentSection'


export default function VideoPage(){
const { id } = useParams()
const [video, setVideo] = useState(null)


useEffect(()=>{
getVideoDetails(id).then(items=>{
setVideo(items[0])
})
},[id])


if(!video) return <div className="p-4">Loading...</div>


return (
<main className="p-4">
<div className="aspect-video mb-3">
<iframe className="w-full h-full" src={`https://www.youtube.com/embed/${id}`} title={video.snippet.title} />
</div>
<h1 className="font-semibold">{video.snippet.title}</h1>
<div className="text-sm text-gray-600">{video.snippet.channelTitle}</div>
<div className="mt-4">{video.snippet.description}</div>


<CommentSection videoId={id} />
</main>
)
}