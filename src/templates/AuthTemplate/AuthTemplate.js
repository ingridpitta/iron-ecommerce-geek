import React, { Component } from "react";
import { Layout, Link } from "./AuthTemplate.style";
import "./AuthTemplate.style";
const { Content } = Layout;

class AuthTemplate extends Component {
  state = {};

  // componentDidMount() {
  //   console.log("DID MOUNT DO GENERAL TEMPLATE CHAMADO!!");
  // }

  render() {
    return (
      <Layout>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AuthTemplate;
