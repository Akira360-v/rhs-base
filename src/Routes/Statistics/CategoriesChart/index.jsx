import React, {PureComponent} from 'react';
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer,} from 'recharts';

const data = [
    {
        subject: 'Lead Generators', A: 30, B: 110, fullMark: 150,
    },
    {
        subject: 'Designers', A: 45, B: 130, fullMark: 150,
    },
    {
        subject: 'Developers', A: 28, B: 130, fullMark: 150,
    },
    {
        subject: 'Media Buyers', A: 23, B: 100, fullMark: 150,
    },
    {
        subject: 'SMM', A: 13, B: 90, fullMark: 150,
    },
    {
        subject: 'Translators', A: 41, B: 85, fullMark: 150,
    },
];

export default class Example extends PureComponent {

    render() {
        return (
            //BUG: "aspect" for right displaying avoid library-bug
            <ResponsiveContainer width="100%" height="90%" /*aspect={1}*/>
                <RadarChart /*cx={100} cy={100}*/ outerRadius={120} width={100} height="90%" data={data} margin={{
                    top: 0, right: 0, left: 0, bottom: 0,
                }}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="subject" style={{margin: "0 auto"}}/>
                    <PolarRadiusAxis/>
                    <Radar name="Total Employees" dataKey="A" stroke="#c62828" fill="#ef5350" fillOpacity={0.4}/>
                </RadarChart>
            </ResponsiveContainer>
        );
    }
}