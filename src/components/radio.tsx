import { useState } from 'react'

export const RadioButton: React.FC = () => {
  const [hasAgreed, setHasAgreed] = useState('yes')

  function handleChangeRadio(event: React.ChangeEvent<HTMLInputElement>) {
    setHasAgreed(event.target.value)
  }

  return (
    <>
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
    </>
  )
}
