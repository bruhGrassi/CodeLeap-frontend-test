import { useState } from 'react'

function Signup() {
  const [username, setUsername] = useState('')
  const isDisabled = username.trim() === ''

  return (
    <div className="w-full bg-main-bg min-h-screen p-4 flex items-center justify-center">
      
      <form className="bg-neutral-50 rounded-2xl p-6 w-[500px] shadow-lg">
          <h2 className="text-neutral-900 font-bold text-xl mb-4">
            Welcome to CodeLeap network!
          </h2>
          
          <p className="text-neutral-900 mb-1">
            Please enter your username
          </p>
          
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="John doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-main-border rounded-lg text-neutral-900 placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            />
            
            <div className="flex justify-end">
              <button
                disabled={isDisabled}
                className={`px-8 py-1 rounded-lg font-bold text-neutral-50 transition-colors ${
                  isDisabled
                    ? 'bg-neutral-300 cursor-not-allowed'
                    : 'bg-brand cursor-pointer hover:opacity-90 active:opacity-80'
                }`}
              >
                ENTER
              </button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Signup
