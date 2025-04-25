import './App.css';
import ExpensiveComponent from './components/expensiveComponent';

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(()=>{
  //   setCount(count + 1);
  // }, [count]);

  return (
    <>
    <div>
      <ExpensiveComponent/>
    </div>
      {/* <div>
        Count : {count}
      </div>
      <br />
      <button onClick={handleClick}> Increment </button>
      <br />
      <br />
      <div>
        <Child 
        buttonName="Click me"
        handleClick = {handleClick}
        />
      </div> */}
    </>
  )
}

export default App
