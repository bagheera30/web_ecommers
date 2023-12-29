import React,{useState} from 'react'

const FormProduct = () => {
    const [productData,setProductData]=useState({
        name:"",
        deskripsi:"",
        image:"",
        price:0,
        quantity:0
    }
    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value });
      };
    
  return (
    <div>FormProduct</div>
  )
}

export default FormProduct