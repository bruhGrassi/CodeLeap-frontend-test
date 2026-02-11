import PostForm from "./PostForm";
import PostCard from "./PostCard";

function MainScreen() {
  return(
    <div className="w-full bg-main-bg min-h-screen flex justify-center">

      <main className="w-[800px] bg-neutral-50">

        <h1 className="h-[80px] w-full bg-brand flex items-center px-8 text-[22px] font-bold text-neutral-50">
          CodeLeap Network
        </h1>

        <section className="w-full bg--neutral-50 p-4 grid gap-4">
          <PostForm />

          <PostCard
            title="My first post at Codeleap NetWork!"
            username="Victor"
            timestamp="25 minutes ago"
            content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
            isOwner={true}
          />

          <PostCard
            title="My first post at Codeleap NetWork!"
            username="Vini"
            timestamp="45 minutes ago"
            content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
            isOwner={false}
          />
        </section>
      </main>
    </div>

  )
}

export default MainScreen;