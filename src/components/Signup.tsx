import { useState } from 'react'
import { FormHeader, FormInput, FormLabel, FormButton } from './ui'

function Signup() {
  const [username, setUsername] = useState('')
  const isDisabled = username.trim() === ''

  return (
    <div className="w-full bg-main-bg min-h-screen p-4 flex items-center justify-center">
      <form className="bg-neutral-50 rounded-2xl p-6 w-[500px] shadow-lg">
        <FormHeader title="Welcome to CodeLeap network!" />
        
        <FormLabel text="Please enter your username" />

        <FormInput
            placeholder="John doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
          <div className="flex justify-end mt-4">
            <FormButton disabled={isDisabled}>
              ENTER
            </FormButton>
          </div>
      </form>
    </div>
  )
}

export default Signup
