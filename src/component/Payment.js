import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Payment = () => {

    const navigate = useNavigate();
  return (
    <>
    <div className='Payment'>
    <img src='/images/Frame 1.png'/>
    <h2>HCM</h2>
    </div>
    <div className='Paydetail' style={{paddingTop: '20px'}}>
    <div class="row ">
    <div class="col-lg-8 col-md-8 col-12">
        <div className='block8' >
        <h3 style={{ fontSize: '20px', fontWeight: '500', lineHeight: '140%' }}>Select Payment Method</h3>
        <div class="form-check pcheck">
                        <input class="form-check-input" type="checkbox" style={{marginLeft: '5px'}} />
                        <label class="form-check-label" for="flexCheckDefault" style={{marginLeft: '35px', fontFamily: 'Objectivity'}} >
                        PayPal
                        </label>
                      </div>
                      <div className='Pcomplete'>
                      <div class="form-check" >
                        <input class="form-check-input" type="checkbox" style={{marginLeft: '-5px', marginTop: '15px'}} />
                        <label class="form-check-label" for="flexCheckDefault" style={{marginLeft: '25px', marginTop: '10px', fontFamily: 'Objectivity'}} >
                        Credit or Debit Card
                        </label>
                      </div>
                  <div className="crdnum" style={{marginLeft: '25px', marginTop: '10px'}}>
                  <label style={{fontFamily: 'Objectivity'}}>Card Number</label>
                         <input type="text" style={{width: '397px',  height: '44px', padding: '12px 16px', borderRadius: '12px', background: '#F4FAFE' }} className="form-control"  required />
                  </div>

                  <div className='expinfo' style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
                    <h3>Expiry Date </h3> 
                    <h3 style={{marginRight: '130px'}}>CVV </h3>    
                  </div>

                  <div className='Drops' style={{display: 'flex', marginLeft: '25px'}}>
                    <select style={{width: '30%', borderRadius: '8px', background: '#F4FAFE'}}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <select  style={{width: '30%', background: '#F4FAFE',  borderRadius: '8px', margin: '0px 10px'}}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <input type="text"  className="form-control"  style={{width: '12%', background: '#F4FAFE', borderRadius: '8px'}}/>
                  </div>

                  <div className='singledrop' style={{marginTop: '10px'}}>
                  <h3>Country Of Region </h3> 
                  {/* <label style={{fontFamily: 'Objectivity', marginLeft:'20px'}}>Country Of Region</label> <br/> */}
                  <select  style={{width: '75%', height: '44px', background: '#F4FAFE',  borderRadius: '8px', marginLeft:'20px'}}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                  </div>

                  <div className="" style={{maxWidth: '77%', marginTop: '10px'}}>
    <div className="row" >
        <div className="col-md-6" >
            <div className="form-group">
            <h3>State/Province </h3> 
            <select  style={{width: '100%', height: '44px', background: '#F4FAFE',  borderRadius: '8px', marginLeft:'20px'}}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
            <h3>Zip/Postal </h3> 
            <select  style={{width: '100%', height: '44px', background: '#F4FAFE',  borderRadius: '8px', marginLeft: '10px'}}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
        </div>
    </div>
</div>
                      </div>
                      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-12">
        <div className='scndpay'>
        <h3 style={{ fontSize: '20px', fontWeight: '500', lineHeight: '140%' }}> Summary </h3>
        <div className='expinfo' style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
                    <h3>Standard Package    <p>Professional <br/> 5 Agents</p>  </h3> 
                    <h3 style={{marginRight: '10px'}}>$456/mon </h3>    
                  </div>

                  <hr style={{width: '80%', margin: 'auto'}}/>
       
                  <div className='expinfo' style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
                    <h3> SubTotal <br/>  Apply Promo Code </h3> 
                    <h3 style={{marginRight: '10px'}}>$495/mon  <p>x12 months</p>  </h3>    
                  </div>
                                                
                  <div className='expinfo' style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                  <h3> Your Saving  <br/>  Annual Saving </h3> 
                    <h3 style={{marginRight: '10px'  , marginTop: '20px'}}> -$1560/yr  </h3>    
                  </div>
                  <hr style={{width: '80%', margin: 'auto'}}/>

                  <div className='expinfo' style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                    <h3>Total   <p> Billed Annually</p>  </h3> 
                    <h3 style={{marginRight: '10px'}}> <span style={{marginLeft: '40px'}}>$5.940/yr </span>   <p> + taxes and  fees</p> </h3>    
                  </div>

                  <div class="form-check" >
                        <input class="form-check-input" type="checkbox" style={{marginLeft: '-5px',}} />
                        <label class="form-check-label" for="flexCheckDefault" style={{marginLeft: '25px', fontFamily: 'Objectivity'}} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        </label>
                      </div>
        </div>
    </div>

    <div className='Footer' style={{display: 'flex',  alignItems: 'center',justifyContent: 'space-between', marginBottom: '10px'}}>
        <button onClick={() => navigate("/Pricing")} style={{background: '#0A8AFC', color: '#fff', borderRadius: '10px', padding: '8px 16px', marginLeft: '40px'}}>  Back </button>
        <button onClick={() => navigate("/Organization")} style={{background: '#0A8AFC', color: '#fff', borderRadius: '10px', padding: '8px 16px', marginRight: '40px' }}> Complete Purchase</button>
    </div>
  </div>
    </div>
    </>
  )
}

export default Payment
