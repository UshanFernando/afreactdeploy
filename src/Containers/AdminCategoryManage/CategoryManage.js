import React, { Component } from "react";
import Wrapper from "../../Hoc/Wrapper";
import CategoryList from "../../Layouts/CategoriesList/CategoriesList";
import Auth from '../../Authentication/Auth'

export class CategoryManage extends Component {
  constructor(props) {
    super(props);
    this.loadCategories = this.loadCategories.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.state = {
      categoryName: "",
      categories: null,
      cUpdateEn: false,
      cUpdateId: null,
    };
  }

  async componentDidMount() {
    this.loadCategories();
  }

  render() {
    return (
      <Wrapper>
        <div className="row">
          <div className="col-sm ">
            <h4 className="pt-4 ">Product Categories</h4>
            <div className="listScrollable">
              <CategoryList
                categories={this.state.categories}
                onDelete={this.deleteCategory}
                onUpdate={this.handleCategoryUpdate}
              />
            </div>
          </div>
          <div className="col-sm">
            <h4 className="pt-4 ">Add New Categories</h4>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Category Name"
              value={this.state.categoryName}
              onChange={this.categoryNameInputChange}
            />
            <br />
            <button
              onClick={
                this.state.cUpdateEn ? this.updateCategory : this.addCategory
              }
              className="button"
            >
              {this.state.cUpdateEn ? "Update" : "Add"}
            </button>
          </div>
        </div>
        <br />
        <hr className="mt-4 mb-4" />
      </Wrapper>
    );
    }
    
  categoryNameInputChange = (e) => {
    this.setState({ categoryName: e.target.value });
  };

  handleCategoryUpdate = (category) => {
    this.setState({
      cUpdateEn: true,
      cUpdateId: category._id,
      categoryName: category.name,
    });
  };

  async addCategory() {
    if (this.state.categoryName.trim() !== 0) {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json", "token": Auth.getToken() },
          body: JSON.stringify({ name: this.state.categoryName }),
        };
        await fetch("http://localhost:5000/admin/category", requestOptions);
        this.loadCategories();
        this.setState({
          categoryName: "",
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  async loadCategories() {
    try {
      const res = await fetch("http://localhost:5000/admin/category");
      const data = await res.json();
      //updateing state with lastest data
      this.setState({
        categories: data,
      });
    } catch (e) {
      //if failed to communicate with api this code block will run
      console.log(e);
    }
  }

  async deleteCategory(id) {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json","token": Auth.getToken() },
        body: JSON.stringify({ id: id }),
      };
      await fetch("http://localhost:5000/admin/category", requestOptions);
      this.loadCategories();
    } catch (e) {
      console.log(e);
    }
  }

  async updateCategory() {
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json","token": Auth.getToken() },
        body: JSON.stringify({
          id: this.state.cUpdateId,
          name: this.state.categoryName,
        }),
      };
      await fetch("http://localhost:5000/admin/category", requestOptions);
      this.loadCategories();
      this.setState({
        categoryName: "",
        cUpdateEn: false,
        cUpdateId: null,
      });
    } catch (e) {
      console.log(e);
    }
  }
}
export default CategoryManage;
