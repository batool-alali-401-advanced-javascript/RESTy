import React from 'react';
import Form from "./components/Form/form.js";
import Header from "./components/Header/header.js";
import Footer from "./components/Footer/footer.js";
import Results from './components/Results/results.js'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj:{
        Header:{},
        Response:{ results: [],},

      }

     
    };
  }
  handleForm = (results) => {
    this.setState({ obj: { Header:{Content_Type: 'application/json'},Response:{results: results}, }});
  };
  render() {
    return (
      <>
    <Header />
    <Form  handler={this.handleForm} />
    <Results data={this.state.obj} />
    <Footer/>
       
      </>
    );
  }
}
export default App;
