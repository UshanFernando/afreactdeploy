import React from 'react'
import Categoty from '../../Components/Category/Category'
    
const CategoriesList = () =>{
    return (
        <table className="table overflow-auto" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th colspan="3" scope="col">Name</th>
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
