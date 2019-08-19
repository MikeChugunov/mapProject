import React, { Fragment } from 'react';
import StatusBar from './components/Statusbar';
import Colors from "./constants/colors";
import YandexMap from 'react-native-yandex-map';

export default class App extends React.Component {
    render() {
        return <Fragment>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary}/>
            <YandexMap style={{flex: 1, width: '100%'}}/>
        </Fragment>;
    }
}
