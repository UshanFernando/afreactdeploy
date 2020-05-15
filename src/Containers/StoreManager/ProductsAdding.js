import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../StoreManager/StoreManager.css";
class ProductsAdding extends Component {

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

                <div class="container pt-4">
                    <div class="row ">
                        <div class="col-sm ">
                            <h4 class="pt-4 ">Add New product</h4>


                            <div className="card  my-3 card-body py-4 stockmngerform" >
                                <form >
                                    <label>Product Name: </label>
                                    <div className="form-group">
                                        <input type='text' className="form-control" placeholder="add a product" />
                                    </div>

                                    <div className="form-group">
                                        <label>Product Category: </label>
                                        <select
                                            required
                                            className="form-control"
                                            value>

                                            <option>
                                                tggtg
                                                    </option>
                                            <option>
                                                hyhyhyhyhyh
                                                    </option>
                                            <option>

                                            </option>


                                        </select>
                                    </div>

                                    <label>Product Price: </label>
                                    <div className="form-group">
                                        <input type='text' className="form-control" placeholder="add The Price" />
                                    </div>

                                    <label>Discount </label>
                                    <div className="form-group">
                                        <input type='text' className="form-control" placeholder="Discount" />
                                    </div>


                                    <div className="storeTextArea form-group">
                                        <textarea className="form-control" placeholder="Add Products Details" rows="5" ></textarea>

                                    </div>


                                    <div className="storeMana_ph">
                                        <div className="Produ_photo_show mx-auto ">
                                            <img src="" alt="Preview" />
                                        </div>

                                    </div>
                                    <div class="file btn btn-lg btn-primary storeManageFilUpload">
                                        Upload
							                <input type="file" name="file" />
                                    </div>



                                    <button type="submit" className="btn btn-block btn-primary mt-3">Add a Item</button>

                                </form>

                            </div>

                        </div>



                    </div>
                     

                </div>


            </div>
        );

    
    }


}




export default ProductsAdding;