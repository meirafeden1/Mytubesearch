import React, {useEffect, useState} from 'react'
import axios from 'axios'


export default function CommentSection({videoId}){
const [comments, setComments] = useState([])
const [text, setText] = useState('')


useEffect(()=>{
axios.get(`/api/comments/${videoId}`).then(r=> setComments(r.data)).catch(()=>{})
},[videoId])


async function post(){
if(!text) return
const res = await axios.post('/api/comments', { videoId, text })
setComments([res.data, ...comments])
setText('')
}


return (
<section className="mt-6">
<h2 className="font-semibold mb-2">Comments</h2>
<div className="mb-3 flex gap-2">
<input value={text} onChange={e=>setText(e.target.value)} className="flex-1 border rounded px-3" />
<button onClick={post} className="px-3 py-1 bg-blue-600 text-white rounded">Post</button>
</div>
<div className="space-y-2">
{comments.map(c=> (
<div key={c._id} className="p-3 border rounded">{c.text}</div>
))}
</div>
</section>
)
}