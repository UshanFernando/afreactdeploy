import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../StoreManager/StoreManager.css";
import { Link } from 'react-router-dom';
class StoreManagerDashBoard extends Component {


    componentDidMount() {

    }

    render() {

        return (
   
            <div>
                <section class="blog-banner-area" id="category">
                    <div class="container h-80">
                        <div class="blog-banner">
                            <div class="text-center">
                                <h1>Store Manager DashBoard</h1>
                                <nav aria-label="breadcrumb" class="banner-breadcrumb">Manage Products</nav>
                            </div>
                        </div>
                    </div>
                </section>

                <Link to="/Stockmanager/addingProducts">
                <div className="p-4 mx-auto bg-primary my-2">
                   Add products 
                </div>
                </Link>
               <br></br>
                <Link to="/Stockmanager/listproducts">
                <div className="p-4 mx-auto bg-primary">
                   List Products 
                </div>
                </Link>
      </div>

          );  }





}


export default StoreManagerDashBoard;
