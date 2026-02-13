import { useState, useRef, useEffect } from "react";
import { IconButton } from "./ui";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import DeletePostModal from "./DeletePostModal";
import EditPostModal from "./EditPostModal";
import { useRelativeTime } from "../hooks/useRelativeTime";

export interface PostCardProps {
  id: number;
  title: string;
  username: string;
  timestamp: string;
  content: string;
  isOwner?: boolean;
}

const CONTENT_MAX_HEIGHT = 300;

function PostCard({
  id,
  title,
  username,
  timestamp,
  content,
  isOwner = false,
}: PostCardProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowReadMore, setShouldShowReadMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const relativeTime = useRelativeTime(timestamp);

  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setShouldShowReadMore(scrollHeight > CONTENT_MAX_HEIGHT);
    }
  }, [content]);

  return (
    <>
      <article
        className={
          "w-full border border-neutral-300 rounded-2xl flex flex-col bg-neutral-50 transition-all duration-300"
        }
      >
        <header className="h-17.5 w-full bg-brand text-neutral-50 flex items-center justify-between px-4 md:px-8 py-4 flex-shrink-0 rounded-t-2xl">
          <h2 className="font-bold text-lg md:text-1xl leading-snug truncate">
            {title}
          </h2>

          {isOwner && (
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
        </header>

        <div
          className={`flex-1 px-4 py-4 flex flex-col gap-4 ${
            !isExpanded && shouldShowReadMore ? "overflow-hidden" : ""
          }`}
          style={
            !isExpanded && shouldShowReadMore
              ? { maxHeight: `${CONTENT_MAX_HEIGHT - 70}px` }
              : {}
          }
        >
          <div className="flex items-center justify-between text-neutral-400 text-lg leading-none">
            <span className="font-bold text-neutral-400 text-base md:text-lg">
              @{username}
            </span>
            <span className="font-normal text-base md:text-lg">
              {relativeTime}
            </span>
          </div>

          <div ref={contentRef}>
            <p className="text-base md:text-lg font-normal text-neutral-900 leading-snug break-words whitespace-pre-line">
              {content}
            </p>
          </div>
        </div>

        {shouldShowReadMore && (
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-brand font-bold text-base md:text-lg hover:underline transition-all flex items-center gap-1"
            >
              {isExpanded ? "Read less" : "Read more..."}
            </button>
          </div>
        )}
      </article>

      <DeletePostModal
        id={id}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      />

      <EditPostModal
        id={id}
        title={title}
        content={content}
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      />
    </>
  );
}

export default PostCard;
