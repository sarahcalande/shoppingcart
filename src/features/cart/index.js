import React from 'react'
import { connect } from 'react-redux'

function sort(items) {
  return items.sort((a, b) => a.id < b.id)
}


function Cart(props) {
  return <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
      sort(props.cart).map(item => <tr>
      <td>{item.name}</td>
        <td>{item.quantity}</td>
          <td>
        <button onClick={(e)=> props.addToCart(item)}>+</button>
        <button onClick={(e)=> props.removeFromCart(item)}>-</button>
          </td>
              <td>
        <button onClick={(e)=> props.removeAllFromCart(item)}>Clear Cart</button>
              </td></tr>
    )
    }
    </tbody></table>
}


function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

//
// export const cartItemsWithQuantity = (cartItems) => {
//   return cartItems.reduce((acc, item) => {
//     const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
//     filteredItem !== undefined
//     ? filteredItem.quantity++
//     : acc.push({...item, quantity: 1,})
//     return acc
//   }, [])
// }

// cartItems = [
//   {
//     id: 1,
//   },
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   }
// ]
//
// acc = [
//   {
//     id: 1,
//     quantity: 1
//   }
// ]
//
//
// // quantity++
//
// else acc.push({...item, quantity: 1})
