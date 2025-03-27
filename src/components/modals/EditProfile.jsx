import React, { useRef, useState } from 'react'


import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { RxCross2 } from 'react-icons/rx';
const EditProfile = () => {
    const handleClose = () => { };
    const _700 = useMediaQuery("(min-width:700px)");
    const [pic, setpic] = useState('');
    const [bio, setbio] = useState('');
    const handlePhoto = () => { imgRef.current.click() };
    const handleUpdate = ()=>{};
    const imgRef = useRef();
    return (
        <>
            <Dialog
                open={true}
                onClose={handleClose}
                fullWidth
                fullScreen={_700 ? false : true}
            >
                <Box
                    position="absolute"
                    top={20}
                    right={20}
                    sx={{ cursor: "pointer" }}
                    onClick={handleClose}
                >
                    <RxCross2 size={28} />

                </Box>
                <DialogTitle textAlign="center" mb={5} sx={{ fontWeight: "bold" }}>
                    Edit Profile
                </DialogTitle>
                <DialogContent>
                    <Stack flexDirection={'column'} gap={1}>
                        <Avatar src={pic ? URL.createObjectURL(pic) : ""} alt='' sx={{ width: 96, height: 96, alignSelf: 'center' }} />
                        <Button size='large' onClick={handlePhoto} sx={{ border: '2px solid gray', borderRadius: "10px", width: 96, height: 40, alignSelf: 'center', my: 2, ":hover": { cursor: 'pointer' } }}>Change</Button>
                        <input type='file' className='file-input' accept='image/*' ref={imgRef} onChange={(e) => setpic(e.target.files[0])} />
                        <Typography variant='subtitle1' fontWeight={'bold'} fontSize={"1.2rem"} my={2}>User Name</Typography>
                        <input type='text' value={"harsh soni"} readOnly className='text1' />
                    </Stack>
                    <Stack flexDirection={'column'} gap={1}>
                        <Typography variant='subtitle1' fontWeight={'bold'} fontSize={"1.2rem"} my={2}>email</Typography>
                        <input type='text' value={"harsh650@gmail.com"} readOnly className='text1'  />

                    </Stack>
                    <Stack flexDirection={'column'} gap={1}>
                        <Typography variant='subtitle1' fontWeight={'bold'} fontSize={"1.2rem"} my={2}>Bio</Typography>
                        <input type='text'   className='text1' placeholder='your bio is..' onChange={(e)=>setbio(e.target.value)} />

                    </Stack>
                    <Button onClick={handleUpdate} size='large' sx={{ border: '2px solid gray', borderRadius: '10px', bgcolor: 'GrayText', color: 'white', my: 2, width: "100%", fontSize: "1.2rem", ":hover": { cursor: 'pointer', backgroundColor: 'gray' } }}  >Update</Button>
                </DialogContent>


            </Dialog>
        </>
    )
}

export default EditProfile