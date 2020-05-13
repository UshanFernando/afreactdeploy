import React from 'react'

function Category(props) {
    return (

        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td><button className="btn btn-primary btn-sm">
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <span> Edit</span></button></td>
            <td><button className="btn btn-danger btn-sm">
                <i className="fa fa-trash" aria-hidden="true"></i>
                <span> Delete</span>
            </button></td>
        </tr>

    )
}

export default Category
