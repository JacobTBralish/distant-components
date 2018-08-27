import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buildLogin } from './Redux/reducer';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: ''
    };

    this.updateLoginName = this.updateLoginName.bind(this);
  }

  updateLoginName(name) {
    this.setState({ loginName: name })
  }

  render() {
    const { loggedInAs, isCreditCardHolder ,logIn } = this.props;

    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)} /> <button className="button" onClick={() => logIn(this.state.loginName)}>Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};
const getDataFromStoreAndPossiblyRenameIt = state => {
  return{
  loggedInAs: state.loggedInAs,
  isCreditCardHolder: state.isCreditCardHolder
  };
};

const mapDispatchToProps = {
  logIn: buildLogin,
}

// const mapStateToProps
//do it like this
// const loginConnector = connect(getDataFromStoreAndPossiblyRenameIt);
// const ConnectedLogin = loginConnector(Login);
// export default ConnectedLogin;

//or do it like this 
// const ConnectedLogin = connect(getDataFromStoreAndPossiblyRenameIt)(Login);
// export default ConnectedLogin;

//or like this
export default connect(getDataFromStoreAndPossiblyRenameIt, mapDispatchToProps)(Login);