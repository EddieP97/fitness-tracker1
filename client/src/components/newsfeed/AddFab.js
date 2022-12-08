import { Add } from "@mui/icons-material";
import {Box, Fab, Modal, Tooltip, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import AddPost from "../addPost/AddPost";

const SytledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const AddFab = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <Tooltip onClick={e=>setOpen(true)} title="Add Post" sx={{position:"fixed", bottom:75, left:{xs:"calc(50% - 25px)", md:20}}}>
            <Fab color="primary" aria-label="add">
                <Add>

                </Add>
            </Fab>

        </Tooltip>
        <SytledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={700} height={550} bgcolor="white" p={3} borderRadius={5}>
    <Typography>
       <AddPost sx={{position:"fixed"}}/> 
    </Typography>
  </Box>
</SytledModal>
        </>
    )
}

export default AddFab;