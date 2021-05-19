import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import intl from "react-intl-universal";
import {english} from './locale/english';
import {hindi} from './locale/hindi';
import {marathi} from './locale/marathi';
// common locale data

const locales = {
  english,
  hindi,
  marathi,
};

class App extends React.Component {
  state = {
    initDone: false,
    language: "english",
    languages: [{key:"english",value:"English"}, {key:"hindi",value:"Hindi"}, {key:"marathi",value:"Marathi"}],
  };

  componentDidMount() {
    this.loadLocales(this.state.language);
  }

  loadLocales = (lang) => {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    intl
      .init({
        currentLocale:
          lang === "english" ? 'english' : lang === "hindi" ? 'hindi' : 'marathi', // TODO: determine locale here
        locales,
      })
      .then(() => {
        // After loading CLDR locale data, start to render
        this.setState({ initDone: true });
      });
  };
  changeLanguage = (selectedLanguage) => {
    this.setState(
      {
        language: selectedLanguage,
      },
      () => this.loadLocales(this.state.language)
    );
  };

  render() {
    return (
      this.state.initDone && (
        <div className="container-fluid">
          <Layout
            language={this.state.language}
            languages={this.state.languages}
            changeLanguage={this.changeLanguage}
          />
        </div>
      )
    );
  }
}

export default App;
