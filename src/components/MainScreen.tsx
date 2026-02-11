import PostForm from "./PostForm";
import PostCard from "./PostCard";
import PostCardSkeleton from "./PostCardSkeleton";

const PostList = [
  {
    id: 6363463,
    username: 'Victor',
    created_datetime: '25 minutos',
    title: 'My first post at Codeleap NetWork!',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n' +
           'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\n' +
           'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
  {
    id: 980989,
    username: 'Vini',
    created_datetime: '45 minutos',
    title: 'My first post at Codeleap NetWork!',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n' +
           'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\n' +
           'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
]

function MainScreen() {
  const isLoading = false;

  return(
    <div className="w-full bg-main-bg min-h-screen flex justify-center">

      <main className="w-[800px] bg-neutral-50">

        <h1 className="h-[80px] w-full bg-brand flex items-center px-8 text-1xl font-bold text-neutral-50">
          CodeLeap Network
        </h1>

        <section className="w-full bg--neutral-50 p-4 grid gap-4">
          <PostForm />

          <div className="grid gap-4">
            {isLoading ? (
              <PostCardSkeleton />
            ) : (
              PostList.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  username={post.username}
                  timestamp={post.created_datetime}
                  content={post.content}
                  isOwner={post.username === 'Victor'}
                />
              ))
            )}
          </div>
        </section>
      </main>
    </div>

  )
}

export default MainScreen;