import { Button, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";

const Register = ()=>{

    const _700 = useMediaQuery("(min-width:700px)");

    const [Login,SetLogin] = useState(false);
    const [UserName,setUserName] = useState('');
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
   
    const ToggleLogin = ()=>{
        SetLogin((pre)=>!pre);
    };

    const handleLogin = ()=>{
        const data = {
           
            email:Email,
            password:Password   
        }
        console.log("Login button ohhh yeahh")
        console.log(data)
    }
    const handleRegister = ()=>{
        const data = {
            username:UserName,
            email:Email,
            password:Password   
        }
        console.log(data)
    }
 

return <>
    <Stack width={'100%'} height={'100vh'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}
    sx={
        _700 ? {
        backgroundImage:'url("/register-bg.webp")',
        backgroundRepeat:'no-repeat',
        backgroundSize:"100% 600px"
    }
    : null
    }>
        <Stack flexDirection={"column"} width={_700 ? '40%' : '90%'} gap={2} mt={_700 ? 20 : 0}>
        <Typography
        variant = "h5"
        fontSize = {_700 ? "1.5rem" : '1rem'}
        fontWeight = {'bold'}
        alignSelf = {'center'}
        >
        {Login ? 'Login with email' : 'Register With email'}
        </Typography>
        {!Login ? <TextField variant="outlined" placeholder="Enter your username..." 
        onChange={(e)=>{setUserName(e.target.value)}}/>:null}

        <TextField variant="outlined" placeholder="Enter your Email..."  onChange={(e)=>{setEmail(e.target.value)}}/>
        <TextField variant="outlined" placeholder="Enter your Password..."  onChange={(e)=>{setPassword(e.target.value)}}/>
        <Button size="large" sx={{
            width:"100%",
            height:52,
            bgcolor:"green",
            color:"white",
            fontSize:"1rem",
            ":hover":{
                bgcolor:"blue",
                cursor:"pointer"
            }
        }}
        onClick={Login ? handleLogin : handleRegister}>{!Login ? 'SIGN UP' : 'LOGIN'}</Button>
        <Typography variant="subtitle2" fontSize={_700 ? '1.3rem' : '1rem'} alignSelf={"center"} >
            {!Login ? "Already have an account? ":"New to Threads? "} <span onClick={ToggleLogin} className="login-link">{Login ? 'SIGN UP' : 'LOGIN'}</span>
        </Typography>
       
        </Stack>
    </Stack>
</>;

}
export default Register;