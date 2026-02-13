import { useState } from "react";
import { FormHeader, FormInput, FormButton } from "./ui";

interface SignupProps {
  onLogin: (username: string) => void;
}

function Signup({ onLogin }: SignupProps) {
  const [username, setUsername] = useState("");
  const isDisabled = username.trim() === "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isDisabled) {
      onLogin(username);
    }
  };

  return (
    <div className="w-full bg-main-bg min-h-screen p-4 flex items-center justify-center">
      <form
        role="form"
        className="bg-neutral-50 rounded-2xl p-6 w-[500px] shadow-lg"
        onSubmit={handleSubmit}
      >
        <FormHeader title="Welcome to CodeLeap network!" />

        <FormInput
          label="Please enter your username"
          placeholder="John doe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="flex justify-end mt-4">
          <FormButton
            type="submit"
            disabled={isDisabled}
            aria-label="Enter CodeLeap network"
          >
            ENTER
          </FormButton>
        </div>
      </form>
    </div>
  );
}

export default Signup;
