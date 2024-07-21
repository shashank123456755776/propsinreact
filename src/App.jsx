import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componenets/Card'
function App() {
  const [count, setCount] = useState(15)

  let myobj={
    name:"shashank suman",
    age:21
  }
  let newarr=[1,2,3,4,5]
  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4 ">Tailwind Test</h1>
     {/* props has been used to passes diffrent content in same card calling many more places */}
     {/* <Card channel="chaiaurcode" myobj={myobj} newarr={newarr}/> */}
     <Card username="monalisha" btnText="click me"/>
     <Card username="shashank suman" btnText="visit me"/>
    </>
  )
}

export default App
// Padding and Margin Bahar 