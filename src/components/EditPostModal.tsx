import { Dialog } from '@headlessui/react'
import { FormButton, FormHeader, FormInput, FormTextarea, Modal } from './ui'
import { useState } from 'react'

interface EditPostModalProps {
  id: number,
  open: boolean
  title: string
  content: string
  onClose: () => void
  onSave: (values: { title: string; content: string }) => void
}

function EditPostModal({
  open,
  title,
  content,
  onClose,
  onSave,
}: EditPostModalProps){
  const [form, setForm] = useState({ title, content })

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="max-h-[80vh] w-[660px] px-6 py-6 justify-between"
    >
      <Dialog.Title as="div">
        <FormHeader
          title="Edit item"
          className="mb-4 text-[22px] leading-snug text-black"
        />
      </Dialog.Title>

      <form
        className="flex flex-1 flex-col gap-4"
        onSubmit={event => {
          event.preventDefault()
          onSave(form)
        }}
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
          >
            Save
          </FormButton>
        </div>
      </form>
    </Modal>
  )
}

export default EditPostModal

