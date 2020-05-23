import React,{Component} from 'react'
import Auth from '../Authentication/Auth';

import CartTable from '../Components/Cart/CartTable';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: Auth.getUserId(),
        name: "",
        message:"",
        rating:2,
        avg:0.0,
        cartProducts:[],
        products:[],
        carts:[{id:"sss"},{id:"ddd"}]
    };
    //this.handleChange = this.handleChange.bind(this);
    this.loadCartProducts = this.loadCartProducts.bind(this);
    
  }
  async componentDidMount() {
    this.loadCartProducts();
  }
  async loadCartProducts() {
    try {
      
      const res = await fetch("http://localhost:5000/cart/carts/"+this.state.user);
      const data = await res.json();
      const data1 = [];
      data.forEach(async item => {
        const res1 = await fetch("http://localhost:5000/storemanger/products/"+item.product);
        const test = await res1.json();
        data1.push(test);
      });
      
      console.log(data1[3].productname);
      //updateing state with lastest data
      this.setState({
        cartProducts: data,
        products:data1
      });
      
      
    } catch (e) {
      //if failed to communicate with api this code block will run
      console.log(e);
    }

    


  }
  render(){
    
    let cartList;
        if (this.state.cartProducts!= null) {
            cartList = this.state.cartProducts.map((item, index) => {
              
              return (<tr>
                <td>
                    <div class="media">
                        <div class="my-4 mr-3">
                            <button id="" type="button" class="page-link"><i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                        <div class="d-flex" height="100px">
                            <img width="150px" src="img/product/" alt="" />
                        </div>
                        <div class="media-body">
                            <p>{ item.product.productname}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <h5>{ item.product.price }</h5>
                </td>
                <td >
                    <div class="product_count">

                        <input type="text" name="qty" id="" title="Quantity:"
                            class="input-text qty" value={ item.quantity }/>

                        <button id="up"
                            class="increase " type="button"><i class="fas fa-angle-up"></i></button>
                        <button id="down"
                            class="reduced " type="button"><i class="fas fa-angle-down"></i></button>
                    </div>
                </td>
                <td >
                    <h5>Rs.100</h5>
                </td>
</tr>
            )
      
            })
          }
    
    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

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

                                        <tr>
                                           {cartList}
                                        </tr>
                                        
                                        <tr>
                                            <td>
                                                <div class="media">
                                                    <div class="my-4 mr-3">
                                                        <button id="" type="button" class="page-link"><i class="fas fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                    <div class="d-flex" height="100px">
                                                        <img width="150px" src="img/product/" alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <p>Item 1</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>Rs.100</h5>
                                            </td>
                                            <td >
                                                <div class="product_count">

                                                    <input type="text" name="qty" id="" title="Quantity:"
                                                        class="input-text qty" />

                                                    <button id="up"
                                                        class="increase " type="button"><i class="fas fa-angle-up"></i></button>
                                                    <button id="down"
                                                        class="reduced " type="button"><i class="fas fa-angle-down"></i></button>
                                                </div>
                                            </td>
                                            <td >
                                                <h5>Rs.100</h5>
                                            </td>

                                        </tr>
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
                                    <form class="row contact_form" action="" method="post" id="shipping-form">



                                        <div class="col-md-12 ">
                                            <span class="placeholder mb-2" data-placeholder="Town/City"><strong>Method</strong></span>
                                            <ul class="list ">
                                                <li class=" ml-3"><label class="float-left">Domex<span></span></label><input class="pixel-radio float-right " type="radio" value="Domex" name="ship" /></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-12 ">

                                            <ul class="list ">

                                                <li class="ml-3  "><span class="float-left">Local Post</span><input class="pixel-radio float-right " type="radio" value="LocalPost" name="ship" /></li>

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
                                            <li><a href="#">Subtotal <span id="subt">1000</span><span>Rs.</span></a></li>
                                            <li><a href="#">Shipping <span id="shippingPrice" >0</span><span>Rs.</span></a></li>
                                            <li><a href="#">Total <strong ><span id="tot">1000</span><span>Rs.</span></strong></a></li>
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