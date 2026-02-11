import type { ReactNode } from 'react'
import { useState } from 'react'
import { IconButton } from './ui'
import editIcon from '../assets/bx_bx-edit.svg'
import deleteIcon from '../assets/ic_baseline-delete-forever.svg'
import DeletePostModal from './DeletePostModal'
import EditPostModal from './EditPostModal'

export interface PostCardProps {
  id: number,
  title: string
  username: string
  timestamp: string
  content: string
  isOwner?: boolean
  onEdit?: () => void
  onDelete?: () => void
  headerActions?: ReactNode
}

function PostCard({
  id,
  title,
  username,
  timestamp,
  content,
  isOwner = false,
  onEdit,
  onDelete,
  headerActions,
}: PostCardProps)  {
  const showOwnerActions = isOwner
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <>
      <article className="min-h-[316px] w-full border border-neutral-300 rounded-2xl overflow-hidden flex flex-col bg-neutral-50">
        <header className="h-[70px] w-full bg-brand text-neutral-50 flex items-center justify-between px-4 md:px-8 py-4">
          <h2 className="font-bold text-lg md:text-1xl leading-snug truncate">
            {title}
          </h2>

          <div className="flex items-center gap-2">
            {showOwnerActions && (
              <div className="flex items-center gap-2 md:gap-4">
                <IconButton
                  icon={deleteIcon}
                  alt="Delete post"
                  onClick={() => setIsDeleteOpen(true)}
                />
                <IconButton
                  icon={editIcon}
                  alt="Edit post"
                  onClick={() => setIsEditOpen(true)}
                />
              </div>
            )}
            {headerActions}
          </div>
        </header>

        <div className="flex-1 px-4 py-4 flex flex-col gap-4">
          <div className="flex items-center justify-between text-neutral-400 text-lg leading-none">
            <span className="font-bold text-neutral-400 text-base md:text-lg">
              @{username}
            </span>
            <span className="font-normal text-base md:text-lg">{timestamp}</span>
          </div>

          <p className="text-base md:text-lg font-normal text-neutral-900 leading-snug break-words whitespace-pre-line">
            {content}
          </p>

        </div>
      </article>

      <DeletePostModal
        id={id}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => {
          onDelete?.()
        }}
      />

      <EditPostModal       
          id={id}
          title={title}
          content={content}
          open={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onSave={() => {
            onEdit?.()
          }}
      />
    </>
  )
}

export default PostCard

