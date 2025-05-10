import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let [length, setLength] = useState(5);
  let [numAllow, setNumAllow] = useState(false);
  let [charAllow, setCharAllow] = useState(false);
  let [password, setPassword] = useState("");

  let copyPassword = useRef(null)

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let char = "ABCDEFGHIJKLMNOPQSTUVXYZabcdefghijklmnopqstuvxyz";

    if (numAllow) char += "0123456789";
    if (charAllow) char += "!@#$%^&*()_+=-";

    for (let i = 0; i < length; i++) {
      let indx = Math.floor(Math.random() * char.length);
      pass += char.charAt(indx);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  let copyToClipboard = useCallback(()=>{
    copyPassword.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

 

  return (
    <>
      <main className="w-full h-screen bg-black text-white flex items-center justify-center flex-col">
        <h1 className="text-3xl mb-4 font-medium">Password Generator</h1>
        <div className="w-3xl h-32 bg-slate-500 rounded-md flex flex-col items-center p-5">
          <div className="w-full flex items-center justify-center ">
            <input
              type="text"
              className="w-150 bg-white rounded py-1 px-3 text-black outline-0 "
              value={password}
              placeholder="Password"
              readOnly
              ref={copyPassword}
            />
            <button
              className="py-1 px-3 bg-blue-700 ml-2 rounded-md active:scale-90"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="w-full p-3 mt-2 px-8 flex items-center ">
            <input
              className="mr-2"
              type="range"
              min={1}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="mr-2">length({length})</label>

            <input
              type="checkbox"
              id="number"
              defaultChecked={numAllow}
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label className="mx-2" htmlFor="number">
              Number
            </label>

            <input
              type="checkbox"
              id="charactor"
              defaultChecked={charAllow}
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label className="mx-2" htmlFor="charactor">
              Charactor
            </label>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
