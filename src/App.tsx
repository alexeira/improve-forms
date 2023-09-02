import { Layout } from './layout'
import { RadioButton } from './components/radio'
import { TextInputs } from './components/text'
import { Checkbox } from './components/checkbox'
import { Tweet } from './components/tweet'

export function App() {
  return (
    <Layout>
      <div className="grid gap-4 text-gray-300">
        <TextInputs />
        <RadioButton />
        <Checkbox />
        <Tweet />
      </div>
    </Layout>
  )
}
