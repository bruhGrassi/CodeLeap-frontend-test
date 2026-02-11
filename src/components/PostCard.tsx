import type { FC, ReactNode } from 'react'
import { IconButton } from './ui'
import editIcon from '../assets/bx_bx-edit.svg'
import deleteIcon from '../assets/ic_baseline-delete-forever.svg'

export interface PostCardProps {
  title: string
  username: string
  timestamp: string
  content: string
  isOwner?: boolean
  onEdit?: () => void
  onDelete?: () => void
  headerActions?: ReactNode
}

const PostCard: FC<PostCardProps> = ({
  title,
  username,
  timestamp,
  content,
  isOwner = false,
  onEdit,
  onDelete,
  headerActions,
}) => {
  const showOwnerActions = isOwner

  return (
    <article className="h-[316px] w-full border border-neutral-300 rounded-2xl overflow-hidden flex flex-col bg-neutral-50">
      <header className="h-[70px] w-full bg-brand text-neutral-50 flex items-center justify-between px-8 py-4">
        <h2 className="font-bold text-[22px] leading-snug truncate">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          {showOwnerActions && (
            <div className="flex items-center gap-4">
              <IconButton
                icon={deleteIcon}
                alt="Delete post"
                onClick={onDelete}
              />
              <IconButton
                icon={editIcon}
                alt="Edit post"
                onClick={onEdit}
              />
            </div>
          )}
          {headerActions}
        </div>
      </header>

      <div className="flex-1 px-4 py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between text-neutral-400 text-[18px] leading-none">
          <span className="font-bold text-neutral-400 h-[18px]">
            @{username}
          </span>
          <span className="font-normal">{timestamp}</span>
        </div>

        <p className="text-[18px] font-normal text-neutral-900 leading-snug break-words whitespace-pre-line">
          {content}
        </p>

      </div>
    </article>
  )
}

export default PostCard

