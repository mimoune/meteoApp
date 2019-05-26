import React, { Component } from 'react';
import { TextInput, Button, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: ''
        };
    }
    static navigationOptions = {
        tabBarIcon:()=>{
            return <Icon name='home' size={20} color="#fff" />;
        }
    };
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(textInput) => this.setState({ textInput })}
                    defaultValue={this.state.textInput}
                    placeholder="Tapez la ville:"
                />
                <Button
                    onPress={() => console.warn(this.state.textInput)}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

export default Home;