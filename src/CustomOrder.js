import React from 'react'
import ImageDrop from './ImageUploader.js'


export default class CustomOrder extends React.Component{


render(){
  return(
<div><h1>Add a Photo for your custom order</h1>
<ImageDrop/>
</div>
  )
}


}
