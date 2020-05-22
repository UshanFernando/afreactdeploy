import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Containers/StoreManagerPage/StoreManager.css";
import axios from 'axios';
class StoreManagerAddproductCom extends Component {
    render() {

        return (
            <div className="card   card-body  stockmngerform" >
                <form onSubmit={this.props.SubmitDetailsHandler}>
                    <label>Product Name: </label>
                    <div className="form-group">
                        <input type='text' className="form-control" placeholder="add a product" onChange={this.props.ProductNameChangedhandler} />
                    </div>

                    <div className="form-group">
                        <label>Product Category: </label>
                        <select

                            required
                            className="form-control"
                            value={this.props.Category}
                            onChange={this.props.ProdutCategoryChangedhandler}>
                            {
                                this.props.categories.map(function (single) {
                                    return <option
                                        key={single._id} selected
                                        value={single.name}   selected>{single.name}
                                      
                                    </option>;
                                })
                               
                            }
                        </select>
                    </div>

                    <label>Product Price: </label>
                    <div className="form-group">
                        <input type='Number' className="form-control" placeholder="add The Price" onChange={this.props.ProductPriceChangedhandler} />
                    </div>

                    <label>Discount </label>
                    <div className="form-group">
                        <input type='Number' className="form-control" placeholder="Discount" onChange={this.props.DiscountChangedhandler} />
                    </div>


                    <div className="storeTextArea form-group">
                        <textarea className="form-control" placeholder="Add Products Details" rows="5" onChange={this.props.DiscriptionChangedhandler} />

                    </div>


                    <div className="storeMana_ph">
                        <div className="Produ_photo_show mx-auto ">
                            {this.props.Imageurl && <img src={this.props.Imageurl} alt="Preview" />}
                        </div>
                        {!this.props.Imageurl && <p className="alert alert-danger">Please Select a Image and Image Size Should be Less Than 9MB</p>}
                    </div>
                    <div class="file btn btn-lg btn-primary storeManageFilUpload">
                        Upload Image
                        <input type="file"
                            accept=".jpg,.png,.jpeg"
                            onChange={this.props.imagePickedHandler}
                        />
                    </div>



                    <button type="submit" className="btn btn-block btn-primary mt-3">Add Product</button>

                </form>

            </div>

            
        );


    }


}

export default StoreManagerAddproductCom;




















