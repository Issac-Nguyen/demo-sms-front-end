import React from 'react';
import H3 from '../h3';
import H4 from '../h4';

interface h3Config {
    content?: string;
    fontSize?: string;
}

interface h4Config {
    content?: string;
    fontSize?: string;
}

export default ({h3, h4} :{h3: h3Config, h4: h4Config}) => (
    <div className="header">
        <H3>{h3.content}</H3>
        <H4>{h4.content}</H4>
    </div>
)
