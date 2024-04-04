import { Button, Input } from '@mui/material'
import "./login.css"


const LoginPage = () => {
  return (
    <div>
     <form >

     <div className='form'>
        <h1 >Log in </h1>
        <Input style={{width:"250px"}} className='input' placeholder='email' type='gmail' />
        <Input style={{width:"250px"}} className='input' placeholder='password' type="password" /> 
        <Button style={{width:"250px",backgroundColor:"green",color:"white"}}>login</Button>
        </div>
     </form>
    </div>
  )
}

export default LoginPage