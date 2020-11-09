import React from 'react';
import LoadingSpinner from '../LoadingSpinner/loadingspinner';
import ErrorMessage from '../ErrorMessage/errormessage';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      isLoading: false,
      displayError: false
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  handleKeyPress = event => {
		if (event.key === 'Enter') {
			this.onSubmitSignIn();
		}
  }
  
  onSubmitSignIn = () => {
    this.setState({isLoading: true}, () => {
    fetch('https://quiet-savannah-29855.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          this.setState({ isLoading: false, displayError: true });
        }
      })
      .catch(err => {
        this.setState({ isLoading: false, displayError: true });
      })
    })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  onChange={this.onEmailChange}
                  onKeyPress={this.handleKeyPress} 
                  className="b pa2 input-reset ba bg-transparent" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  onChange={this.onPasswordChange} 
                  className="b pa2 input-reset ba bg-transparent" 
                  type="password" 
                  name="password"  
                  id="password" />
              </div>
            </fieldset>
            {this.state.isLoading ? (
              <LoadingSpinner />
            ) : (
              <div>
                <div className="">
                  <input 
                    onClick={this.onSubmitSignIn}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in" 
                  />
                </div>
                <div className="lh-copy mt3">
                  <p onClick={() => onRouteChange('signup')} className="f6 link dim black db underline">Sign Up Here!</p>
                </div>
              </div>
            )}
            {this.state.displayError ? <ErrorMessage /> : false}
        </main>
      </article>    
    );
  }
}

export default Signin;