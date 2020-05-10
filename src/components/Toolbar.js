import React from 'react';
import '../styles/toolbar.css'

export const Toolbar = (props) => (
    <div className='toolbar'>
        <i title="no-stack-dub-sack" className="fa"></i>
        {props.title}
    </div>
)