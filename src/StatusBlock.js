import React from 'react';

function StatusBlock(props) {
    if (props.status.lineStatuses[0].statusSeverityDescription === "Good Service") {
        // const style = { float: "right" }
        return (false
            // < div className="card m-3" style={props.style} >
            //     <h4 className="m-2"> <b>{props.status.name}</b>
            //         <span style={style}> {props.status.lineStatuses[0].statusSeverityDescription} &nbsp; <strong style={{ color: "#00ff00" }}>○</strong></span>
            //     </h4>
            // </div >
        )
    } else if (props.status.lineStatuses[0].statusSeverityDescription === "Part Closure") {
        let n = props.status.lineStatuses[0].reason.indexOf(":") + 1;
        const style = { float: "right" }
        return (
            <div className="card m-3" style={props.style}>
                <h4 className="m-2"> <b>{props.status.name}</b>
                    <span style={style}> {props.status.lineStatuses[0].statusSeverityDescription} &nbsp; <strong style={{ color: "#ffff00" }}>○</strong></span>
                </h4>
                <p className="m-2">{props.status.lineStatuses[0].reason.substring(n)}</p>
            </div >
        )
    }
    else {
        let n = props.status.lineStatuses[0].reason.indexOf(":") + 1;
        const style = { float: "right" }
        return (
            <div className="card m-3" style={props.style}>
                <h4 className="m-2">{props.status.name}
                    <span style={style}> {props.status.lineStatuses[0].statusSeverityDescription} &nbsp; <strong style={{ color: "#ff0000" }}>○</strong></span>
                </h4>
                <p className="m-2">{props.status.lineStatuses[0].reason.substring(n)}</p>
            </div >
        )
    }
}

export default StatusBlock;