import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
      <div>
        <h1>Custom App!</h1>
      </div>
    )
} // The function parses the return into a reactElement just like written below.And then we can pass this function inside the render function of the Root but we can not directly pass the custom reactElement that we make as render is a functin that accepts only a function with specific arguments and then executes itself but if we pass a custom reactElement it wont work as we dont know the parameters.

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit GOOGLE'
// }

const user = " dhruvaaaaa24" // we can insert this variable in our custom reeact element and it is injected directly. for the same reason we write evaluated outcome in our return statement in the {} brackets since the return values by the end of the day have to be converted in the parse tree as below so if we would have writeen a javascript code within {} it would have given an error when they will convert in parse tree

const reactElement = React.createElement(
    'a',
    {
      href: 'https://www.google.com',
      target: '_blank'
    },
    'Click me to visit Google',
    user
)//But this custom reactElement will work as we made it as per the requiremnets and syntax required by the render function 

const anotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
) // And this custom reactElement will work as its syntax is correct and will get rendered by the render function


ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />
    reactElement
    // anotherElement
    //<App />
  
)
