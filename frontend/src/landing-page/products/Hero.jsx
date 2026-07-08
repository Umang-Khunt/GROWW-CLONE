import {Link} from 'react-router-dom'
function Hero() {
    return (<>
        <div className="text-center mt-5 pt-5 pb-5">
            
                <h1 className="mb-3 fs-3 " >Zerodha Products</h1>
                <h2 className="fs-4 mb-3" >Sleek, modern, and intuitive trading platforms</h2>
                <p className='mb-5 pb-2' >Check out our <Link style={{textDecoration:"none"}} >investment offerings →</Link></p>
                
        </div>
    </>  );
}

export default Hero;