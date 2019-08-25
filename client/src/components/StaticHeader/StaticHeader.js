import React, { Component } from 'react';
import Axios from 'axios';

class StaticHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { isOn: true };
    };

    // State below set to blank for all neccessary database inputs.
    state = {
        seasonName: "",
        dateStarted: "",
        dateCompleted: "",
        strainName: "",
        lineage: "",
        floweringTime: "",
        breeder: "",
        starterPlantType: "",
        numPlants: "",
        medium: "",
        vegLightType: "",
        vegLightWattage: "",
        flowerLightType: "",
        flowerLightWattage: "",
        lightNotes: "",
        canopyTechnique: "",
        canopyTechniqueNotes: "",
        // user: "5d60ad3ce54ff902983c41dd"
        // redirect: false
    };

    async componentDidMount() {
        let response = await Axios.get(`/api/grow/${this.props.growId}`);
        console.log(response);
        let data = response.data;
        this.setState({
            seasonName: data.seasonName,
            dateStarted: data.dateStarted.slice(0, 10),
            dateCompleted: data.dateCompleted.slice(0, 10),
            strainName: data.strainName,
            lineage: data.lineage,
            floweringTime: data.floweringTime,
            breeder: data.breeder,
            starterPlantType: data.starterPlantType,
            numPlants: data.numPlants,
            medium: data.medium,
            vegLightType: data.vegLightType,
            vegLightWattage: data.vegLightWattage,
            flowerLightType: data.flowerLightType,
            flowerLightWattage: data.flowerLightWattage,
            lightNotes: data.lightNotes,
            canopyTechnique: data.canopyTechnique,
            canopyTechniqueNotes: data.canopyTechniqueNotes
        });
    };

    render() {

        return (
            <div>

            <h1>{this.state.seasonName}</h1>
            <h3>{this.state.dateStarted}</h3>
            <h3>{this.state.dateCompleted}</h3>

            <h4>{this.state.strainName}</h4>
            <h4>{this.state.lineage}</h4>
            <h4>{this.state.floweringTime}</h4>
            <h4>{this.state.breeder}</h4>
            <h4>{this.state.starterPlantType}</h4>
            <h4>{this.state.numPlants}</h4>
            <h4>{this.state.medium}</h4>
            <h4>{this.state.vegLightType}</h4>
            <h4>{this.state.vegLightWattage}</h4>
            <h4>{this.state.flowerLightType}</h4>
            <h4>{this.state.flowerLightWattage}</h4>
            <h4>{this.state.lightNotes}</h4>
            <h4>{this.state.canopyTechnique}</h4>
            <h4>{this.state.canopyTechniqueNotes}</h4>

            </div>
        )

    };

};

export default StaticHeader;