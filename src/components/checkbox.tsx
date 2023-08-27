import { useState } from 'react'

export const Checkbox: React.FC = () => {
  const [check, setCheck] = useState(false)

  function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    setCheck(event.target.checked)
  }

  return (
    <>
      <h2 className="text-xl font-bold">Checkbox</h2>
      <form className="flex gap-2">
        <input checked={check} id="opt-in-checkbox" type="checkbox" onChange={handleCheck} />
        <label htmlFor="opt-in-checkbox">This is a checkbox</label>
        <p>➡️ {check.toString()}</p>
      </form>
    </>
  )
}
