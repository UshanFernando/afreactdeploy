import React,{Component} from 'react'

import CartTable from '../Components/Cart/CartTable';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        userid:"123123",
        name: "",
        message:"",
        rating:0,
        avg:0.0,
        oneStars:0,
        twoStars:0,
        threeStars:0,
        fourStars:0,
        fiveStars:0,
        products:[],
        carts:[]
    };
    //this.handleChange = this.handleChange.bind(this);
    this.loadCartProducts = this.loadCartProducts.bind(this);
    
  }
  async componentDidMount() {
    this.loadCartProducts();
  }
  async loadCartProducts() {
    try {
      const res = await fetch("http://localhost:5000/cart/carts"+this.state.userid);
      const data = await res.json();
      this.setState({
        carts: data,
      });
      
     console.log(this.state.carts);
      //updateing state with lastest data
      this.setState({
        products: data,
      });
      
    } catch (e) {
      //if failed to communicate with api this code block will run
      console.log(e);
    }

    if (this.state.comments != null) {
        let one=0,two=0,three=0,four=0,five=0,average=0.0;
        this.state.comments.map((comment) => {
            if(comment.rating==1){
                one++;
            }else if (comment.rating==2){
                two++;
            }else if(comment.rating==3){
                three++;
            }else if(comment.rating==4){
                four++;
            }else{
                five++;
            }
        
         average=(1*one+2*two+3*three+4*four+5*five)/(one+two+three+four+five);
        
        })
        this.setState({
            oneStars:one,
            twoStars:two,
            threeStars:three,
            fourStars:four,
            fiveStars:five,
            avg:average.toFixed(1) 
        });
    }


  }
  render(){
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
  <CartTable/>
            
                      
</div>
            
        </div>
    )
}
}

export default Cart