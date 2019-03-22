import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {withNavigation} from "react-navigation";

class AppHeader extends React.Component {
    render() {
        if (this.props.canGoBack) {
            return (
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => { this.props.navigation.goBack() }} />
                    <Appbar.Content
                        title={this.props.appTitle}
                        subtitle={this.props.appSubTitle}
                    />
                </Appbar.Header>
            );
        } else {
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
}

export default withNavigation(AppHeader);