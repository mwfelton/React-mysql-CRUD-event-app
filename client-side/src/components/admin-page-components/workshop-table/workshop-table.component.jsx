import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { doc, deleteDoc} from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils"

import './workshop-table.styles.scss';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'practice', headerName: 'Practice', width: 130 },
    { field: 'date', headerName: 'Date', width: 130,  type: 'number' },
    { field: 'price', headerName: 'Price', type: 'number', width: 90 },
    { field: 'location', headerName: 'Location', width: 160 },
    { field: 'country',headerName: 'Country',width: 160 }
  ];
  
const WorkshopTable = ({ workshops }) => {

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link> */}
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </button>
              </div>
            );
          },
        },
      ];

    const rows = [];

    workshops.map(row => {
    let count = 1
    const rowData = {id: row.id, practice: row.practice, date: row.date, location: row.location, price: row.price, country: row.country}
    rows.push(rowData)
    count = count + 1
    })

    const handleDelete = async (id) => {
          await deleteDoc(doc(db, "upcoming-workshops", id));
      }

    return (

        <div className='burger' style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    )
}

export default WorkshopTable;
