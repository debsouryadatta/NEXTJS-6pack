import { getAllPosts } from '@/utils/features'
import React from 'react'

const page = async () => {
    const posts = await getAllPosts()
    
  return (
    <div>
        {posts?.map((e)=>{
            return <h3 className='flex col' key={e.id}>{e.title}</h3>
        })}
    </div>
  )
}

export default page