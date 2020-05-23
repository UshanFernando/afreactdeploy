import React, { Component } from 'react'


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:""
        };


    }

    render() {
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
                                                    <li class="filter-list"><input class="pixel-radio cat" type="radio" id="" name="brand" value="2" /><label for="men">Men<span> (3600)</span></label></li>
                                                    <li class="filter-list"><input class="pixel-radio cat" type="radio" id="" name="brand" value="1" /><label for="women">Women<span> (3600)</span></label></li>
                                                    <li class="filter-list"><input class="pixel-radio cat" type="radio" id="" name="brand" /><label for="accessories">Accessories<span> (3600)</span></label></li>
                                                    <li class="filter-list"><input class="pixel-radio cat" type="radio" id="" name="brand" /><label for="footwear">Footwear<span> (3600)</span></label></li>
                                                    <li class="filter-list"><input class="pixel-radio cat" type="radio" id="" name="brand" /><label for="bayItem">Bay item<span> (3600)</span></label></li>
                                                    <li class="filter-list"><input class="pixel-radio cat" type="radio" id="" name="brand" /><label for="electronics">Electronics<span> (3600)</span></label></li>
                                                    <li class="filter-list"><input class="pixel-radio cat" type="radio" id="" name="brand" /><label for="food">Food<span> (3600)</span></label></li>
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
                                        <div class="input-group filter-bar-search">
                                            <input type="text" placeholder="Search" />
                                            <div class="input-group-append">
                                                <button type="button"><i class="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="selling_cat">
                                    <div class="col-4 col-sm-6 col-md-6 col-lg-3">
                                        <div >
                                            <div class="card text-center card-product  zoom" >
                                                <a href=""></a>
                                                    <div class="card-product__img">
                                                        <img class="card-img" src="" alt="ss" />
                    
                                                    <ul class="card-product__imgOverlay">
                                                        <li><button ><i class="ti-search"></i></button></li>
                                                        <li><button><i class="ti-shopping-cart"></i></button></li>
                                                        <li><button><i class="ti-heart"></i></button></li>
                                                    </ul>
                                                </div>

                                                <div class="card-body p-0 m-0">
                                                    <a href="">
                                                        <h4 class="card-product__title p-0 m-0"><a href="" ></a></h4>
                                                        <p class="card-product__price p-0 m-0">Rs.</p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                 
            </section>
        </div >

        )
    }






}




export default Category












