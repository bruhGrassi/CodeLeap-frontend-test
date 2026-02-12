import PostForm from "./PostForm";
import PostCard from "./PostCard";
import PostCardSkeleton from "./PostCardSkeleton";
import EmptyPostsMessage from "./EmptyPostsMessage";
import logoutIcon from '../assets/logout.svg'
import { IconButton } from './ui'
import { usePosts } from "../hooks/usePosts";

interface MainScreenProps {
  currentUser: string;
  onLogout: () => void;
}

function MainScreen({ currentUser, onLogout }: MainScreenProps) {
  const { posts, isLoading } = usePosts();

  const renderContent = () => {
    if (isLoading) return <PostCardSkeleton />;

    if (posts.length === 0) return <EmptyPostsMessage />;

    return posts.map((post) => (
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        username={post.username}
        timestamp={post.created_datetime}
        content={post.content}
        isOwner={post.username === currentUser}
      />
    ))
  }

  return (
    <div className="w-full bg-main-bg min-h-screen flex justify-center">

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
          <PostForm username={currentUser} />

          <div className="grid gap-4">
            {renderContent()}
          </div>
        </section>
      </main>
    </div>

  )
}

export default MainScreen;