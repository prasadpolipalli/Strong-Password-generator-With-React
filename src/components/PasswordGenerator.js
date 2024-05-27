// src/components/PasswordGenerator.js
import React, { useState } from 'react';
import Options from './Options';
import Result from './Result';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let characterPool = lowercase;

        if (includeUppercase) characterPool += uppercase;
        if (includeNumbers) characterPool += numbers;
        if (includeSymbols) characterPool += symbols;

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            newPassword += characterPool[randomIndex];
        }

        setPassword(newPassword);
    };

    return (
        <div className="password-generator">
            <Options 
                length={length} 
                setLength={setLength}
                includeUppercase={includeUppercase} 
                setIncludeUppercase={setIncludeUppercase}
                includeNumbers={includeNumbers}
                setIncludeNumbers={setIncludeNumbers}
                includeSymbols={includeSymbols}
                setIncludeSymbols={setIncludeSymbols}
            />
            <button onClick={generatePassword}>Generate Password</button>
            <Result password={password} />
        </div>
    );
};

export default PasswordGenerator;
