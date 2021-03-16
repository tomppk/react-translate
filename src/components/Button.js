import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // Hook up context object to a class component
  // static contextType adds a property to Button class
  // Same as writing Button.contextType = LanguageContext
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Lähetä";

    return <button className="ui primary button">{text}</button>;
  }
}

export default Button;
