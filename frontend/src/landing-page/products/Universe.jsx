import ProductCard from "./ProductCard";

function Universe() {
    return ( <>
    <div className="container">
        <div className="row text-center">
            <h1 className="fs-3" >The Zerodha Universe</h1>
            <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-1"></div>
        <div className="col">

         <ProductCard productImage="media/images/zerodhaFundhouse.png" productDescription="Our asset management venture
that is creating simple and transparent index funds to help you save for your goals." />
         <ProductCard productImage="/media/images/streakLogo.png" productDescription="Systematic trading platform
that allows you to create and backtest strategies without coding."/>
        </div>
        <div className="col">
            <div className="pt-4"></div>
            <ProductCard productImage="/media/images/sensibullLogo.svg" productDescription="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DIl, and more."/>
           
           <ProductCard productImage="/media/images/smallcaseLogo.png" productDescription="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."/>
        </div>
        <div className="col">
            <ProductCard productImage="media/images/tijori.svg" productDescription="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."/>
            
            <ProductCard productImage="/media/images/dittoLogo.png" productDescription="Personalized advice on life and health insurance. No spam and no mis-selling."/>
        </div>
        <div className="col-1"></div>
        
    </div>
    <button className="btn btn-primary text-center mt-5 d-block mx-auto" style={{width:"12rem"}} >Signup for free</button>
    </div>
    </> );
}

export default Universe;