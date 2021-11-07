import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    
    const newArticle = (heading, subtitle) => (
        <div className='widgets__article'>
        <div className='widgets__articleLeft'>
          <FiberManualRecordIcon/>
        </div>
        <div className='widgets__articleRight'>
              <h4>{heading}</h4>
              <p>{subtitle}</p>
        </div>
        </div>
    )


    return (
        <div className="widgets">
            <div className="widgets__header">
               <h2> LinkedIn News</h2>
               <InfoIcon/>
            </div>
            {newArticle("PAPA React is back", "Top news - 5466 readers")}
            {newArticle("Corona virus is still kill people", "Top news 100000 readers")}
            {newArticle("Tesla hits new highs", "car auto -2000  ")}
            {newArticle("Bitcoin Breaks ", "Top news")}
            {newArticle("coin ", "Top news")}
            


        </div>
    )
}

export default Widgets
