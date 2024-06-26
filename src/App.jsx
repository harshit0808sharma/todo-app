import Todo from "./components/Todo";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen p-5 bg-gradient-to-br from-cyan-500 to-blue-500 flex justify-center items-center">
        <Todo/>
      </div>
    </>
  )
}

export default App;