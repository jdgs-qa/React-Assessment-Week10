import React from 'react';

function StatusBlock(props) {
    if (props.status.lineStatuses[0].statusSeverityDescription === "Good Service") {
        const style = { float: "right", color: "#00ff00", backgroundColor: "#000000" }
        return (
            <div className="card m-3" style={props.style}>
                <h4 className="m-2"> <b>{props.status.name}</b>
                    <span style={style}> {props.status.lineStatuses[0].statusSeverityDescription} &nbsp; ○</span>
                </h4>
            </div >
        )
    }
    else {
        return (
            <div className="card m-3" style={props.style}>
                <h4 className="m-2">{props.status.name}
                    <span style={{ float: "right" }}>Disruption</span>
                </h4>
                <p>{props.status.lineStatuses[0].statusSeverityDescription}</p>
            </div >
        )
    }
}

export default StatusBlock;