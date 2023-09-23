import React, { useEffect } from 'react';
import Grid from "@mui/material/Grid";
import UserDetails from "./UserDetails";
import axios from "axios";

const AdminContainer = ({ orgValue }) => {
    const [tableData, setData] = React.useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/users/get/${orgValue.org_id}`).then((res) => {
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
      }, [orgValue]);
return (
      <Grid container height={window.innerHeight - 70} spacing={2} justifyContent="space-around" padding={1}>
        <Grid item xs={12} >
          <UserDetails rows={tableData} title={orgValue.search} />
        </Grid>
      </Grid>
)
}

export default AdminContainer;