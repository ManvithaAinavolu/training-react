 import React, { useEffect, useState } from 'react'
 
 interface Product{
  name:string,
  price:number
 }
 function Table() {
  const [productName,setproductName]=useState<string>('')
  const [productPrice,setproductPrice]=useState<number>(0)
  const [products,setProducts]=useState<Product[]>([])
  const [editName,setEditName]=useState<string | null>(null)
 
  const addProduct=()=>{
    const p=document.getElementById('p') as HTMLInputElement;
    if (productName === "" && productPrice === 0) {
      p.innerHTML = "Please enter a product name and price";
      return; 
    }
    const newProduct:Product={name:productName,price:productPrice};

    
    if(editName!==null){
      setProducts(products.map(product=>
        product.name === editName ? newProduct:product))
        setEditName(null)

     }
     else{
      setProducts([...products,newProduct]);

     }

    //... is a operator which is used to iterate over arrays where argument size is not expected
    //here products contains the list of products 
    //new product is object represneting the users new object
    //Therefore, [...products, newProduct] results in a new array that includes all the previous products followed by the new product.

    setproductName('');
    setproductPrice(0)


  }
  const editProduct=(product:Product)=>{
    setproductName(product.name)
    setproductPrice(product.price)
    setEditName(product.name)
    

  }

  const deleteProduct=(name:string)=>{
   return setProducts(products.filter((p)=>p.name !== name))
  }
  // setProducts([...products,delete_pro])
  // }

   return (
     <div>
     <input placeholder='enter product name' value={productName} onChange={(e)=>setproductName(e.target.value)}></input>
     <input type='number' placeholder='enter product price' value={productPrice} onChange={(e)=>setproductPrice(parseFloat(e.target.value))}/>
     <button onClick={addProduct}>Submit</button>
     <p id="p"></p>
     <table>
      <thead>
<tr>
  <th>Product Name</th>
  <th>Product Price</th>
  <th>Actions</th>
</tr>
      </thead>
      <tbody>
        
  {products.map((product,i)=>(
    <>
      <tr key={i}>
        <td>{product.name}</td>
        <td>{product.price}</td>
 
          <button onClick={()=>editProduct(product)}>Edit</button>
          <button onClick={()=>deleteProduct(product.name)}>Delete</button>

      </tr>


        </>
    ))}

      </tbody>
     </table>
       
     </div>
   )
 }
 
 export default Table
 