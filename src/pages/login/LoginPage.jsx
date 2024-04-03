import { Button, Input } from '@mui/material'
import "../../pages/login/login.modul.css"

const LoginPage = () => {
  return (
    <div>
     <form className='auth' >

     <div className='form'>
        <h2 >Log in </h2>
        <Input className='input' placeholder='email' type='gmail' />
        <Input className='input' placeholder='password' type="password" /> 
        <Button style={{width:"150px"}} >login</Button>
     </div>
     </form>
    </div>
  )
}

export default LoginPage