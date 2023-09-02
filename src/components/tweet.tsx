import { FormEvent, useState } from 'react'

export const Tweet: React.FC = () => {
  const [tweet, setTweet] = useState('')
  const [tweets, setTweets] = useState<string[]>([])

  function reducer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newTweets = [tweet, ...tweets]

    setTweets(newTweets)
    setTweet('')
  }

  function handleClear() {
    setTweets([])
  }

  return (
    <>
      <form className="border p-4" onSubmit={reducer}>
        <input
          className="bg-transparent outline-none"
          placeholder="¿Qué esta pasando?"
          type="text"
          value={tweet}
          onChange={event => setTweet(event.target.value)}
        />
        <button
          className=" rounded-full bg-blue-500 px-10 py-2 font-semibold transition-colors disabled:opacity-80"
          disabled={tweet === ''}
        >
          Postear
        </button>
      </form>
      <button onClick={handleClear}>clear tweets</button>

      <section>
        {tweets.map((el, key) => (
          <p key={key}>{el}</p>
        ))}
      </section>
    </>
  )
}
