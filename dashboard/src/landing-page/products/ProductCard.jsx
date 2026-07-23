function ProductCard({productImage,productDescription}) {
    return ( <>
    <div className="container text-center mt-5 pb-3 pt-2 pe-4">
           <img src={productImage} width={"60%"} />
            <p className="pt-3 text-muted" style={{fontSize:"0.8rem",lineHeight:"1.3rem"}} >{productDescription}</p>
        </div>   
  
    </> );
}

export default ProductCard;