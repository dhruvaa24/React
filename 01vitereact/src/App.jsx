import Chai from "./Chai.jsx"

function App() {
  const username = "Dhruv Agrawal"

  return (
    <>
      <Chai />
      {/* // <h1> Chai aur rec</h1> // this will give error as according to the rule you can return only one html element. to solve this the extra tags were wrapped inside a div element or empty tag called fragment <> </> */}
      <h1>Dhruvaa24 {username}</h1>
      {/* {username} is evaluated outcome that means you cant write whole javascript code inside {} but you ca only write the final outcomes of javascript written outside the return  */}
      <p>Test Para</p>
    </>
  )
}

export default App
