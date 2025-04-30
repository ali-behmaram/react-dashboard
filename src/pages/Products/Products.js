import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { productData } from '../../data'
import "./Products.css"
import { Link } from 'react-router-dom'
import { DeleteOutline } from '@mui/icons-material'
export default function ProductList() {

  let [productsData, setProductsData] = useState(productData)
  const productDelete = (productid) => {
    setProductsData(productsData.filter(product => product.id !== productid))
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
      field: "name",
      headerName: "Name",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className='link'>
              <div className='userListUser'>
                <img className="userListImg" src={params.row.img} alt="" />
                {params.row.name}
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
      field: "price",
      headerName: "Price",
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
            <Link to={`/product/${params.row.id}`} className=''>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => productDelete(params.row.id)}
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
        rows={productsData}
        columns={columns}
        disableSelectionOnClick
        checkboxSelection
        pageSize={5}
       />
    </div>
  )
}
