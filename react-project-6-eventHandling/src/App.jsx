import './App.css';

function App() {

  function handleClick(){
    alert("Hi aayush i am your even listener and i am clicked")
  }

  function handleMouseOver(){
    alert("Paragrah ke upr mouse aayi hai")
  }

  function handlingForm(e){
    console.log("value till now", e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("form submit krdo")
  }

  return (
    <>
    <div>
      <button onClick={alert("button click hua hai")}>    {/* this is called immediate invocation and we never have to do this*/} 
        Click me
      </button>



      {/*<form onSubmit={handleSubmit}>
        <input type="text" onChange={handlingForm} />
        <button type="submit">Click me</button>
      </form>*/}

      {/*<p onMouseOver={handleMouseOver} style={{color:'red', border: '1px solid black'}}>I am a paragraph</p>
      <button onClick={handleClick}>Click me</button>
      <br />
      <button onClick={()=>{
        alert("Hi i am second event listener and i am clicked")
      }}>Click me</button>*/}
    </div>
    </>
  )
}

export default App
