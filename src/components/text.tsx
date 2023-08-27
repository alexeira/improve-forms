import { useState } from 'react'

export const TextInputs: React.FC = () => {
  const [text, setText] = useState('')
  const [textArea, setTextArea] = useState('')

  function handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function handleChangeTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextArea(event.target.value)
  }

  return (
    <>
      <form className="grid grid-flow-row gap-1.5">
        <h2 className="text-xl font-bold">Text and Textarea</h2>
        <p className="">for text and textarea is almost the same</p>
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
    </>
  )
}
