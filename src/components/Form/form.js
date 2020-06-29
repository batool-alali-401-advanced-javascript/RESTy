import React from "react";
import './form.scss';


class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          url: '',
          method:'',
          full:'',
     };
    }

    handleChange = (e) =>{
        const url = e.target.value;
        console.log(url);
        console.log(this.state.url);
        this.setState({ url: url });

    };

    handleClickGo = (e) => {
        this.setState({full: `${this.state.method}     ${this.state.url} `})
    };

    handleClickGet = (e) => {
        this.setState({ method: 'get' });
    };
    handleClickPost = (e) => {
        this.setState({ method: 'post' });
    };
    handleClickPut = (e) => {
        this.setState({ method: 'put' });
    };
    handleClickDelete = (e) => {
        this.setState({ method: 'delete' });
    };
    
  render() {
    return (
        <main className="mainForm">
            <div className='form'>
                <label className="urlLabel">URL:</label>
                <input type="text" className='urlInput' onChange={this.handleChange} />
                <button className='method' id='go' onClick={this.handleClickGo}>Go!</button>
                <br></br>
                <button className='method' id='get' onClick={this.handleClickGet}>GET</button>
                <button className='method' id='post' onClick={this.handleClickPost}>POST</button>
                <button className='method' id='put' onClick={this.handleClickPut}>PUT</button>
                <button className='method' id='delete' onClick={this.handleClickDelete}>DELETE</button>
            </div>
       
        <div className='fullMethod'>{this.state.full}</div>



      </main>
    );
  }
}


  
  export default Form;
