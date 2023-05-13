import React from 'react'
import { notFound } from 'next/navigation'

const page = () => {
  //  return new Error() - for seeing the error file
  // notFound() - for seeing the notFound file
  return (
    <div>Home Page</div>
  )
}

export default page