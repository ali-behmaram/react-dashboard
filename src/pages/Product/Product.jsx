import React from "react"
import "./Product.css"
import { Link } from "react-router-dom"
import Chart from "../../components/Chart/Chart"
import { productsDataChart } from "../../data"


export default function Product() {
    return(
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title="Sale in Month" data={productsDataChart} dataKey='sales' />
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://picsum.photos/3000/2000" alt="Apple AirPods" className="productInfoImg" />
                        <span className="productName">Apple AirPods</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">ID:</div>
                            <div className="productInfoValue">123</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Name:</div>
                            <div className="productInfoValue">Apple AirPods</div>
                        </div>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales:</div>
                            <div className="productInfoValue">$899</div>
                        </div>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">Active:</div>
                            <div className="productInfoValue">Yes</div>
                        </div>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">In Stock:</div>
                            <div className="productInfoValue">No</div>
                        </div>
                    </div>



                </div>
            </div>

            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormTitle">Edit Product</div>   
                    
                </form>
            </div>
            
        </div>
    )
}