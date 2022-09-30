import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

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

const ModalA = (props: any) => {
  const [data, setData] = React.useState<any>({});
  useEffect(() => {
    setData(props.editData);
  }, [props.editData]);




  const submitHandler = (e: any) => {
    e.preventDefault();
    props.update(data);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={() => props.setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div>
          <Box sx={style}>
            <form onSubmit={submitHandler}>
              <TextField
                className="form-control"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={data?.name}
                onChange={(e: any) =>
                  setData({ ...data, name: e.target.value })
                }
              />
              <TextField
                className="form-control"
                id="outlined-basic"
                label="calories"
                variant="outlined"
                value={data.calories}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setData({ ...data, calories: e.target.value })
                }
              />
              <TextField
                className="form-control"
                id="outlined-basic"
                label="fats"
                variant="outlined"
                value={data.fat}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setData({ ...data, fat: e.target.value })
                }
              />
              <TextField
                className="form-control"
                id="outlined-basic"
                label="carbs"
                variant="outlined"
                value={data.carbs}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setData({ ...data, carbs: e.target.value })
                }
              />
              <TextField
                className="form-control"
                id="outlined-basic"
                label="protien"
                variant="outlined"
                value={data.protein}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setData({ ...data, protein: e.target.value })
                }
              />
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" type="submit" onClick={() =>  {props.setOpen(false)}
                      } >
                  Edit
                </Button>
              </div>
            </form>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalA;
