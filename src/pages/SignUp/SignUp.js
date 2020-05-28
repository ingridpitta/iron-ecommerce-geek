import React, { Component } from "react";
import { AuthTemplate } from "../../templates";
import { SignUpContent } from "../../components/organisms";

class SignUp extends Component {
  componentWillUnmount() {
    console.log("COMPONENTE HOME SENDO DESMONTADO!");
  }

  render() {
    console.log(this.props.match.params);

    return (
      <AuthTemplate>
        <SignUpContent />
      </AuthTemplate>
    );
  }
}

export default SignUp;
