import React from 'react';
import './TopSection.css';
import icon from './images/icon-arrow.svg';
import Panel from './Panel';

export default function Heading({ input, changeInput, handleSubmit, data }) {
    return (
        <div className='top-section'>
            <h1 className='title'>IP Address Tracker</h1>
            <form onSubmit={handleSubmit} className='input-form'>
                <div className='search-container'>
                    <input
                        type='text'
                        className='search'
                        placeholder='Search for any IP address or domain'
                        onChange={(e) => changeInput(e.target.value)}
                        value={input}
                    />
                    <div className='icon-container'>
                        <img src={icon} alt='search-icon' onClick={handleSubmit} />
                    </div>
                </div>
            </form>
            <Panel data={data} className='Panel' />
        </div>
    );
}
