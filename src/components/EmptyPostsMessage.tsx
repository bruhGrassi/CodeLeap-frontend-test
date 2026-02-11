function EmptyPostsMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-xl font-bold text-neutral-400">
        No posts yet.
      </p>
      <p className="text-neutral-500">
        Be the first to share your thoughts with the network!
      </p>
    </div>
  );
}

export default EmptyPostsMessage;
