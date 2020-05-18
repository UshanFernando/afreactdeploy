import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Containers/StoreManagerPage/StoreManager.css";

class StoreManagerAddproductCom extends Component {

    state = {
        Products: [],
        Productname: '',
        Category: '',
        Price: 0,
        Discount: 0,
        Description: '',
        Imageurl: '',
        File: '',
        StoreMangerID: '',
        ProductCategories: []
    }

    componentDidMount() {
        this.setState({
            ProductCategories: ['watches', 'clothes'],
            StoreMangerID: 'fghhtyyyy'
        });
    }
    imagePickedHandler = (e) => {
        let url;
        if (e.target.files && e.target.files.length === 1) {

            let fileReader = new FileReader();
            fileReader.onload = () => {
                url = fileReader.result;
                this.setState({
                    Imageurl: url
                });
            }
            fileReader.readAsDataURL(e.target.files[0]);
            this.setState({
                File: e.target.files[0],

            });

        }

    }
    ProductNameChangedhandler = (e) => {
        this.setState({
            Productname: e.target.value
        });
    }

    ProdutCategoryChangedhandler = (e) => {
        this.setState({
            Category: e.target.value
        });
    }

    ProductPriceChangedhandler = (e) => {
        this.setState({
            Price: e.target.value
        });
    }
    DiscountChangedhandler = (e) => {
        this.setState({
            Discount: e.target.value
        });
    }
    DiscriptionChangedhandler = (e) => {
        this.setState({
            Description: e.target.value
        });
    }
    SubmitDetailsHandler = (e) => {
        e.preventDefault();
        let product = {
            Productname: this.state.Productname,
            Category: this.state.Category,
            Price: this.state.Price,
            Discount: this.state.Discount,
            Description: this.state.Description,
            File: this.state.File,
            Imageurl: this.state.Imageurl,
            StoreMangerID: this.state.StoreMangerID

        }
        console.log(product);
    }

    render() {

        return (
            <div className="card  my-3 card-body py-4 stockmngerform" >
                <form onSubmit={this.SubmitDetailsHandler}>
                    <label>Product Name: </label>
                    <div className="form-group">
                        <input type='text' className="form-control" placeholder="add a product" onChange={this.ProductNameChangedhandler} />
                    </div>

                    <div className="form-group">
                        <label>Product Category: </label>
                        <select

                            required
                            className="form-control"
                            value={this.state.Category}
                            onChange={this.ProdutCategoryChangedhandler}>
                            {
                                this.state.ProductCategories.map(function (single, index) {
                                    return <option
                                        key={index}
                                        value={single} >{single}
                                    </option>;
                                })
                            }
                        </select>
                    </div>

                    <label>Product Price: </label>
                    <div className="form-group">
                        <input type='Number' className="form-control" placeholder="add The Price" onChange={this.ProductPriceChangedhandler} />
                    </div>

                    <label>Discount </label>
                    <div className="form-group">
                        <input type='Number' className="form-control" placeholder="Discount" onChange={this.DiscountChangedhandler} />
                    </div>


                    <div className="storeTextArea form-group">
                        <textarea className="form-control" placeholder="Add Products Details" rows="5" onChange={this.DiscriptionChangedhandler} />

                    </div>


                    <div className="storeMana_ph">
                        <div className="Produ_photo_show mx-auto ">
                            {this.state.Imageurl && <img src={this.state.Imageurl} alt="Preview" />}
                        </div>
                        {!this.state.Imageurl && <p className="alert alert-danger">Please Select a Image</p>}
                    </div>
                    <div class="file btn btn-lg btn-primary storeManageFilUpload">
                        Upload
                        <input type="file" ref="productImage"
                            accept=".jpg,.png,.jpeg"
                            onChange={this.imagePickedHandler}
                        />
                    </div>



                    <button type="submit" className="btn btn-block btn-primary mt-3">Add Product</button>

                </form>

            </div>
        );


    }


}

export default StoreManagerAddproductCom;




















