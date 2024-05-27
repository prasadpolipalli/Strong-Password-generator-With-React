// src/components/Result.js
import React from 'react';
import './Result.css';

const Result = ({ password }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    return (
        <div className="result">
            <input type="text" value={password} readOnly />
            <button onClick={copyToClipboard}>Copy</button>
        </div>
    );
};

export default Result;
