function Brokrage() {
    return ( <>
    
    <div className="container mt-5 pt-3">
        <div className="row">
        
            <div className="col-8">
                <h1 className="text-center fs-3 mt-5 pb-4 text-primary"  >Brokerage calculator</h1>
                <ul style={{lineHeight:"2.2rem",fontSize:"0.9rem"}}>
                    <li> Call & Trade and RMS auto-squareoff: Additional charges of 250 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or 2100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
                </ul>
            </div>
            <div className="col-4">
                <h1 className="text-center fs-3 mt-5 pb-4 text-primary" >List of charges</h1>
            </div>
          
        </div>
    </div>
    
    </> );
}

export default Brokrage;