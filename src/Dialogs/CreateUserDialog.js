import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AutoComplete from "../Components/Admin/AutoComplete";
import axios from "axios";


const organizationList = [
  { org_name: "Tata Consultancy Services", org_id: "TCS", search: "Tata Consultancy Services" },
  { org_name: "Solverminds Solutions", org_id: "SVM", search: "Solverminds Solutions" },
];

const CreateUserDialog = ({ open, setOpen }) => {
const [org, setOrg] = React.useState(null);
const [email_id, setEmail] = React.useState('');
const [name, setName] = React.useState('');

const onCreate = () => {
    let userData = {
        org_id: org.org_id, email_id, name , user_id: "TBC", status: "A" 
    }
    
    axios.post('http://localhost:8080/users/create', userData).then(res => {
      if(res.data.code === 200) handleClose();
    })
}
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Create User you need to Fill all the below fields and click
            create Button.
          </DialogContentText>
          <AutoComplete value={org} onChange={setOrg} data={organizationList} />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email_id} 
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Full Name"
            type="text"
            fullWidth
            variant="standard"
            value={name} 
            onChange={e => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateUserDialog;
