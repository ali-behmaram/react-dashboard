import React from 'react'
import './Features.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

export default function Features() {
  return (
    <div className="features">
        <div className="featuresItem">
            <span className="featuresTitle">Revanue</span>
            <div className="featuresContainer">
                <span className="featuresMoney">$2,129</span>
                <span className="featuresRate">
                    -12.2  <ArrowDownward className='featureIcon negative' />
                </span>                
            </div>
            <span className="featureSub">Compared to last week</span>
        </div>

        <div className="featuresItem">
            <span className="featuresTitle">Sales</span>
            <div className="featuresContainer">
                <span className="featuresMoney">$4,765</span>
                <span className="featuresRate">
                    -2.2  <ArrowDownward className='featureIcon negative' />
                </span>                
            </div>
            <span className="featureSub">Compared to last week</span>
        </div>

        <div className="featuresItem">
            <span className="featuresTitle">Cost</span>
            <div className="featuresContainer">
                <span className="featuresMoney">$9,543</span>
                <span className="featuresRate">
                    +3.3 <ArrowUpward className='featureIcon' />
                </span>                
            </div>
            <span className="featureSub">Compared to last week</span>
        </div>
    </div>
  )
}
