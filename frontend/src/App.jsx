import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { retrieveList } from './api';

import SearchInput from './components/SearchInput';
import Footer from './components/Footer';

import SurveyList from './containers/SurveyList';
import Result from './containers/Result';

import './App.css';

class App extends Component {
  state = {
    surveyList: [],
    searchCriteria: '',
    selection: ''
  }

  componentDidMount() {
    retrieveList()
      .then((data) => {
        this.setState(prevState => ({
          surveyList: data
        }));
      });
  }

  onSearch = (val = '') => {
    this.setState(prevState => ({
      searchCriteria: val
    }));
  }

  onSurveyItemClick = e => {
    const { code } = e.currentTarget.dataset;

    this.setState(prevState => ({
      selection: code
    }));
  }

  render() {
    const filtredList = this.state.surveyList.filter(v => {
      const pattern = new RegExp(this.state.searchCriteria, 'gi');

      return pattern.test(v.code) || pattern.test(v.name);
    });

    return (
      <BrowserRouter>
        <Fragment>

          <main>
            <header>
              <h1>Strater kit</h1>
              <hr />
            </header>

            <SearchInput
              onSearch={ this.onSearch }
            />

            <SurveyList
              list={ filtredList }
              selection={ this.state.selection }
              onSurveyItemClick={ this.onSurveyItemClick }
            />

            <Switch>
              <Route exact path="/survey/:surveyId" component={ Result } />
            </Switch>

          </main>
          <Footer />

        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
