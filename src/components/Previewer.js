import React from 'react';
import '../styles/previewer.css';

import ReactMarkdown from 'react-markdown';
import { Toolbar } from './Toolbar';

export const Previewer = ({children}) => {
    return (
        <div className='previewer' >
            <Toolbar title='Previewer'></Toolbar>
            <div id='preview'>
                <ReactMarkdown source={children} />
            </div>
            
        </div>
    )

}