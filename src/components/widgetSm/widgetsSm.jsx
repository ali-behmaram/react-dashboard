import React from "react"
import "./widgetsSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {newMembers} from "../../data"

export default function WidgetsSm() {
    return(
        <div className="widgetsSm">
            <span className="widgetsSmTitle">New Join Members</span>
            <ul className="widgetsSmList">
                {newMembers.map((member) =>(
                <li key={member.id} className="widgetSmListItem">
                    <img src={member.img} className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{member.username}</span>
                        <span className="widgetSmUserTitle">{member.title}</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>
                    </button>
                </li>     
                ))}
                
            </ul>

        </div>
    )
}