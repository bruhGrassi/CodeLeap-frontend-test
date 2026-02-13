function PostCardSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <article
          key={index}
          className="h-[316px] w-full border border-neutral-300 rounded-2xl overflow-hidden flex flex-col bg-neutral-50"
        >
          <header className="h-[70px] w-full bg-brand/60 flex items-center justify-between px-8 py-4">
            <div className="h-6 w-2/3 rounded-md bg-neutral-100 skeleton-shimmer" />
          </header>

          <div className="flex-1 px-4 py-4 flex flex-col gap-4">
            <div className="flex items-center justify-between text-lg leading-none">
              <span className="h-[18px] w-32 rounded-md bg-neutral-100 skeleton-shimmer" />
              <span className="h-[18px] w-24 rounded-md bg-neutral-100 skeleton-shimmer" />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <div className="h-[18px] w-full rounded-md bg-neutral-100 skeleton-shimmer" />
              <div className="h-[18px] w-full rounded-md bg-neutral-100 skeleton-shimmer" />
              <div className="h-[18px] w-full rounded-md bg-neutral-100 skeleton-shimmer" />
              <div className="h-[18px] w-[90%] rounded-md bg-neutral-100 skeleton-shimmer" />
              <div className="h-[18px] w-[80%] rounded-md bg-neutral-100 skeleton-shimmer" />
              <div className="h-[18px] w-[70%] rounded-md bg-neutral-100 skeleton-shimmer" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default PostCardSkeleton;
