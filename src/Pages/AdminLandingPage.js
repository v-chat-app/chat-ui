import React, { useEffect } from "react";
import AdminNavBar from "./Admin/AdminNavBar";
import Grid from "@mui/material/Grid";
import UserDetails from "./Admin/UserDetails";
import axios from "axios";
import CreateUserDialog from "../Dialogs/CreateUserDialog";

const AdminLandingPage = () => {
  const [tableData, setData] = React.useState([]);
  const [createDialog, setDialogOpen] = React.useState(false);
  useEffect(() => {
    console.log("inside AdminLandingPage useEffect ...");
    axios.get("http://localhost:8080/users/get").then((res) => {
      let data = [];
      res.data.forEach((user) => {
        let rowdata = {
          user_id: user.user_id,  
          name: user.name,
          org_name: user.org_id,
          email: user.email_id,
        };
        data.push(rowdata);
      });
      setData(data);
    });
  }, []);
  return (
    <div>
      <AdminNavBar onClickCreate={setDialogOpen} />
      <Grid container height={window.innerHeight - 70} spacing={2} justifyContent="space-around" padding={1}>
        <Grid item xs={12} >
          <UserDetails rows={tableData} />
        </Grid>
      </Grid>
      <CreateUserDialog open={createDialog} setOpen={setDialogOpen} />
    </div>
  );
};

export default AdminLandingPage;
