import React from 'react'




export default function ProductListItem(props) {


return <div>
<h3> { props.name} </h3>
<img height={100}
title ={props.name}
src={`/products/${props.image}`}/>
<div>{ props.description }</div>
<div>{ props.price }</div>
<div>
<button> Add to cart </button>
</div></div>


}
