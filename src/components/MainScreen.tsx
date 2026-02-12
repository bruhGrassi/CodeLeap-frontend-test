import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePosts } from '../hooks/usePosts';
import PostForm from "./PostForm";
import PostCard from "./PostCard";
import PostCardSkeleton from "./PostCardSkeleton";
import EmptyPostsMessage from "./EmptyPostsMessage";
import logoutIcon from '../assets/logout.svg'
import { IconButton } from './ui'
import ScrollToTopButton from './ScrollToTopButton';

interface MainScreenProps {
  currentUser: string;
  onLogout: () => void;
}

function MainScreen({ currentUser, onLogout }: MainScreenProps) {
  const {
    postsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading
  } = usePosts();

  const { ref, inView } = useInView();

  const { ref: topRef, inView: isAtTop } = useInView({
    threshold: 0,
    initialInView: true,
  });

  const shouldShowScrollUp = !isAtTop

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const allPosts = postsData?.pages.flatMap(page => page.results) ?? [];

  const renderContent = () => {
    if (isLoading) return <PostCardSkeleton />;

    if (allPosts.length === 0) return <EmptyPostsMessage />;

    return (
      <>
        {allPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            username={post.username}
            timestamp={post.created_datetime}
            content={post.content}
            isOwner={post.username === currentUser}
          />
        ))}

        <div ref={ref} className="h-10 flex justify-center items-center">
          {isFetchingNextPage && (
            <p className="text-neutral-400 animate-pulse">Loading more...</p>
          )}
        </div>
      </>
    );
  }


  return (
    <div className="w-full bg-main-bg min-h-screen flex justify-center" >

      <main className="w-[800px] bg-neutral-50">

        <h1 className="h-[80px] w-full bg-brand flex items-center justify-between px-8 text-1xl font-bold text-neutral-50">
          CodeLeap Network

          <IconButton
            icon={logoutIcon}
            alt="Logout"
            onClick={() => onLogout()}
          />
        </h1>

        <section className="w-full bg--neutral-50 p-4 grid gap-4">
          <div ref={topRef} />
          <PostForm username={currentUser} />

          <div className="grid gap-4">
            {renderContent()}
          </div>

          {shouldShowScrollUp && (
            <ScrollToTopButton />
          )}

        </section>
      </main>
    </div>

  )
}

export default MainScreen;