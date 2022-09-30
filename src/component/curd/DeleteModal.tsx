import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteModal = (props: any) => {
  const HanderDelte = () => {
    console.log("delete");
    props.deleteHandler();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open1}
      onClose={() => props.setOpen1(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open1}>
        <Box sx={style}>
          <h1>Are u Confirm to Delete This Record</h1>
          <Button
            variant="contained"
            onClick={() => {
              props.setOpen1(false);
              HanderDelte();
            }}
          >
            Conforim
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeleteModal;
