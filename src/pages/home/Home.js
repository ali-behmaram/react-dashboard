import React from 'react'
import "./Home.css"
import Features from '../../components/features/Features'
import Chart from "../../components/Chart/Chart";
import {xAxisData} from "../../data"
import WidgetsSm from '../../components/widgetSm/widgetsSm';
import WidgetLg from '../../components/widgetLg/widgetLg';

export default function Home() {
  return (
    <div className='home'>
      <Features  />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className='homeWidgets'>
        <WidgetsSm/>
        <WidgetLg/>
        
      </div> 
    </div>
  )
}
