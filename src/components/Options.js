// src/components/Options.js
import React from 'react';
import './Options.css';

const Options = ({ length, setLength, includeUppercase, setIncludeUppercase, includeNumbers, setIncludeNumbers, includeSymbols, setIncludeSymbols }) => {
    return (
        <div className="options">
            <div>
                <label>Password Length:</label>
                <input 
                    type="number" 
                    value={length} 
                    onChange={(e) => setLength(e.target.value)} 
                    min="4" 
                    max="32" 
                />
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={includeUppercase} 
                        onChange={(e) => setIncludeUppercase(e.target.checked)} 
                    />
                    Include Uppercase Letters
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={includeNumbers} 
                        onChange={(e) => setIncludeNumbers(e.target.checked)} 
                    />
                    Include Numbers
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={includeSymbols} 
                        onChange={(e) => setIncludeSymbols(e.target.checked)} 
                    />
                    Include Symbols
                </label>
            </div>
        </div>
    );
};

export default Options;
