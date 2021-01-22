import React from 'react';
import { getSmurf } from '../actions';
import { connect } from 'react-redux';

import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {
    componentDidMount() {
        this.props.getSmurf();
    }

    render() {
        console.log('Hellooooo', this.props);
        if(this.props.isFetching){
            return <h3>Fetching Smurfs...</h3>
        }

        if(this.props.error){
            return <h3>OOPS! An error occured rerieving Smurfs!</h3>
        }

        if(this.props.smurf.name){
            return<h3>This Smurf already exist. Please add another!</h3>
        }
        
        return(<div>
            {this.props.smurf.map((character) =>{
                return <Smurf smurf={character} />
            })}
        </div>)
    }
}

const mapStateToProps = state =>{
    return{
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurf}) (SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.