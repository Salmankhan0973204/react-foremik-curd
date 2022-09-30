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

const AddData = (props: any) => {
  // const [id, setId] = React.useState<any>();
  const [data, setData] = React.useState<any>({
  
    name: "",
    calories: "",
    fat: "",
    carbs: "",
    protein: "",
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    props.AddHandler(data);
  };
  // useEffect(() => {
  //   const id = props.data.id;

  // }, [props.data.id]);
  // console.log(id, "id");
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open2}
      onClose={() => props.setOpen2(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open2}>
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
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    props.setOpen2(false);
                  }}
                >
                  Add
                </Button>
              </div>
            </form>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
};

export default AddData;
