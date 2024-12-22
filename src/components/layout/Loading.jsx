import React from 'react'

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
      <div className="mt-4 text-xl">Loading...</div>
    </div>
  )
}


