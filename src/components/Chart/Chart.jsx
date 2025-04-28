import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import "./Chart.css";


export default function Chart({title, data, dataKey, grid}) {
    return(
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" height={300} aspect={3}>
                <LineChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#5550db" />
                    <YAxis />
                    <Line dataKey={dataKey} stroke="#5550db" type="monotone" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3"/>  }
                </LineChart>
            </ResponsiveContainer>
            

        </div>
    )
}