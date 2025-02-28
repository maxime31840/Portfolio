import React from 'react';
import CalendarGithub from './CalendarGithub';
import Introduction from './Introduction';
import Acquis from './Acquis';

export default function About() {
    return (
        <div className="flex flex-col items-center text-white p-24 mt-32">
            <Introduction />
            <Acquis />
            <CalendarGithub />
        </div>
    );
}