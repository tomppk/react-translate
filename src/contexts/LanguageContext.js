import React from "react";

// Create our own Context component
// Set default value for the context object as 'english'
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { language: "english" };

  // key and value are same in state object language:
  // language
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  // Set Context object properties to be passed on to child
  // components. Properties are this.state props and
  // onLanguageChange callback method.
  // We make current state and ability to change it
  // available to other components in the component
  // hierarchy.
  // Insert this.props.children so that child components
  // will be rendered inside.
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
