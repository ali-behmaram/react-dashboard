import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { userRows } from '../../data'

import "./Users.css"
import { Link } from 'react-router-dom'
import { DeleteOutline } from '@mui/icons-material'
export default function UserList() {

  let [userDatas, setUserDatas] = useState(userRows)
  const handleDelete = (id) => {
    setUserDatas(userDatas.filter(user => user.id !== id))
  }

  const columns =[
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "user",
      headerName: "User",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className='link'>
              <div className='userListUser'>
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            </Link>
          </>
        );
      },
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 130,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return(
          <>
            <Link to={`/user/${params.row.id}`} className=''>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              // onClick={() => handleDelete(params.row.id)}
            />
            
          </>

        )
      },
      headerAlign: "center",
      align: "center",
    }
  
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={userRows}
        columns={columns}
        disableSelectionOnClick
        pageSize={3}
       />
    </div>
  )
}
