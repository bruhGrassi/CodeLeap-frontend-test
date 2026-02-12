import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FormButton, FormHeader, FormInput, FormTextarea, Modal, LoadingText } from './ui'
import { usePosts } from '../hooks/usePosts'

interface EditPostModalProps {
  id: number,
  open: boolean
  title: string
  content: string
  onClose: () => void
}

function EditPostModal({
  id,
  open,
  title,
  content,
  onClose,
}: EditPostModalProps) {
  const [form, setForm] = useState({ title, content })

  const { updatePost, isUpdating } = usePosts()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePost(
      { id, data: form },
      {
        onSuccess: () => {
          onClose();
        }
      }
    );
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="md:max-h-[80vh] max-h-[90vh] w-[660px] px-6 py-6 justify-between"
    >
      <Dialog.Title as="div">
        <FormHeader
          title="Edit item"
          className="mb-4 leading-snug text-black"
        />
      </Dialog.Title>

      <form
        role="form"
        className="flex flex-1 flex-col gap-4"
        onSubmit={handleSubmit}
        aria-busy={isUpdating}
        aria-label="Updating post"
      >
        <FormInput
          label="Title"
          placeholder="Hello world"
          value={form.title}
          onChange={event =>
            setForm(prev => ({
              ...prev,
              title: event.target.value,
            }))
          }
        />

        <FormTextarea
          label="Content"
          placeholder="Content here"
          value={form.content}
          onChange={event =>
            setForm(prev => ({
              ...prev,
              content: event.target.value,
            }))
          }
        />

        <div className="mt-2 flex justify-end gap-4">
          <FormButton
            variant="cancel"
            type="button"
            onClick={onClose}
          >
            Cancel
          </FormButton>
          <FormButton
            variant="save"
            type="submit"
            disabled={isUpdating}
          >

            {isUpdating ? (
              <LoadingText text="Saving" />
            ) : (
              'Save'
            )}

          </FormButton>
        </div>
      </form>
    </Modal>
  )
}

export default EditPostModal

