import { Avatar, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const ProfileBar = () => {
    const _700 = useMediaQuery("(min-width:700px)")
    return (
        <>
            <Stack flexDirection={'row'}
                justifyContent={'space-between'}
                px={1}
                py={2}
                width={_700 ? "80%": "90%" }
                mx={'auto'}
                boxShadow={'5px 5px 5px gray'}
                
                borderRadius={'15px'}
                sx={{
                    ":hover": {
                        cursor: 'pointer'
                    }
                }}>
                <Stack flexDirection={'row'} gap={2}>
                    <Avatar src='' alt='' />
                    <Stack flexDirection={'column'} >
                        <Typography
                            variant='h6'
                            fontWeight={"bold"}
                            fontSize={_700 ? '1rem' : '0.9rem'}>
                            Harsh Soni
                        </Typography>
                        <Typography
                            variant='caption'
                            color='gray'
                            fontSize={_700 ? '1.1rem' : '0.75rem'}>
                            This is bio
                        </Typography>
                        <Typography
                            variant='caption'
                            
                            fontSize={_700 ? '1rem':"0.9rem"}>
                            4 followers
                        </Typography>
                    </Stack>
                </Stack>
                <Button size={
                    _700 ?'medium' : 'small'
                }   sx={{
                    border:"1px solid gray",
                    color:'black',
                    borderRadius:'10px',
                    p:2,
                    height:40,
                }}>Follow</Button>

            </Stack>
        </>


    )
}

export default ProfileBar