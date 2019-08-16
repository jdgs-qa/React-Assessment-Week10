import React from 'react';

function StatusBlock(props) {

    return (
        <div className="card m-3" style={props.style}>
            <h4 className="m-2">{props.status.name} &nbsp; | &nbsp;
             {props.status.lineStatuses[0].statusSeverityDescription}
            </h4>
        </div >
    )
}

export default StatusBlock;