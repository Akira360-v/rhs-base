import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 4000,
    },
    {
        name: 'Page B', uv: 3000,
    },
    {
        name: 'Page C', uv: 2000,
    },
    {
        name: 'Page D', uv: 2780,
    },
    {
        name: 'Page E', uv: 1890,
    },
    {
        name: 'Page F', uv: 2390,
    },
    {
        name: 'Page G', uv: 3490,
    },
];

export default class Example extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height="90%" /*aspect={1}*/>
                <AreaChart
                    width="100%"
                    height="70%"
                    data={data}
                    margin={{
                        top: 15, right: 0, left: 0, bottom: 0,
                    }}
                >
                    <Area type="monotone" dataKey="uv" stroke="#c62828" fill="#ef5350" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}