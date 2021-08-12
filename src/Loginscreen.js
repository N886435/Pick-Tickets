import React, { Component } from 'react';
import Login from './Loginpage';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],    
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    
    this.setState({
                  loginscreen:loginscreen
                  
                    })
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>        
          
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Loginscreen;