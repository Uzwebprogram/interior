import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./app.css"

function ModalCommon({ open, height, handleClose, children , width }){
  const style = {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width,
    height: height,
    bgcolor: "#000",
    border: "2px solid #000",
    overflowY: "auto",
    boxShadow: "0px 0px 10px 2px #ff800b",
    p: 2,
  };
  
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
};

export default ModalCommon;
