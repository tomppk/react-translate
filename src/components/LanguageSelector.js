import React from "react";
// Import default export from LanguageContext that is the
// Context object.
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  // Set this.context to be the LanguageContext object
  static contextType = LanguageContext;

  render() {
    const text =
      this.context.language === "english"
        ? "Select a language:"
        : "Valitse kieli:";

    return (
      <div>
        {text}
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag fi"
          onClick={() => this.context.onLanguageChange("finnish")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
