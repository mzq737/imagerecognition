import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://quiet-savannah-29855.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
      }
    })
  }

  render() {
    return (
      <article className="pa4 black-80">
        {/* <form action="sign-up_submit" method="get" acceptCharset="utf-8"> */}
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
              <input
                onChange = {this.onNameChange} 
                className="b pa2 input-reset ba bg-transparent" 
                type="text" 
                name="name"  
                id="name" 
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
              <input
                onChange = {this.onEmailChange} 
                className="b pa2 input-reset ba bg-transparent" 
                type="email" 
                name="email-address"  
                id="email-address" 
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
              <input 
                onChange = {this.onPasswordChange}
                className="b pa2 input-reset ba bg-transparent" 
                type="password" 
                name="password"  
                id="password" 
              />
            </div>
          </fieldset>
          <div className="mt3">
            <input 
              onClick={this.onSubmitSignIn} 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
              type="submit" 
              value="Sign Up" 
            />
          </div>
      </article>
    );
  }
  
}

export default SignUp;