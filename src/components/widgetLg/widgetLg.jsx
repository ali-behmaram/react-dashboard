import React from "react"
import "./widgetLg.css"
import {transactions} from "../../data"


export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest TransAction</h3>
            <table className="widgetLgTable">

                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amout</th>
                    <th className="widgetLgTh">Status</th>
                </tr>

                {transactions.map(transaction => (
                    <tr key={transaction.id} className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={transaction.img} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">{transaction.costumer}</span>
                    </td>

                    <td className="widgetLgDate">{transaction.date}</td>

                    <td className="widgetLgAmount">{transaction.amount}</td>

                    <td className="widgetLgStatus">
                        <Button type={transaction.status} />
                    </td>
                </tr>
                ))}
                


            </table>
                    


        </div>
    )
}