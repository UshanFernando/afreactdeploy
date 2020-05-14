import React from 'react'
import StoreManager from '../../Components/StoreManager/StoreManager'
    
 const CategoriesList =(props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th colSpan="2" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <StoreManager id={1} name="John Doe" email="gshshjh@hsj.com" />
                <StoreManager id={2} name="Sumdu Silva" email="dsdsds@hds.com" />
                <StoreManager id={3} name="Pawan Saranga"  email="rtsfdfhshjh@hsj.com" />
            </tbody>
        </table>
    )
}

export default CategoriesList
