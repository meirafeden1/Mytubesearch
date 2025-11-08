import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { searchVideos } from '../api/youtubeAPI'


export default function Header(){
const [q, setQ] = useState('')
const navigate = useNavigate()


async function onSearch(e){
e.preventDefault()
if(!q) return
// we'll navigate to home with query param
navigate(`/?q=${encodeURIComponent(q)}`)
}


return (
<header className="border-b p-3 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-2xl font-bold">MyTube</div>
</div>


<form onSubmit={onSearch} className="flex items-center gap-2 w-1/3">
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search" className="flex-1 border rounded px-3 py-2" />
<button className="px-3 py-2 bg-blue-600 text-white rounded">Search</button>
</form>


<div className="flex items-center gap-3">
<div className="text-sm">Demo user</div>
</div>
</header>
)
}