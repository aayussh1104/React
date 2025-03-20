
import { useForm } from "react-hook-form";
import './App.css';

  function App() {
  
  
  const{
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data){
    // API call ko simulate krte hai

    await new Promise((resolve)=>setTimeout(resolve, 5000))
    console.log("Submitting the form", data);
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First name: </label>
        <input
        className={errors.firstName ? 'input-error': '.input-normal'}
        {...register("firstName", 
          { 
            required: true, 
            minLength:{value : 3, message : 'Min length should be atleast 3'}, 
            maxLength:{value : 6, message : 'Max length should be atmost 6'} 
            })} />
            {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label> Middle name: </label>
        <input 
        className={errors.middleName ? 'input-error': '.input-normal'}
        {...register("middleName")} />
      </div>
      <br />
      <div>
        <label> Last name: </label>
        <input
        className={errors.lastName ? 'input-error': '.input-normal'}
        {...register("lastName",
        { pattern: {
          value:/^[A-Za-z]+$/i,
          message:"Last name is not as per the pattern rules"
        } }
        )} />
        {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value ={isSubmitting  ? "Submitting" : "Submit"}/>
    </form>
    </>
  )
}

export default App
