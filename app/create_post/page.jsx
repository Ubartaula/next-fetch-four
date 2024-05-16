import FormCreatePost from '@/components/FormCreatePost'
import React, { Suspense } from 'react'

const CreatePost = () => {
  
  return (
    <div>
      <p>Create Post</p>
      <Suspense fallback={null}>
        <FormCreatePost />
      </Suspense>
    </div>
  )
}

export default CreatePost