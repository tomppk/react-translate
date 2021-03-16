import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

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
        {/* This is how to change the value of context object. It gets passed down to child components who make use of context system. */}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
