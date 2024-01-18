import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css";


const Pricing = () => {

    const navigate = useNavigate();
  return (
        <>
        <div className='container' style={{width: ' 100%', height: '115vh',}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
      <h2 style={{ color: '#0A8AFC', fontSize: '50px', fontWeight: '700'}}> Pick A Plan That's <br/> <span style={{marginLeft: '35px'}}> Right For You </span></h2>
    </div>
    <div className='pricebtn' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px',}}>
        <button style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', border: '1px solid #0A8AFC'}}>Monthly</button>
        <button style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px',  border: '1px solid #0A8AFC'}}> Yearly </button>
    </div>
    <div class="row" style={{marginTop: '20px'}}>
            <div class="col-lg-4 col-md-4 col-sm-12 Cards ">
                <div class="" >
                    <div class="pricing">
                  <button class="btncard"> Basic </button>
                  <h2 class="headingcard">$19</h2>
                  <p class="cardpara">Per member, per Month</p>
                 
                </div>
          
                    <div class="pricecard">
                    <hr style={{width: '180%'}}/>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckDefault">
                          All Limited Links
                        </label>
                      </div>
                    
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckChecked">
                          Up to 10Blocks
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckDefault">
                          Chat Support
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckChecked">
                          API Integrations
                        </label>
                      </div>
                    </div>
                    <div class="pricebutton">
                      <button  onClick={() => navigate("/Payment")}>Choose Plan</button>
                      </div>
                  </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-12 Cards midtwo ">

                <div class="cards" >
                    <div class="pricing">
                  <button class="btncard"> Standard </button>
                  <h2 class="headingcard" >$99</h2>
                  <p class="cardpara">Per member, per Month</p>
                 
                </div>
               
                    <div class="pricecard">
                    <hr style={{width: '180%'}}/>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckDefault">
                          All Limited Links
                        </label>
                      </div>
                    
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckChecked">
                          Up to 10Blocks
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckDefault">
                          Chat Support
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckChecked">
                          API Integrations
                        </label>
                      </div>
                    </div>
                    <div class="pricebutton">
                      <button  onClick={() => navigate("/Payment")}>Choose Plan</button>
                      </div>
                  </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 Cards ">
                <div >
                    <div class="pricing">
                  <button class="btncard"> Pro </button>
                  <h2 class="headingcard">$199</h2>
                  <p class="cardpara">Per member, per Month</p>
                 
                </div>
               
                    <div class="pricecard">
                    <hr style={{width: '180%'}}/>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckDefault">
                          All Limited Links
                        </label>
                      </div>
                    
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckChecked">
                          Up to 10Blocks
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckDefault">
                          Chat Support
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class="form-check-label" for="flexCheckChecked">
                          API Integrations
                        </label>
                      </div>
                    </div>
                    <div class="pricebutton">
                      <button onClick={() => navigate("/Payment")}>Choose Plan</button>
                      </div>
                  </div>
            </div>
        </div>
    </div>




   






    </>
    
  )
}

export default Pricing
