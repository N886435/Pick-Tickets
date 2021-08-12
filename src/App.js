

import './App.css';
import './Loginpage.css'
import Login from './Loginpage';
import Popup from './Popup';
import React , { useState } from 'react';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  return <div>
    <div className="Login">    
       <Login/>
                  
               <footer className="footer" style= {{postion :'absolute'}}>      
               © 2022 Allscripts Healthcare, LLC and/or its affiliates. All Rights Reserved.       
                
                <input
      type="button"
      value="VIEW FULL NOTICE"
      style = {{height:'20px',fontSize:'12px',color:'blue',border:'none'}}
      onClick={togglePopup}/> 
    
    {isOpen && <Popup
      content={<>        
        <p style = {{textAlign:'left', fontSize:'12px'}} >
        <b style = {{fontSize:'20px'}} >Allscripts<sup>&reg;</sup> Pick Tickets</b><br/><br/>
        © 2022 Allscripts Healthcare, LLC and/or its affiliates. All Rights Reserved.       
        This software is the confidential and proprietary information of Allscripts Healthcare, 
        LLC and/or its affiliates (hereinafter "Allscripts Healthcare, LLC") 
        and is protected by trade secret and copyright law. This software 
        and all related rights are the exclusive property of Allscripts Healthcare, 
        LLC. All use, modification, reproduction, release, performance, 
        display and/or disclosure is governed by the license terms of Allscripts Healthcare, 
        LLC. Notice to U.S. Government Users: This medium and its contents constitute 
        "Commercial Computer Software" within the meaning of FAR 2.101 (November 2007), 
        FAR Part 12.212 (October 1995), FAR 27.405-3 (November 2007), DFARS Part 227.7202 
        (June 1995) and DFARS 252.227-7014 (a) (June 1995). Manufacturer is Allscripts
         Healthcare, LLC, 222 Merchandise Mart Plaza, Suite #2024, Chicago, IL 60654. 
         Allscripts® ERP Solutions is a trademark of Allscripts Healthcare, LLC. 
        </p>
        <div>
        <button style = {{textAlign:'center',alignContent:'center'}}onClick={togglePopup}>Close</button>
        </div>

      </>}
      
      
    />}
                
              </footer>
         </div>
    
  </div>
}
 
export default App;
