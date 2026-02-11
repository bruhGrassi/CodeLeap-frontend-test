import { useState } from 'react'
import { FormHeader, FormInput, FormTextarea, FormButton, LoadingText } from './ui'
import { usePosts } from '../hooks/usePosts'

interface PostFormProps {
  username: string;
}

function PostForm({ username }: PostFormProps) {
  const { createPost, isMutating } = usePosts()

  const [form, setForm] = useState({
    title: '',
    content: '',
  })

  const isDisabled = Object.values(form).some(value => value.trim() === '') || isMutating;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createPost(
      { ...form, username },
      {
        onSuccess: () => {
          setForm({ title: '', content: '' });
        }
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-50 rounded-2xl p-6 w-full border border-neutral-300"
    >
      <FormHeader title="What’s on your mind?" />

      <FormInput
        label="Title"
        placeholder="Hello world"
        value={form.title}
        onChange={(e) =>
          setForm(prev => ({
            ...prev,
            title: e.target.value,
          }))
        }
      />

      <div className="pt-4">
        <FormTextarea
          label="Content"
          placeholder="Content here"
          value={form.content}
          onChange={(e) =>
            setForm(prev => ({
              ...prev,
              content: e.target.value,
            }))
          }
        />
      </div>

      <div className="flex justify-end mt-4">
        <FormButton
          type="submit"
          disabled={isDisabled}
        >
          {isMutating ? (
            <LoadingText text="Creating" />
          ) : (
            'Create'
          )}
        </FormButton>
      </div>
    </form>
  )
}

export default PostForm;