import { getUserDetail } from '@/utils/features';
import React, { Suspense } from 'react'
import Posts from './Posts';

export const generateStaticParams = async () => { // This function helps in making these dynamic routes render with SSG and not SSR
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ]
}

export const generateMetadata = async ({ params }) => {
  const user = await getUserDetail(params.id)
  return {
    title: `${user.name}'s Profile`,
  }
}


const page = async ({ params }) => {
  console.log(params.id);
  const user = await getUserDetail(params.id)
  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
      </div>
      <Suspense fallback={<div>Loading neel...</div>}>
        <Posts id={params.id} />
      </Suspense>
    </>
  )
}

export default page