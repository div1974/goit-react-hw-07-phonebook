import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../redux/contacts/contactsOperations";
import App from "./App";

class AppContainer extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return <App {...this.props} />;
  }
}

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(AppContainer);
