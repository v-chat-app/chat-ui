import React, { useEffect } from "react";
import AdminNavBar from "./Admin/AdminNavBar";
// import axios from "axios";
import CreateUserDialog from "../Dialogs/CreateUserDialog";
import AdminContainer from "./Admin/AdminContainer";
import SelectOrg from "../Dialogs/SelectOrg";

const AdminLandingPage = () => {
  const [createDialog, setDialogOpen] = React.useState(false);
  const [orgDialog, setOrgDialog] = React.useState(false);
  const [orgValue, setOrg] = React.useState(null);
  useEffect(() => {
    setOrgDialog(true)
  },[])
  
  return (
    <div>
      <AdminNavBar onClickCreate={setDialogOpen} />
      {orgValue && <AdminContainer orgValue={orgValue} />}
      <CreateUserDialog open={createDialog} setOpen={setDialogOpen} />
      <SelectOrg open={orgDialog} setOpen={setOrgDialog} setOrg={setOrg} />
    </div>
  );
};

export default AdminLandingPage;
