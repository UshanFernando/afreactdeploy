import React, { Component } from "react";
import CategoryList from "../../Layouts/CategoriesList/CategoriesList";
import StoreManagersList from "../../Layouts/StoreMangersList/StoreManagersList";
import RegisterNewStoreManager from "../../Layouts/RegisterNewStoreManager/RegisterNewStoreManager";
import Banner from "../../Components/Banner/Banner";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <Banner
          name="Administrator"
          description="Manage Categories and Store Managers"
        />

        <div className="container pt-4">
          <h2 className="pt-4">Manage Categories</h2>
          <div className="row">
            <div className="col-sm ">
              <h4 className="pt-4 ">Product Categories</h4>
              <CategoryList />
            </div>
            <div className="col-sm">
              <h4 className="pt-4 ">Add New Categories</h4>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Category Name"
              />
              <br />
              <button className="button">Add</button>
            </div>
          </div>
          <hr />
          <h2 className="pt-4">Manage Store Managers</h2>
          <h4 className="pt-4">Registered Store Managers</h4>
          <StoreManagersList />

          <h4 className="pt-4">Register New Store Managers</h4>
          <RegisterNewStoreManager />
        </div>
      </div>
    );
  }
}

export default AdminPage;
