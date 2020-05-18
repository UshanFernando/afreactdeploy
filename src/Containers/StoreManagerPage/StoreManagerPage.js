import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreManagerBanner from "../../Components/StoreManagerComponets/StoreManagerBanner";
import StoreManagerAddproductCom from "../../Components/StoreManagerComponets/StoreManagerAddproductCom";
import ProductTableRow from "../../Components/StoreManagerComponets/ProductTableRow";
class StoreManagerPage extends Component {


    componentDidMount() {

    }

    render() {

        return (
            <div>
                <StoreManagerBanner />
                <div class="container pt-4">
                    <div class="row ">
                        <div class="col-sm ">
                            <h4 class="pt-4 ">Add New product</h4>

                            <StoreManagerAddproductCom />

                        </div>

                    </div>
                    <div class="row ">
                        <div class="col-sm ">
                            <h4 class="pt-4 ">Update/Delete A Product</h4>


                            <div className="storeManegeProdcts py-4 my-4">

                                <table className="table table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Product Category</th>
                                            <th>Product Name</th>
                                            <th>Product Price</th>
                                            <th>Discount</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>





                        </div>

                    </div>

                </div>


            </div>
        );


    }


}

export default StoreManagerPage;