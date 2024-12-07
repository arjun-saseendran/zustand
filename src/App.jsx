import { useAppStore } from "./store/appStore";
import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef();
  const username = useAppStore((state) => state.username);
  const count = useAppStore((state) => state.count);
  const increment = useAppStore((state) => state.increment);
  const decrement = useAppStore((state) => state.decrement);
  const setName = useAppStore((state) => state.setName);
  const products = useAppStore((state) => state.products);
  const addProduct = useAppStore((state) => state.addProduct);
  const colors = useAppStore((state) => state.colors);
  const voteHandler = useAppStore((state) => state.voteHandler);
  const data = useAppStore((state)=> state.data)
  const error = useAppStore((state)=> state.error)
  const loading = useAppStore((state)=> state.loading)
  const fetchData = useAppStore((state)=> state.fetchData)

  useEffect(()=>{fetchData()},[])
  if(loading){
    return (<h5>Loading Page</h5>)
  }
  if(error){
    return (<h5>{error}</h5>)
  }
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="text-3xl text-center mb-4"></h2>
      </div>
      <div className="card bg-base-300 p-4 flex gap-2">
        <h2 className="text-4xl">{username}</h2>
        <br />
        <button
          onClick={increment}
          className="bg-green-600 rounded-xl text-white p-2 hover:bg-green-500"
        >
          Increment
        </button>
        <h2 className="text-4xl">{count}</h2>
        <button
          onClick={decrement}
          className="bg-green-600 rounded-xl text-white p-2 hover:bg-green-500 block"
        >
          Decrement
        </button>
        <br />

        <input
          ref={inputRef}
          className="border-2 border-blue-600 rounded-xl p-2"
          type="text"
        />
        <button
          onClick={() => setName(inputRef.current.value)}
          className="bg-blue-600 rounded-xl text-white p-2 hover:bg-blue-500"
        >
          Set Name
        </button>
      </div>

      <button
        onClick={() => addProduct(inputRef.current.value)}
        className="bg-yellow-500 rounded-xl p-2 text-white"
      >
        Add Product
      </button>

      <u>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </u>
      <br />
      <div>
        <ul>
          {colors.map((color) => (
            <li
              onClick={() => voteHandler(color.id)}
              className="bg-violet-500 cursor-pointer text-white p-2 rounded-xl inline m-2"
              key={color.id}
            >
              {color.vote}
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {data.map((product) => <li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
