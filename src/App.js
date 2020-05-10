import React, { Component } from 'react';

import './App.css';
import { Editor } from './components/Editor';
import { Previewer } from './components/Previewer';
import marked from "marked";
import { TEXT } from './constants/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: TEXT
    }
  }
  _receiveText = (data) => {
    this.setState({
      text: (data)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Editor sendText={this._receiveText} text={this.state.text} />
          <Previewer>{this.state.text}</Previewer>
        </header>
      </div>
    );
  }

}

export default App;
