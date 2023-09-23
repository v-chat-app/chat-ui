import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AutoComplete from "../Components/Admin/AutoComplete";
// import axios from "axios";

const organizationList = [
  {
    org_name: "Tata Consultancy Services",
    org_id: "TCS",
    search: "Tata Consultancy Services",
  },
  {
    org_name: "Solverminds Solutions",
    org_id: "SVM",
    search: "Solverminds Solutions",
  },
];

const SelectOrg = ({ open, setOpen, setOrg, orgList }) => {
  const [value, setValue] = React.useState(null);

  const onSelectCallBack = () => {
    setOrg(value);
    handleClose()
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select Organization</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please select the organization to view details.
          </DialogContentText>
          <AutoComplete
            value={value}
            onChange={setValue}
            data={organizationList}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSelectCallBack}>Select</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SelectOrg;
