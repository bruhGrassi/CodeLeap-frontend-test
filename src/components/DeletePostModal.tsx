import { Dialog } from '@headlessui/react'
import { FormButton, FormHeader, Modal } from './ui'

interface DeletePostModalProps {
  id: number,
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

function DeletePostModal({
  open,
  onClose,
  onConfirm,
}: DeletePostModalProps){
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="h-[162px] md:h-[146px] px-4 py-4 justify-between"
    >
      <Dialog.Title as="div">
        <FormHeader
          title="Are you sure you want to delete this item?"
          className="mb-0 px-2 py-2 leading-snug text-black"
        />
      </Dialog.Title>

      <div className="mt-2 flex justify-end gap-4 px-2 pb-2">
        <FormButton variant="cancel" type="button" onClick={onClose}>
          Cancel
        </FormButton>
        <FormButton
          variant="delete"
          type="button"
          onClick={onConfirm}
        >
          Delete
        </FormButton>
      </div>
    </Modal>
  )
}

export default DeletePostModal

