import React, { Component } from 'react';
import Axios from 'axios';
import StatusBlock from './StatusBlock';

export default class StatusBlockList extends Component {
    constructor() {
        super();
        this.state = {
            tim: "",
            lineStatus: [],
            stationInfo: [],
            lineColours: {
                bakerloo: { backgroundColor: "#B36305" },
                central: { backgroundColor: "#E32017" },
                circle: { backgroundColor: "#FFD300" },
                district: { backgroundColor: "#00782A" },
                dlr: { backgroundColor: "#00A4A7" },
                "hammersmith-city": { backgroundColor: "#F3A9BB" },
                jubilee: { backgroundColor: "#A0A5A9" },
                "london-overground": { backgroundColor: "#EE7C0E" },
                metropolitan: { backgroundColor: "#9B0056" },
                northern: { backgroundColor: "#000000" },
                piccadilly: { backgroundColor: "#003688" },
                "tfl-rail": { backgroundColor: "#0019a8" },
                victoria: { backgroundColor: "#0098D4" },
                "waterloo-city": { backgroundColor: "#95CDBA" },
                tram: { backgroundColor: "#00bd19" },
                "emirates-air-line": { backgroundColor: "#dc241f" }
            }
        }
    }


    componentDidMount() {
        this.interval = setInterval(() => this.setState({
            time: Date.now(),
            lineStatus: this.state.lineStatus,
            stationInfo: this.state.stationInfo,
            lineColours: this.state.lineColours

        }), 300000);
        Axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail,cable-car,tram/status?app_id=63f8cf74&app_key=5abfdb36699070bcaa3b91012f50c03c')
            .then(res => {
                const LineStatus = res.data;
                console.info(LineStatus);
                this.setState({
                    time: this.state.time,
                    lineStatus: LineStatus,
                    stationInfo: this.state.stationInfo,
                    lineColours: this.state.lineColours
                })
                console.info(this.state);
            }).catch(error => {
                console.warn(error);
            })
        // Axios.get('https://api.tfl.gov.uk/StopPoint/490005183E?app_id=63f8cf74&app_key=5abfdb36699070bcaa3b91012f50c03c')
        //     .then(res => {
        //         const StationInfo = res.data;
        //         console.info(StationInfo);
        //         this.setState({
        //             time: this.state.time,
        //             lineStatus: this.state.lineStatus,
        //             stationInfo: StationInfo,
        //             lineColours: this.state.lineColours
        //         })
        //         console.info(this.state);
        //     }).catch(error => {
        //         console.warn(error);
        //     })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }



    render() {
        return (
            <div>
                <div className="card m-3">
                    <h4 className="m-2" style={{ color: "black" }}> There is a good service on all other lines<span style={{ float: "right" }}><strong style={{ color: "#00ff00" }}>○</strong></span>
                    </h4>
                </div>
                {this.state.lineStatus.map((lineStatus) =>
                    <StatusBlock status={lineStatus} key={lineStatus.id} style={this.state.lineColours[lineStatus.id]} />
                )}
            </div>
        )
    }
}
