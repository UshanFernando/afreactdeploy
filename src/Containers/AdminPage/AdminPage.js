import React, { Component } from "react";
import CategoryList from "../../Layouts/CategoriesList/CategoriesList";
import StoreManagersList from "../../Layouts/StoreMangersList/StoreManagersList";
import RegisterNewStoreManager from "../../Layouts/RegisterNewStoreManager/RegisterNewStoreManager";
import Banner from "../../Components/Banner/Banner";
import "./AdminPage.css";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Banner
          name="Administrator"
          description="Manage Categories and Store Managers"
        />

        <div className="container pt-4">
          <div className="row centered">
            <div className="card col-sm border-success m-3 analytic">
              <div className="card-body text-success text-center">
                <h4>
                  <i className="fa fa-users" aria-hidden="true"></i>
                </h4>
                <h6 className="card-title">No Of Registered Users</h6>
                <h4 className="display-4">21</h4>
              </div>
            </div>

            <div className="card col-sm border-info m-3 analytic">
              <div className="card-body text-success text-center">
                <h4>
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                </h4>
                <h6 className="card-title">No Of Products</h6>
                <h4 className="display-4">21</h4>
              </div>
            </div>
            <div className="card col-sm border-warning m-3 analytic">
              <div className="card-body text-success text-center">
                <h4>
                  <i className="fa fa-tags" aria-hidden="true"></i>
                </h4>
                <h6 className="card-title">No Of Categories</h6>
                <h4 className="display-4">21</h4>
              </div>
            </div>
            <div className="card col-sm border-danger m-3 analytic">
              <div className="card-body text-success text-center">
                <h4>
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                </h4>
                <h6 className="card-title">No Of Store Managers</h6>
                <h4 className="display-4">21</h4>
              </div>
            </div>
          </div>
          <h2 className="pt-4">Manage Categories</h2>
          <div className="row">
            <div className="col-sm ">
              <h4 className="pt-4 ">Product Categories</h4>
              <div className="listScrollable">
                <CategoryList />
              </div>
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

          <h4 className="pt-4">Register New Store Managers</h4>
          <RegisterNewStoreManager />

          <h4 className="pt-4">Registered Store Managers</h4>
          <div className="listScrollable">
            <StoreManagersList />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
