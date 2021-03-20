import React, { useEffect, useState } from 'react'

const TaskTwo = () => {
  const [inputString, setInputString] = useState<string>('')
  const [vowelCount, setvowelCount] = useState(0)

  useEffect(() => {
    if (inputString === '') {
      setvowelCount(0)
    } else {
      return
    }
  }, [inputString])

  const countTheVowels = () => {
    const count = inputString.match(/[aeiou]/gi).length
    setvowelCount(count)
  }
  return (
    <div className="flex flex-col items-center">
      <textarea
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        className="p-4 my-4 border border-black w-60"
      ></textarea>
      <button
        className="px-4 py-2 mb-4 border border-black rounded w-44 focus:outline-none"
        onClick={countTheVowels}
      >
        Count the Vowels
      </button>

      <p className="w-32 px-6 py-4 text-center border border-black">
        {vowelCount}
      </p>
    </div>
  )
}

export default TaskTwo
