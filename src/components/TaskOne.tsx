import React, { useState } from 'react'

const TaskOne = () => {
  const [image, setImage] = useState(
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Dog%20image69059f5.jpg'
  )
  return (
    <div className="w-full my-12 border border-black h-2/3">
      <p className="my-4 text-3xl text-center">Welcome to the Pet World!</p>
      <div className="flex items-center justify-items-center">
        <div className="flex flex-col mx-auto ">
          <button
            className="p-4 m-4 text-xl border border-black rounded-full focus:outline-none"
            onClick={() =>
              setImage(
                'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Dog%20image69059f5.jpg'
              )
            }
          >
            Dog
          </button>
          <button
            className="p-4 m-4 text-xl border border-black rounded-full focus:outline-none"
            onClick={() =>
              setImage(
                'https://s3-ap-southeast-1.amazonaws.com/he-public-data/At%20image7532683.jpg'
              )
            }
          >
            Cat
          </button>
          <button
            className="p-4 m-4 text-xl border border-black rounded-full focus:outline-none"
            onClick={() =>
              setImage(
                'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Parrot%20image7f2c45e.jpg'
              )
            }
          >
            Parrot
          </button>
        </div>
        <div className="w-1/2 mx-auto h-60 md:h-2/3 ">
          <img src={image} alt="pet" className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

export default TaskOne
