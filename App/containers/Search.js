import React, { Component } from 'react';
import { Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = {
        tabBarIcon:()=>{
            return <Icon name='search' size={20} color="#fff" />;
        }
    };
    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center',}}>
               
            </View>
        );
    }
}

export default Search;