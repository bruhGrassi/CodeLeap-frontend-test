import { Dialog } from "@headlessui/react";
import { FormButton, FormHeader, Modal, LoadingText } from "./ui";
import { usePosts } from "../hooks/usePosts";

interface DeletePostModalProps {
  id: number;
  open: boolean;
  onClose: () => void;
}

function DeletePostModal({ id, open, onClose }: DeletePostModalProps) {
  const { deletePost, isDeleting } = usePosts();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    deletePost(id, {
      onSuccess: () => {
        onClose();
      },
    });
  };

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

      <form
        role="form"
        className="mt-2 flex justify-end gap-4 px-2 pb-2"
        onSubmit={handleSubmit}
        aria-busy={isDeleting}
        aria-label="Deleting post"
      >
        <FormButton variant="cancel" type="button" onClick={onClose}>
          Cancel
        </FormButton>
        <FormButton
          variant="delete"
          type="submit"
          disabled={isDeleting}
          onClick={handleSubmit}
        >
          {isDeleting ? <LoadingText text="Deleting" /> : "Delete"}
        </FormButton>
      </form>
    </Modal>
  );
}

export default DeletePostModal;
