import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+{}|:";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * length + 1);
      pass += str.charAt[char];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div
        className=" w-full max-w-md
      mx-auto shadow-md
       rounded-lg px-20 py-3 my-8
        bg-gray-700 
         text-orange-300"
      >
        <input type="text" value={password} placeholder="password" readOnly></input>
        <button className="bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
    </>
  );
}

export default App;
