import { useState } from 'react'

import { Layout } from './layout'

export function App() {
  const [text, setText] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  return (
    <Layout>
      <div className="grid gap-4 text-gray-300">
        <h2 className="text-xl font-bold">Text and Textarea</h2>
        <p className="">for text and textarea is almost the same</p>
        <form className="grid grid-flow-row gap-1.5">
          <label htmlFor="text-input">text</label>
          <div className="flex gap-4">
            <input className="w-1/2" type="text" onChange={handleChange} />
            <p>➡️ {text}</p>
          </div>
        </form>
        <form className="grid ">
          <label htmlFor="text-area">textarea</label>
          <textarea />
        </form>
      </div>
    </Layout>
  )
}
