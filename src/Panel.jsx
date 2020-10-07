import React from 'react';
import './Panel.css';

export default function Panel({ data }) {
    const temp = [
        {
            label: 'IP ADDRESS',
            value: data.ip,
        },
        {
            label: 'LOCATION',
            value: data.location,
        },
        {
            label: 'TIMEZONE',
            value: data.timezone,
        },
        {
            label: 'ISP',
            value: data.isp,
        },
    ];

    const sections = temp.map((section, index) => (
        <div key={index} className='section-container'>
            <span className='section-label'>{section.label}</span>
            <p className='section-value'>{section.value}</p>
        </div>
    ));

    return <div className='panel-container'>{sections}</div>;
}
