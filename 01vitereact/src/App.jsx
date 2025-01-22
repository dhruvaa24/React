import Chai from "./Chai.jsx"

function App() {
  return (
    <>
      <Chai />
      {/* // <h1> Chai aur rec</h1> // this will give error as according to the rule you can return only one html element. to solve this the extra tags were wrapped inside a div element or empty tag called fragment <> </> */}
      <p>Test Para</p>
    </>
  )
}

export default App
