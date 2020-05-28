import React, { Component } from "react";
import { AuthTemplate } from "../../templates";
import { LoginContent } from "../../components/organisms";

class Login extends Component {
  componentWillUnmount() {
    console.log("COMPONENTE HOME SENDO DESMONTADO!");
  }

  render() {
    console.log(this.props.match.params);

    return (
      <AuthTemplate>
        <LoginContent />
      </AuthTemplate>
    );
  }
}

export default Login;
