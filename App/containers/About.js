import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    static navigationOptions = {
        tabBarIcon:()=>{
            return <Icon name='more-horizontal' size={20} color="#fff" />;
        }
    };
    render() {
        return (
            <Text>About</Text>
        );
    }
}

export default About;