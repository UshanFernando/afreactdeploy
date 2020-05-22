import React, { Component } from 'react';



class WishListTable extends Component {

    render() {
        return (
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
                
            </div>
        )

    }
}

export default WishListTable