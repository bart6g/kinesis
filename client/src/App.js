import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/fetchdata");
      console.log(response.data);
      setData(response.data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={() => fetchData()}>Fetch Data</button>

      <TableContainer>
        <Table>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>LastModified</TableCell>
            <TableCell>ETAG</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>StorageClass</TableCell>
          </TableRow>
          <TableBody>
            {data
              ? data.map((row) => {
                  return (
                    <TableRow key={row.key}>
                      <TableCell component="th" scope="row">
                        {row.Key}
                      </TableCell>
                      <TableCell>{row.LastModified}</TableCell>
                      <TableCell>{row.ETag}</TableCell>
                      <TableCell>{row.Owner.DisplayName}</TableCell>
                      <TableCell>{row.StorageClass}</TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
