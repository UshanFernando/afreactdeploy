import React from 'react'
import Categoty from '../../Components/Category/Category'
    
const CategoriesList = (props) => {
    let categoryRender = null;
    if (props.categories != null) {
        categoryRender = props.categories.map((category,index) => {
            return <Categoty id={index+1} name={category.name} key={category._id}/>
        })
    }
    return (
        <table className="table overflow-auto" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th colspan="3" scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                
                {categoryRender}
            </tbody>
        </table>
    )
}

export default CategoriesList
