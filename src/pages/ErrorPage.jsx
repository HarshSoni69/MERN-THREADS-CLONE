import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Stack
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: 'url("error-bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
      p={5}
      border={"2px solid black"}
      bgcolor={"wheat"}
      borderRadius={"10px"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
      boxShadow={'7px 7px 7px white'}
       >
        <Typography variant="h3">OOPS!</Typography>
        <Typography variant="h6">You have entered a wrong location</Typography>
        <Button size="large"  sx={{bgcolor:"blue", color:"white",borderRadius:"10px",p:2,
        ":hover":{
          bgcolor:"green",
          cursor:"pointer"
        }}}
        onClick={()=>{navigate(-1)}}>
         Go Back
        </Button>
      </Stack>
    </Stack>
  );
};

export default ErrorPage;
