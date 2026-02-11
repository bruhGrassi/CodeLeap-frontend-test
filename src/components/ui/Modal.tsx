import type { ReactNode } from 'react'
import { Dialog } from '@headlessui/react'

export interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

function Modal({ open, onClose, children, className = '' }: ModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-overlay"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center px-4">
        <Dialog.Panel
          className={`w-[660px] rounded-2xl border border-neutral-400 bg-neutral-50 shadow-lg flex flex-col ${className}`}
        >
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default Modal

