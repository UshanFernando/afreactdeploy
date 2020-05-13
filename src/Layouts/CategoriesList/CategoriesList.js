import React from 'react'
import Categoty from '../../Components/Category/Category'
    
function CategoriesList() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                <Categoty id={1} name="Shoe" />
                <Categoty id={2} name="Dress"/>
                <Categoty id={3} name="Watch"/>
                <Categoty id={4} name="Beauty"/>
                
            </tbody>
        </table>
    )
}

export default CategoriesList
