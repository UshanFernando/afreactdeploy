import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class ProductTableRow extends Component {
    render() {
        return(
        <tr>
            <td>
                Product Name
            </td>

            <td>
                Product Price
            </td>
            <td>
                Discount
            </td>

            <td>
                Description
            </td>


        </tr>
        );
    }


}
export default ProductTableRow;