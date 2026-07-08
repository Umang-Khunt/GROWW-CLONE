function Hero() {
    return ( <>
    
    <div className="cointaner  mb-5 pt-5 border" style={{backgroundColor:"#FAFAFA"}}>
        <div className="row">
            <div className="col-1"></div>
            <div className="col ">
        <h1>Support Portal</h1>
        </div>
        <div className="col-2">
            <button class="btn btn-outline-primary active" type="submit"> &nbsp; &nbsp; My tickets &nbsp; &nbsp;</button>
        </div>
        <div className="row">
            <div className="col-1"></div>
        <div className="col-10 mt-4 mb-4 pb-4">

        
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{height:"3rem"}}/>
       
      </form>
      </div></div>
    </div>
    </div>
    
    </> );
}

export default Hero;