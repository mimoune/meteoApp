import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import Search from '../containers/Search';
import About from '../containers/About';
import Home from '../containers/Home';

const TabNavigator = createMaterialTopTabNavigator({
    Home:{screen:Home},
    Search:{screen:Search},
    About:{screen:About},
},{
    tabBarPosition:'bottom',
    initialRouteName :'Home',
    tabBarOptions:{
        showIcon:true,
        showLabel:false,
        indicatorStyle:{
            backgroundColor:'#ffffff'
        },
        style:{
            backgroundColor:'#a2273c'
        }
    }
});

export default createAppContainer(TabNavigator);