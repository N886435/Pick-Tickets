import React, {Component} from "react";
import logo from './allscripts_login.png';
import './App.css';
import './Loginpage.css'

class Login extends Component { 
    constructor(props){
      super(props);
      this.state={
      username:'',
      password:''
      }      
     }
     
    render() {
        return (
          <div>          
              <div className = "Login-container" style={{ background:  'linear-gradient(to right,  #02272e 0%,#02272e 100%)' }}>
                <h1>
               <img src={logo} className="Login-logo" alt="logo" /> </h1>
               <br/>
               <br/>
               <div className="hr" style={{width: '20%',height:'20px'}}><hr /></div>    
                <label>Pick Tickets</label>     
                <br/>    
                <br/>    
                    <form>
                      <input type='text'  placeholder ="Username" />                   
                      <input type='password' placeholder ="Password"   />
                      <button type='submit' >Sign In</button>
                    </form>
                    <br/>
                    <address>
                    Problems with your sign in? Please contact your system administrator via email at  
                    <a href="mailto:admin@hospital.com">admin@hospital.com</a>
                    or call (800)888-8888.
                    </address>  
                    <br/>      

                         
              </div>        
            <h5 className="h5" > Version 2022.1</h5>        
            
          </div>
          
        );
      }
    }
    
    export default Login;