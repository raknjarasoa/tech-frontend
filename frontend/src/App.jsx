import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { retrieveList, getSurveyById } from './api';

import SearchInput from './components/SearchInput';
import Footer from './components/Footer';

import SurveyList from './containers/SurveyList';
import Result from './containers/Result';

import './App.css';

class App extends Component {
  state = {
    surveyList: [],
    surveyResult: {},
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
    this.loadSurveyResult(code);
  }

  /** 
   * 
   * Why don't retrieve all data once and store on localStorage?
   * Because, I think that these type of data should be dynamic.
   * We always need to get the last version of the data
  */
  loadSurveyResult(code) {
    getSurveyById(code)
      .then((data) => {
        return this.transformData(data)
      })
      .then((obj) => {
        this.setState(prevState => ({
          surveyResult: obj
        }));
      });
  }

  /**
   * 
   * @param {object} data 
   * Structured the payload data
   */
  transformData(data) {
    return data.reduce((acc, v) => {
      const { label, type, result } = v;

      acc[type] = {
        label,
        result
      }
      return acc;
    }, {})
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
              <Route
                exact path='/survey/:surveyId'
                render={
                  (props) => (
                    <Result
                      surveyResult={ this.state.surveyResult }
                      { ...props }
                    />
                  )
                }
              />
            </Switch>

          </main>
          <Footer />

        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
