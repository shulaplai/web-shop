import React from 'react'
import Grid from "@material-ui/core"

const products = [
    {id:1, name :'shoes', description:'shoes'},
    {id:2, name :'Mac book', description: 'Apple Macbook'},

]
const Products =()=> {
<main>
    <Grid container justify ="center" spacing ={4}>
        {products.map((product) => (
            <Grid item key= {product.id} xs={12} sm={6} md={4} lg={3} >
              <Products />
            </Grid> ))}
    </Grid>
</main>
}

export default Products