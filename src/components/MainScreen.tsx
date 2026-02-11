import PostForm from "./PostForm";

function MainScreen() {
  return(
    <div className="w-full bg-main-bg min-h-screen flex justify-center">

      <main className="w-[800px] bg-neutral-50">

        <h1 className="h-[80px] w-full bg-brand flex items-center px-8 text-[22px] font-bold text-neutral-50">
          CodeLeap Network
        </h1>

        <section className="w-full bg--neutral-50 p-4">
          <PostForm />
        </section>
      </main>
    </div>

  )
}

export default MainScreen;