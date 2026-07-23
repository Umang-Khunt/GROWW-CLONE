function Hero() {
    return ( <>
    
    <div className="container mt-5 pt-5 pb-5 mb-5">
        <div className="row text-center text-muted">
            <h1  >Charges</h1>
            <p className="fs-4 pt-2 pb-3" >List of all charges and taxes</p>
            <div className="col-1"></div>
            <div className="col mt-5">
                <img src="/media/images/pricing0.svg" width={"70%"} />
                <h2 className="pt-2 fs-3 ">Free equity delivery</h2>
                <p className="pt-3"> All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col mt-5">
                <img src="/media/images/intradayTrades.svg" width={"70%"} />
                <h2 className="pt-3 fs-3 ">Intraday and F&O trades</h2>
                <p className="pt-3"> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col mt-5">
                <img src="/media/images/pricing0.svg" width={"70%"} />
                <h2 className="pt-3 fs-3">Free equity delivery</h2>
                <p className="pt-3"> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
            <div className="col-1"></div>
        </div>
    </div>
    
    </> );
}

export default Hero;