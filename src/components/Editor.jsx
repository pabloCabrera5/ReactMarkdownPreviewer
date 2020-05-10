import React, { Component } from 'react';
import '../styles/editor.css';
import { Toolbar } from './Toolbar';

//const urlMarkdownCheatSheet = 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet';

// Stateless/Presentational Component
/*
export const Editor = (props) => {

    const _onChange = (e) => {
        props.sendText(e.target.value);
    }
    return (
        <div className='editor'>
            <Toolbar title='Editor' />
            <textarea id='editor' onChange={_onChange} defaultValue={props.text}>
            </textarea>
        </div>
    )
}
 */
export class Editor extends Component {

    _onChange = (e) => {
        this.props.sendText(e.target.value);
    }

    render() {
        return (
            <div className='editor'>
                <Toolbar title='Editor' />
                <textarea id='editor' onChange={this._onChange} defaultValue={this.props.text}>
                </textarea>
            </div>
        )
    }
}