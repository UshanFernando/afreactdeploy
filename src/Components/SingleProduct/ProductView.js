import React, { Component } from 'react'

class ProductView extends Component {
     product = 
        {id: 'cg1', Productname: 'Item 1',Price:'100',Discount:'10',Description:'Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.'};
      user={id:'123123',name:'saman'};
    constructor(props) {
        super(props);
    
        this.state = {
            
            qty: 1,
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    async handleSubmit(event) {
        event.preventDefault();
        alert(this.user.id);
       

        if (this.user.id!=null) {
            try {
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    user: this.user.id,
                    product:this.product.id, 
                    quantity:this.state.qty
                  }),
              };
               await fetch(
                "http://localhost:5000/cart/newCart",
                requestOptions
              );
              
              this.setState({
                
                qty:1
              });
            } catch (e) {
              console.log(e);
            }
          }
        
        
        
      }	
    
    qtyIncrement(qty) {

        this.setState({
            qty: ++qty
        });

    }
    qtyDecrement(qty) {
        if (qty > 1) {
            this.setState({
                qty: --qty

            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row s_product_inner">
                    <div className="col-lg-6">
                        <div className="owl-carousel owl-theme s_Product_carousel">
                            <div className="single-prd-item">
                                <img className="img-fluid" src="/Assets/img/category/s-p1.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="s_product_text">
                            <h3>Test Product</h3>
                            <h2>Rs.3200</h2>
                            <ul className="list">
                                <li><a className="active" href="#"><span>Category</span> :Category 1</a></li>
                                <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                            </ul>
                            <p >Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                            something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
							during the winter.</p>

                            <div className="product_count">
                                <label for="qty">Quantity:</label>
                                <input type="text" name="qty" id="sst" size="2" maxlength="12" value={this.state.qty} title="Quantity:" className="input-text qty " />
                                <button id="up"
                                    class="increase " type="button"><i class="fas fa-angle-up" onClick={() => this.qtyIncrement(this.state.qty)}></i></button>
                                <button id="down"
                                    class="reduced " type="button"><i class="fas fa-angle-down" onClick={() => this.qtyDecrement(this.state.qty)}></i></button>

                            </div>
                            <button type="submit" id="addToCart" className="button primary-btn" onClick={this.handleSubmit}>Add to Cart</button>
                            <div className="card_area d-flex align-items-center">

                                <a className="icon_btn" href="#" title="Add to Wish List"><i class="fas fa-heart "></i></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }


}

export default ProductView