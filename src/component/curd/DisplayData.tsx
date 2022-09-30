import "./Display.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import React from "react";
import ModalA from "./EditModal";
import DeleteModal from "./DeleteModal";
import AddData from "./AddData";

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Cupcake", 305, 3.7, 67, 4.3),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
];

const DisplayData = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [editData, setEditData] = React.useState({});
  const [data, setData] = React.useState<any>(rows);
  const [deleteId, setDeleteId] = React.useState<number>();

  const update = (updataData: any) => {
    let id = updataData.id - 1;
    const newTodos = [...data];
    newTodos[id] = updataData;
    setData(newTodos);
  };

  const deleteHandler = () => {
    const dataaa = data.filter((item: any) => item.id !== deleteId);
    setData(dataaa);
  };

  const AddHandler = (dataaaa: any) => {
    console.log(dataaaa, "datadddddd");
    const addData = {
      ...dataaaa,
      id: data.length + 1,
    };

    setData([...data, addData]);
  };
  return (
    <div className="displayData">
      <Button
        variant="contained"
        onClick={() => {
          setOpen2(true);
        }}
      >
        Add Record
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => {
                      setOpen(true);

                      setEditData(row);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setOpen1(true);

                      setDeleteId(row.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalA
        setOpen={setOpen}
        open={open}
        editData={editData}
        update={update}
      />
      <DeleteModal
        setOpen1={setOpen1}
        open1={open1}
        deleteHandler={deleteHandler}
      />
      <AddData
        setOpen2={setOpen2}
        open2={open2}
        AddHandler={AddHandler}
        data={data}
      />
    </div>
  );
};

export default DisplayData;
