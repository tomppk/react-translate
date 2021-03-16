import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class Button extends React.Component {
  // Getting access to context object using this.context
  // Hook up context object to a class component
  // static contextType adds a property to Button class
  // Same as writing Button.contextType = LanguageContext
  // static contextType = LanguageContext;

  renderSubmit(language) {
    return language === "english" ? "Submit" : "Lähetä";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {/* To get value out of context object we pass in single function as a child to Consumer component. The function will be called with the current value that is in the context pipe. In this case the value parent App uses Provider to provide. Destructure language property from Context object.  */}
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // Using this.context sample
    // const text = this.context === "english" ? "Submit" : "Lähetä";

    return (
      // We have separate Context object that calls a
      // function as a child that will return our render
      // JSX
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
