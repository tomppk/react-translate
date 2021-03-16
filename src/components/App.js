import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  // key and value are same in state object language:
  // language
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    const text =
      this.state.language === "english"
        ? "Select a language:"
        : "Valitse kieli:";

    return (
      <div className="ui container">
        <div>
          {text}
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag fi"
            onClick={() => this.onLanguageChange("finnish")}
          />
        </div>
        {/* Set value to Provider property of context object. It gets passed down to child components who make use of context system either through this.context or Consumer property. Can have multiple different Context objects. Order of nesting does not matter */}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
