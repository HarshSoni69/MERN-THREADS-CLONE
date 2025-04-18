import React from 'react'
import { Avatar, Stack, Typography,useMediaQuery,Menu,MenuItem } from '@mui/material'
import { IoIosMore } from 'react-icons/io';
const Comments = () => {
    const _700 = useMediaQuery("(min-width:700px)");
    const handleClose = ()=>{};
    const handleDeleteComment = ()=>{};
    return (
        <>
            <Stack
                flexDirection={'row'}
                justifyContent={'space-between'}
                px={2}
                pb={4}
                borderBottom={'1px solid gray'}
                mx={'auto'}
                width={'90%'}
            >
                <Stack flexDirection={'row'} gap={_700 ? 2 : 1} >
                    <Avatar src='' alt='' />
                    <Stack flexDirection={'column'}>
                        <Typography variant='h6' fontWeight={'bold'} fontSize={'0.9rem'}>
                            Harsh Soni
                        </Typography>
                        <Typography variant='subtitle2' fontSize={'0.9rem'}>
                            This is a comment.
                        </Typography>
                    </Stack>

                </Stack>
                <Stack flexDirection={'row'} gap={1} alignItems={'center'} color={'GrayText'} fontSize={'0.9rem'}>
                    <p>24 min</p>
                    <IoIosMore size={_700 ? 28 : 20}/>
                </Stack>
            </Stack>
                        <Menu anchorEl={''} open={true} onClose={handleClose}
                        anchorOrigin={{vertical:'bottom',horizontal:'right' }}
                        transformOrigin={{vertical:'top',horizontal:'right'}}>
                            <MenuItem onClick={handleDeleteComment}>Delete</MenuItem>
                        </Menu>
        </>
    )
}

export default Comments
