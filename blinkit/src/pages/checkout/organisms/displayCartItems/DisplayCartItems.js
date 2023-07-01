import React from 'react'
import './DisplayCartItems.module.css';

function DisplayCartItems({ displayCheckoutItems, cost}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                {
                    [...displayCheckoutItems].map(([value, key]) => (
                        <tr>
                            <td>{value} </td>
                            <td> {key} </td>
                        </tr>
                    ))
                }
                <tr>
                    <td>Total Cost</td>
                    <td> {cost} </td>
                </tr>
            </tbody>
        </table>
    )
}

export default DisplayCartItems