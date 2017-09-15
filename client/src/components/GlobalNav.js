import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Nav = styled.div`
font-family: 'Fjalla One', sans-serif;
  width: 95%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: rgba(0,0,0,.7);
  box-shadow: 0px 1px 6px black;
  a{
    text-decoration: none;
    margin: 0 5px;
    &:visited{
      color: white;
    }
  }
`
class GlobalNav extends Component {
    constructor() {
        super();
        this.state = {
          user: {},
          loggedIn: false
        };
      }
    
      componentWillMount() {
        this._isLoggedIn();
      }
      componentWillReceiveProps() {
        this._isLoggedIn();
      }
    
      _isLoggedIn = async () => {
        const res = await axios.get("/auth/validate_token");
        this.setState({
          user: res.data.data,
          loggedIn: res.data.success
        });
      };
      
      _logOut = async () => {
        console.log("CLICK");
        const response = await axios.delete("/auth/sign_out");
        //Forces refresh of browser
        // window.location.reload();
      };
    
        render(){
        if (this.state.loggedIn) {
            return (
                <Nav>
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                    <div>
                        <span>Signed In As: {this.state.user.email}</span>
                        <a href="/" onClick={this._logOut}> Log Out </a>
                    </div>
                </Nav>
                
            )
        }
        return (
        <Nav>
            <Link to="/">
              <h1>Home</h1>
            </Link>
            <div>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
        </Nav>
        );
    }
}
export default GlobalNav;