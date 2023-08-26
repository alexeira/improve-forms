import { useState } from 'react'

import { Layout } from './layout'

export function App() {
  const [text, setText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [hasAgreed, setHasAgreed] = useState('yes')

  function handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function handleChangeTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextArea(event.target.value)
  }

  function handleChangeRadio(event: React.ChangeEvent<HTMLInputElement>) {
    setHasAgreed(event.target.value)
  }

  function handleAdd() { };

  return (
    <Layout>
      <div className="grid gap-4 text-gray-300">
        <h2 className="text-xl font-bold">Text and Textarea</h2>
        <p className="">for text and textarea is almost the same</p>
        <form className="grid grid-flow-row gap-1.5">
          <label htmlFor="text-input">text</label>
          <div className="flex gap-4">
            <input className="w-1/2" type="text" value={text} onChange={handleChangeText} />
            <p>➡️ {text}</p>
          </div>
        </form>
        <form className="grid ">
          <label htmlFor="text-area">textarea</label>
          <div className="flex gap-4">
            <textarea className="w-1/2" value={textArea} onChange={handleChangeTextArea} />
            <p>➡️ {textArea}</p>
          </div>
        </form>

        <h2 className="mt-4 text-xl font-bold">Radio button</h2>
        <form>
          <legend className="mb-2">Do you agree?</legend>
          <div className="flex gap-2">
            <input
              checked={hasAgreed === 'yes'}
              className="cursor-pointer"
              id="agree-yes"
              name="agreed-to-terms"
              type="radio"
              value="yes"
              onChange={handleChangeRadio}
            />
            <label htmlFor="agree-yes">Yes</label>
          </div>
          <div className="flex gap-2">
            <input
              checked={hasAgreed === 'no'}
              className="cursor-pointer"
              id="agree-no"
              name="agreed-to-terms"
              type="radio"
              value="no"
              onChange={handleChangeRadio}
            />
            <label htmlFor="agree-no">No</label>
          </div>
        </form>
      </div>
    </Layout>
  )
}
