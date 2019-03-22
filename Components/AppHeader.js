import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class AppHeader extends React.Component {
    render() {
        return (
            <Appbar.Header>
                <Appbar.Content
                    title={this.props.appTitle}
                    subtitle={this.props.appSubTitle}
                />
            </Appbar.Header>
        );
    }
}