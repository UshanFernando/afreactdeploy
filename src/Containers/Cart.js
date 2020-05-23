import React, { Component } from 'react'
import Auth from '../Authentication/Auth';

import CartTable from '../Components/Cart/CartTable';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: Auth.getUserId(),
            name: "",
            message: "",
            total: 0,
            district: 0,
            ship:0,
            shipping:0,
            subtotal: 0.0,
            serverAdd: "http://localhost:5000/",
            cartProducts: []
        };

        this.loadCartProducts = this.loadCartProducts.bind(this);
        this.singleTotal = this.singleTotal.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    async componentDidMount() {
        this.loadCartProducts();
    }
    async loadCartProducts() {
        try {

            const res = await fetch("http://localhost:5000/cart/cartz/" + this.state.user);
            const data = await res.json();
            let sub=0;
            data.map((item) => {
                item.total =  item.quantity * (item.product.price * (100 - item.product.discount) / 100)
                sub = sub + item.total 
            });
            console.log(sub);
            //updateing state with lastest data
            this.setState({
                cartProducts: data,
                subtotal:sub
            });




        } catch (e) {
            //if failed to communicate with api this code block will run
            console.log(e);
        }
    }
    handleChange(event) {
        
        const target = event.target;
        const value =  target.value
        const name= target.name;
        
     
       
        this.setState({
            [name]:value,
            
        
        });
        const shipp=this.state.district + this.state.ship
        this.setState({
            
            shipping:shipp
        
        });

        // const val = event.target.value;
        // const items = this.state.comments;
        // items.map(item => {
        //   if (item._id === index) {
        //     item.message = val;

        //   }
        //   this.setState({
        //     comments: items
        //   })
        // })
    }
    singleTotal(id) {
            
        let items = this.state.cartProducts;
        let sub=0;
        items.map(item => {
            if (item._id === id) {
                item.total = item.quantity * (item.product.price * (100 - item.product.discount) / 100)

            }
            sub=sub+item.total
        })

        this.setState({
            cartProducts: items,
            subtotal: sub
        })

    }

    qtyIncrement(id) {

        const items = this.state.cartProducts;
        items.map(item => {
            if (item._id === id) {
                item.quantity = item.quantity + 1;

            }
        })
        this.setState({
            cartProducts: items
        })
        this.singleTotal(id);
    }
    qtyDecrement(id) {
        const items = this.state.cartProducts;
        items.map(item => {
            if (item._id === id && item.quantity > 0) {
                item.quantity = item.quantity - 1;

            }

        })
        this.setState({
            cartProducts: items
        })
        this.singleTotal(id);
    }
    render() {

        let cartList;
        if (this.state.cartProducts != null) {
            cartList = this.state.cartProducts.map((item, index) => {

                return (<tr>
                    <td>
                        <div class="media">
                            <div class="my-4 mr-3">
                                <button id="" type="button" class="page-link"><i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                            <div class="d-flex" height="100px">
                                <img width="150px" src={this.state.serverAdd + item.product.productImage} alt={this.state.serverAdd + item.product.productImage} />
                            </div>
                            <div class="media-body">
                                <p>{item.product.productname}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5>Rs.{item.product.price}</h5>
                    </td>
                    <td >
                        <div class="product_count">

                            <input type="text" name="qty" id="" title="Quantity:"
                                class="input-text qty" value={item.quantity}  />

                            <button id="up"
                                class="increase " type="button" onClick={() => this.qtyIncrement(item._id)}><i class="fas fa-angle-up"></i></button>
                            <button id="down"
                                class="reduced " type="button"><i class="fas fa-angle-down" onClick={() => this.qtyDecrement(item._id)}></i></button>
                        </div>
                    </td>
                    <td >
                        <h5>Rs.{item.total}</h5>
                    </td>
                </tr>
                )

            })
        }

        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

                <section class="blog-banner-area" id="category">
                    <div class="container h-100">
                        <div class="blog-banner">
                            <div class="text-center">
                                <h1>Shopping Cart</h1>
                                <nav aria-label="breadcrumb" class="banner-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div class="toast m-5 alert alert-success shadow " id="myToast" style="position: fixed; top:0; right: 0;z-index:10000" data-delay="5000">
         <div class="toast-header">
      <img src="img/bell.png" width="20px" class="rounded mr-2" alt="..."/>
      <strong class="mr-auto"> </strong>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
        <strong class="" style="font-size:20px;">Please fill the shipping form!</strong>
    </div>
    </div> */}


                <div id="cartTable">
                    <div>
                        <section class="cart_area mb-0">
                            <div class="container ">
                                <div class="cart_inner">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>

                                                </tr>
                                            </thead>
                                            <tbody >


                                                {cartList}

                                                <tr class="bottom_button ">
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                </tr>





                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="checkout_area section-margin--small mt-0">
                            <div class="container">

                                <div class="billing_details">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <h3>Shipping Details</h3>
                                            <form class="row contact_form" action="" method="post" id="shipping-form" onChange={this.handleChange}>



                                                <div class="col-md-12 ">
                                                    <span class="placeholder mb-2" data-placeholder="Town/City"><strong>Method</strong></span>
                                                    <ul class="list ">
                                                        <li class=" ml-3"><label class="float-left">Domex<span></span></label><input class="pixel-radio float-right " type="radio" value="500" name="ship" /></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-12 ">

                                                    <ul class="list ">

                                                        <li class="ml-3  "><span class="float-left">Local Post</span><input class="pixel-radio float-right " type="radio" value="0" name="ship" /></li>

                                                    </ul>
                                                </div>

                                                <div class="col-md-12 form-group p_star">
                                                    <span class="placeholder mb-2" data-placeholder="Town/City"><strong>Shipping Location</strong></span>
                                                    <select class="country_select ml-2" id="district" name="district">
                                                        <option value="0">Select a District</option>
                                                        <option value="150">Colombo</option>
                                                        <option value="250">Other</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-12 form-group p_star">
                                                    <span class="placeholder mb-2" data-placeholder="Town/City"><strong>Zip Code</strong></span>
                                                    <input type="text" class="form-control ml-2" id="city" placeholder="600##" name="zip" />

                                                </div>

                                            </form>
                                        </div>

                                        <div class="col-lg-5 ml-5">
                                            <div class="order_box">
                                                <h2>Your Order</h2>

                                                <ul class="list list_2">
                                                    <li><a href="#">Subtotal <span id="subt">{this.state.subtotal}</span><span>Rs.</span></a></li>
                                                    <li><a href="#">Shipping <span id="shippingPrice" >{this.state.shipping}</span><span>Rs.</span></a></li>
                                                    <li><a href="#">Total <strong ><span id="tot">{this.state.subtotal}</span><span>Rs.</span></strong></a></li>
                                                </ul>

                                                <div class="text-center">
                                                    <button class="button button-paypal" id="shippingSubmit">Proceed to Checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>


                </div>

            </div>
        )
    }
}

export default Cart