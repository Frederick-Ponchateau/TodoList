import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import count from '../redux/reducers/count';

const AffCount = (props) => {
const{count} =props;
    return(
        <Text>{count.nbCount}</Text>
    )
}

const mapStateToProps = state =>{
    console.log("mapStateToProps : ",state)
    return state
}
export default connect(mapStateToProps,undefined)(AffCount);