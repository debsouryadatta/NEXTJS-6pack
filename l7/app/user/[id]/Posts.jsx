import { getUserPosts } from '@/utils/features'
import React from 'react'

const Posts = async ({id}) => {
    const posts = await getUserPosts(id)

  return (
    <div>
        {posts?.map((e)=>{
            return <h1 key={e.id}>{e.title}</h1>
        })}
    </div>
  )
}

export default Posts