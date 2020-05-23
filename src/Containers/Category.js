import React, { Component } from 'react'


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverAdd: "http://localhost:5000/",
            categories: [],
            search:"",
            products: []
        };
        this.loadCategories = this.loadCategories.bind(this);
        this.loadProducts = this.loadProducts.bind(this);

    }
    async componentDidMount() {
        this.loadCategories();
        this.loadProducts();
    }
    async loadCategories() {
        try {
            const res = await fetch("http://localhost:5000/category/category");
            const categories = await res.json();

            //updateing state with lastest data
            this.setState({
                categories: categories,
            });

        } catch (e) {
            //if failed to communicate with api this code block will run
            console.log(e);
        }

    }
    async loadProducts(catName) {
        
        try {
        if(catName!=null){
            const res = await fetch("http://localhost:5000/category/category/"+catName);
            const products = await res.json();
            console.log(products);
            //updateing state with lastest data
            this.setState({
                products: products
            });
        }else{
            const res = await fetch("http://localhost:5000/storemanger/products/");
            const products = await res.json();
            console.log(products);
            //updateing state with lastest data
            this.setState({
                products: products
            });
        }
        } catch (e) {
            //if failed to communicate with api this code block will run
            console.log(e);
        }

    }
    handleChange(event) {
        const val = event.target.value;
       
          this.setState({
            search: val
          })
       
      }
      async handleSubmit(event) {
        event.preventDefault();
        const val = this.state.search;
        const res = await fetch("http://localhost:5000/category/search/"+val);
        const products = await res.json();
          this.setState({
            products: products
          })
          this.loadProducts();
       
      }

    render() {
        let categoryList;
        let productList;
        if (this.state.categories != null) {
            categoryList = this.state.categories.map((cat, index) => {
                return (
                    <li key={cat._id} class="filter-list"><input onClick={() => this.loadProducts(cat.name)} class="pixel-radio cat" type="radio" id="" name="brand" /><label for="footwear">{cat.name}<span></span></label></li>
                )

            })
        }
        if (this.state.products != null) {
            productList = this.state.products.map((prd, index) => {
                return (
                    <div class="col-4 col-sm-6 col-md-6 col-lg-3">
                        <div >
                            <div class="card text-center card-product  zoom" >
                                <a href=""></a>
                                <div class="card-product__img">
                                    <img prdImage class="card-img" src={this.state.serverAdd+prd.productImage} alt={this.state.serverAdd+prd.productImage} />

                                    <ul class="card-product__imgOverlay">
                                        <li><button ><i class="ti-search"></i></button></li>
                                        <li><button><i class="ti-shopping-cart"></i></button></li>
                                        <li><button><i class="ti-heart"></i></button></li>
                                    </ul>
                                </div>

                                <div class="card-body p-0 m-0">
                                   
                                        <h4 class="card-product__title p-0 m-0"><a href="" >{prd.productname}</a></h4>
                                        <p class="card-product__price p-0 m-0">Rs.{prd.price}</p>
                                        <p class="card-product__price p-0 m-0">{prd.discount}% Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })
        }
        return (
            <div>
                <section class="blog-banner-area" id="category">
                    <div class="container h-100">
                        <div class="blog-banner">
                            <div class="text-center">
                                <h1>Shop Category</h1>
                                <nav aria-label="breadcrumb" class="banner-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Shop Category</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>




                <section class="section-margin--small mb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-5">
                                <div class="sidebar-categories">
                                    <div class="head">Browse Categories</div>
                                    <ul class="main-categories">
                                        <li class="common-filter">
                                            <form action="#">
                                                <ul>
                                                    {categoryList}
                                                </ul>
                                            </form>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="col-xl-9 col-lg-8 col-md-7">

                                <div class="filter-bar d-flex flex-wrap align-items-center">
                                    <div class="sorting">
                                        {/* <select class="sortItems">
                                            <option value="1">Popularity</option>
                                            <option value="2">Price low to high</option>
                                            <option value="3">Price high to low</option>
                                        </select> */}
                                    </div>
                                    <div class="sorting mr-auto">
                                        {/* <select class="limitItems">
                                            <option value="12">Show 12</option>
                                            <option value="24">Show 24</option>
                                        </select> */}
                                    </div>
                                    <div>
                                        <form onSubmit={(event) => this.handleSubmit(event)}>
                                        <div class="input-group filter-bar-search">
                                            
                                            <input type="text" placeholder="Search" onChange={(event) => this.handleChange(event)} value={this.state.search} required/>
                                            <div class="input-group-append">
                                                <button type="submit"><i class="ti-search"o></i></button>
                                            </div>
                                            
                                        </div>
                                        </form>
                                    </div>
                                </div>
                                <section class="lattest-product-area pb-40 category-list">

                                <div id="selling_cat">
                                <div class="row" >
                                        {productList}
                                </div>
                                </div>
                                        </section>


                            </div>

                        </div>
                    </div>

                </section>
            </div >

        )
    }






}




export default Category












