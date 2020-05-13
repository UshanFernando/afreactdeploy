import React, { Component } from 'react'
import CategoryList from '../../Layouts/CategoriesList/CategoriesList'
import Banner from '../../Components/Banner/Banner'

class AdminPage extends Component {

    render() {
        return (
            <div>
                <Banner name="Administrator"
                    description="Manage Categories and Store Mangers" />
                <br/>
                <div className="container">
                    <h2>Manage Categories</h2>
                    <br />
                    <div className="row">
                        <div class="col-sm ">
                            <h4>Product Categories</h4>
                            <CategoryList/>
                        </div>
                        <div class="col-sm"><h4>
                            Add New Categories
                        </h4>
                            <input type="text" class="form-control" id="name" placeholder="Category Name" />
                            <br />
                            <button className="button">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPage
