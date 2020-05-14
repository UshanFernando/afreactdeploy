import React, { Component } from "react";
import CategoryList from "../../Layouts/CategoriesList/CategoriesList";
import StoreManagersList from "../../Layouts/StoreMangersList/StoreManagersList";
import RegisterNewStoreManager from "../../Layouts/RegisterNewStoreManager/RegisterNewStoreManager";
import Banner from "../../Components/Banner/Banner";
import "./AdminPage.css";
import SiteOverviewAdmin from "../../Components/SiteOverviewAdmin/SiteOverviewAdmin";
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
    this.manager = React.createRef();
  }

  render() {
    return (
      <div>
        <Banner
          name="Administrator"
          description="Manage Categories and Store Managers"
          admin={true}
          scrollAdminCategories={this.scrollToCategories}
          scrollAdminManagers={this.scrollToManagers}
        />
        <br />
        <div className="container pt-4">
          <SiteOverviewAdmin />
          <br />
          <h2 ref={this.category} className="pt-4 mt-4">
            Manage Categories
          </h2>
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
          <br/>
          <hr className="mt-4 mb-4"/>

          <h2 ref={this.manager} className="pt-4 mt-4">
            Manage Store Managers
          </h2>

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

  scrollToCategories = () =>
    window.scrollTo(0, this.category.current.offsetTop-100);
  scrollToManagers = () => window.scrollTo(0, this.manager.current.offsetTop-100);
}

export default AdminPage;
