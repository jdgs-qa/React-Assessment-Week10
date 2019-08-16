import React from 'react';

function StatusBlock(props) {
    if (props.status.lineStatuses[0].statusSeverityDescription.length < 20) {
        return (
            <div className="card m-3" style={props.style}>
                <h4 className="m-2">{props.status.name}
                    <span style={{ float: "right" }}>{props.status.lineStatuses[0].statusSeverityDescription}</span>
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