import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreManagerBanner from "../../Components/StoreManagerComponets/StoreManagerBanner";
import StoreManagerAddproductCom from "../../Components/StoreManagerComponets/StoreManagerAddproductCom";
import  ListProdctsInStoreMangerPage from "../../Components/StoreManagerComponets/ListProdctsInStoreMangerPage";
import axios from 'axios';
class StoreManagerPage extends Component {
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
        ProductCategories: [],
        productnameinputField:'',
        CategoryinputField:'',
        priceinputField:'',
        discountinputField:'',
        productDetailsinputField:'',
        productinputImageurl: '',
        TableCategoryFilter:''

    }
    componentDidMount() {
       
       let category;
        axios.get('http://localhost:5000/admin/category')
        .then(response=>{
           category= response.data;
           this.setState({
            ProductCategories:category,
            StoreMangerID:this.props.StoreMangerID,
            TableCategoryFilter:response.data[1].name

        });
        
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
        console.log(" ProdutCategoryChangedhandler");
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
   
    TableCategoryFilterChangeHandler = (e) => {
         
    console.log("TableCategoryFilterChangeHandler");

        let filcatge= e.target.value;
        axios.get(`http://localhost:5000/storemanger/products/category/${filcatge}`)
         .then(response=>{
         
            this.setState({
             Products:response.data,
             TableCategoryFilter:filcatge

         });
         });
         console.log(this.state.TableCategoryFilter);
         console.log(this.state.Products);

       
    }

    


    SubmitDetailsHandler = (e) => {
        e.preventDefault();
        
        const sinfile=new FormData();
        sinfile.append('productname',this.state.Productname);
        sinfile.append('category',this.state.Category);
        sinfile.append('price',this.state.Price);
        sinfile.append('discount',this.state.Discount);
        sinfile.append('description',this.state.Description);
        sinfile.append('productImage',this.state.File);
        sinfile.append('storeMangerID',this.state.StoreMangerID);

        axios.post('http://localhost:5000/storemanger/products',sinfile).then(res=>{
            console.log(res);
        });



    }

    render() {
        return (
            <div>
                <StoreManagerBanner />
                <div className="container pt-4">
                    <div className="row ">
                        <div className="col-sm ">
                            <h4 class="pt-4 ">Add New product</h4>

                            <StoreManagerAddproductCom categories={this.state.ProductCategories}
                             imagePickedHandler={this.imagePickedHandler}
                             ProductNameChangedhandler={this.ProductNameChangedhandler}
                             ProdutCategoryChangedhandler={this.ProdutCategoryChangedhandler}
                             ProductPriceChangedhandler={this.ProductPriceChangedhandler}
                             DiscountChangedhandler={this. DiscountChangedhandler}
                             DiscriptionChangedhandler={this. DiscriptionChangedhandler}
                             Imageurl={this.state.Imageurl}
                             SubmitDetailsHandler={this.SubmitDetailsHandler}
                             Category={this.state.Category}

                             />

                        </div>

                    </div>
                    <div className="row ">
                        <div className="col-sm ">
                            <h4 className="pt-4 m-4 ">Update/Delete A Product</h4>

                            <div className="productmangFiltercatergry">

                                
                                <ListProdctsInStoreMangerPage TableCategoryFilter={this.state.TableCategoryFilter}
                                     TableCategoryFilterChangeHandler={this.TableCategoryFilterChangeHandler}
                                    categories={this.state.ProductCategories}
                                    Products={this.state.Products}
                                />

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        );


    }


}

export default StoreManagerPage;