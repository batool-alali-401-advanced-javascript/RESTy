import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from "./components/Form/form.js";
import Header from "./components/Header/header.js";
import Footer from "./components/Footer/footer.js";
import Results from './components/Results/results.js'
import History from './components/History/history';
import TempHistory from './components/History/tempHistory';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: {},
      count: 0,
      results: [],
      url: '',
      reqType: 'GET',
      reqBody: null,
      output: {},
      loading: false,
      history: [],
     
    };
  }
  async apiFetch() {
    let baseURL = this.state.url;
    if (baseURL) {
      try {
        this.setState({
          loading: true,
        });

        const res = await fetch(baseURL, {
          method: this.state.reqType,
          headers: {
            'Content-Type': 'application/json',
          },
          body:
            this.state.reqType === 'GET' || this.state.reqType === 'DELETE'
              ? null
              : JSON.stringify(JSON.parse(this.state.reqBody)),
        });

        if (res) {
          const jsonRes = await res.json();
          const newHeaders = {};

          for (const entry of res.headers.entries()) {
            newHeaders[entry[0]] = entry[1];
          }

          await this.setState({
            results: jsonRes.results || jsonRes,
            count: jsonRes.count || 1,
            headers: newHeaders,
          });

          if (this.state.results.error) {
            throw new Error('500 error');
          }

          const currOutput = {
            headers: this.state.headers,
            results: this.state.results,
            count: this.state.count,
            url: baseURL,
            reqType: this.state.reqType,
            reqBody: this.state.reqBody,
          };

          this.updateHistory(currOutput);

          this.setState({
            output: currOutput,
          });
        }
      } catch (e) {
        console.error('Error: could not perform operation.', e.message);

        const errorOutput =
          e.message === '500 error'
            ? this.state.results
            : {
                error: 'could not perform operation',
                message: e.message,
              };

        errorOutput.url = baseURL;
        errorOutput.reqType = this.state.reqType;

        this.setState({
          output: errorOutput,
        });

      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }

 
  async updateURL(val) {
    await this.setState({ url: val });
  }

  async updateReqType(val) {
    await this.setState({ reqType: val });
  }

  async updateReqBody(val) {
    await this.setState({ reqBody: val });
  }
  async fetchPrevReq(index) {
    const prevReq = this.state.history[index];

    if (prevReq) {
      await this.setState({
        url: prevReq.url,
        reqType: prevReq.reqType,
        reqBody: prevReq.reqBody,
      });

      await this.apiFetch();
    }
  }

  async fetchWithForm(reqType, reqBody) {
    await this.setState({
      reqType,
      reqBody: reqType === 'GET' || reqType === 'DELETE' ? null : reqBody,
    });

    await this.apiFetch();
  }
  updateHistory(currOutput) {
   
    for (const prevReq of this.state.history) {
      if (
        prevReq.url === currOutput.url &&
        prevReq.reqType === currOutput.reqType &&
        prevReq.reqBody === currOutput.reqBody
      ) {
        return;
      }
    }
  
    this.state.history.push(currOutput);
  }
  render() {
    return (
      <>
         <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <div id="resty" className="content">
                <Form
                  className="form-url"
                  label="URL"
                  value={this.state.url}
                  type="text"
                  stateKey="url"
                  onChange={this.updateURL.bind(this)}
                  onReqBoxChange={this.updateReqBody.bind(this)}
                  onSubmit={this.fetchWithForm.bind(this)}
                  onClick={this.updateReqType.bind(this)}
                />
                <div className="res-and-history flex-row">
                  <Results
                    className="results"
                    output={this.state.output}
                    loading={this.state.loading}
                  />
                  <TempHistory
                    history={this.state.history || []}
                    onSubmit={this.fetchPrevReq.bind(this)}
                  />
                </div>
              </div>
            </Route>
            <Route exact path="/history">
              <History
                history={this.state.history || []}
                fetchPrevReq={this.fetchPrevReq.bind(this)}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

       
      </>
    );
  }
}
export default App;
