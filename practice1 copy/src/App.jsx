import { useState, createContext, useContext } from "react";
import { AutoColor } from "./components/AutoColor";

//import './App.css'
import Button from "./components/Button";
const ColorContext = createContext();
function App() {
  const [color, setColor] = useState("yellow");

  //const colors = ['LightSeaGreen', 'CadetBlue', 'BurlyWood', 'DarkGoldenRod', 'DarkOrange', 'DeepPink']

  return (
    <>
      <ColorContext.Provider value={{ color, setColor }}>
        <div
          className="w-full h-screen duration-200"
          style={{ backgroundColor: color }}
        >
          <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-20  ">
            <Button colors="LightSeaGreen" />
            <Button colors="CadetBlue" />
            <Button colors="BurlyWood" />
            <Button colors="DarkGoldenRod" />
            <Button colors="DarkOrange" />
            <Button colors="DeepPink" />
            <AutoColor />
          </div>
        </div>
      </ColorContext.Provider>
    </>
  );
}

//   return (
//    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
//   <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-20  '>
//    <MyButton  on={handleClick} colors="LightSeaGreen" />
//    <MyButton  on={handleClick} colors="CadetBlue" />
//    <MyButton  on={handleClick} colors="BurlyWood" />
//    <MyButton  on={handleClick} colors="DarkGoldenRod" />
//    <MyButton  on={handleClick} colors="DarkOrange" />
//    <MyButton  on={handleClick} colors="DeepPink" />
//   </div>
//    </div>
//   )
// }

export default App;

export { ColorContext };
