const App = () => {
  const now = new Date()
  const a = 15
  const b = 22

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App;
