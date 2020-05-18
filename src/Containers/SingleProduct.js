import React, { useState, Component } from 'react'
import { render } from '@testing-library/react';

import CommentForm from '../Components/SingleProduct/CommentForm';
import CommentView from '../Components/SingleProduct/CommentView';
import ProductView from '../Components/SingleProduct/ProductView';






class SingleProduct extends Component {

	constructor(props) {
		super(props);
		this.category = React.createRef();
		this.manager = React.createRef();

		this.state = {
			count: 1,
			name: "",
			message: "",
			rating: 0,
			user: 0,
			tab: 3,
			qty:1,
			comments: null,
		};

	}

	handleProductTabs(num) {
		if (num == 1) {

		}
		this.setState({
			tab: num

		});
	}
	
	refreshComments = () => {
		this.refs.accessCommentView.loadComments();
	}

	render() {
		let tab;
		let tab_buttons;

		if (this.state.tab == 1) {


			tab_buttons = <ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className="nav-link active" onClick={() => this.handleProductTabs(1)} id="home-tab" data-toggle="tab" href role="tab" aria-controls="home" aria-selected="true">Overview</a>
				</li>
				<li className="nav-item">
					<a className="nav-item" onClick={() => this.handleProductTabs(2)} id="profile-tab" data-toggle="tab" href role="tab" aria-controls="profile"
						aria-selected="false">Specification</a>
				</li>

				<li className="nav-item">
					<a className="nav-item" onClick={() => this.handleProductTabs(3)} id="review-tab" data-toggle="tab" href role="tab" aria-controls="review"
						aria-selected="false">Reviews</a>
				</li>
			</ul>
			tab = <div className="" id="home" role="tabpanel" aria-labelledby="home-tab">
				<p id="Test"><h1>Moda Senula</h1></p>
			</div>
		} else if (this.state.tab == 2) {
			tab_buttons = <ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className="nav-link " onClick={() => this.handleProductTabs(1)} id="home-tab" data-toggle="tab" href role="tab" aria-controls="home" aria-selected="true">Overview</a>
				</li>
				<li className="nav-item active">
					<a className="nav-link active" onClick={() => this.handleProductTabs(2)} id="profile-tab" data-toggle="tab" href role="tab" aria-controls="profile"
						aria-selected="false">Specification</a>
				</li>

				<li className="nav-item ">
					<a className="nav-link" onClick={() => this.handleProductTabs(3)} id="review-tab" data-toggle="tab" href role="tab" aria-controls="review"
						aria-selected="false">Reviews</a>
				</li>
			</ul>

			tab = <div className=" " id="profile" role="" aria-labelledby="">
				<div className="table-responsive">
					<table className="table">
						<tbody>

							<tr>
								<td>
									<h5></h5>
								</td>
								<td>
									<h5></h5>
								</td>

							</tr>



							<tr>
								<td>
									<h5>Each Box contains</h5>
								</td>
								<td>
									<h5>60pcs</h5>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>



		} else {
			tab_buttons = <ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className="nav-link " onClick={() => this.handleProductTabs(1)} id="home-tab" data-toggle="tab" href role="tab" aria-controls="home" aria-selected="true">Overview</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" onClick={() => this.handleProductTabs(2)} id="profile-tab" data-toggle="tab" href role="tab" aria-controls="profile"
						aria-selected="false">Specification</a>
				</li>

				<li className="nav-item ">
					<a className="nav-link active" onClick={() => this.handleProductTabs(3)} id="review-tab" data-toggle="tab" href role="tab" aria-controls="review"
						aria-selected="false">Reviews</a>
				</li>
			</ul>

			tab = <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
				<div className="row">
					<CommentView ref="accessCommentView" />
					<CommentForm refComments={this.refreshComments} />
				</div>
			</div>
		}


		return (
			<div>
				<section className="blog-banner-area" id="blog">
					<div className="container h-100" >
						<div className="blog-banner">
							<div className="text-center">
								<h1>Shop Single</h1>

								<nav aria-label="breadcrumb" className="banner-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><a href="#">Home</a></li>

										<li className="breadcrumb-item active" aria-current="page">Shop Single</li>

									</ol>
								</nav>
							</div>
						</div>
					</div>
				</section>


				<div className="toast m-5 alert alert-success shadow " id="myToast" data-delay="5000">
					<div className="toast-header">
						<img src="img/bell.png" width="20px" className="rounded mr-2" alt="..." />
						<strong className="mr-auto"> </strong>
						<button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="toast-body">
						<strong className="" >Your order has aded to the <a href="cart.php">CART</a> Successfully! </strong>
					</div>
				</div>


				<div className="product_image_area" id="cartToast">
					<ProductView/>
				</div>


				<section className="product_description_area">
					<div className="container" >
						{tab_buttons}
						<div className="tab-content" id="myTabContent">
							{tab}



						</div>
					</div>
				</section>

				<section className="related-product-area section-margin--small mt-0">
					<div className="container">
						<div className="section-intro pb-60px">
							<p>Popular Item in the market</p>
							<h2>Top <span className="section-intro__style">Product</span></h2>
						</div>
						<div className="row mt-30">
							<div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
								<div className="single-search-product-wrapper">
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-1.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-2.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-3.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
								<div className="single-search-product-wrapper">
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-4.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-5.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-6.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
								<div className="single-search-product-wrapper">
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-7.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-8.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-9.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
								<div className="single-search-product-wrapper">
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-1.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-2.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
									<div className="single-search-product d-flex">
										<a href="#"><img src="img/product/product-sm-3.png" alt="" /></a>
										<div className="desc">
											<a href="#" className="title">Gray Coffee Cup</a>
											<div className="price">$170.00</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>



			</div>
		)
	}
}


export default SingleProduct