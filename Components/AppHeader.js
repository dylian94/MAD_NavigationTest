import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {withNavigation} from "react-navigation";

class AppHeader extends React.Component {

    _goBack = () => {this.props.navigation.goBack()};

    render() {
        if (this.props.canGoBack && this.props.onRefresh) {
            return (
                <Appbar.Header>
                    <Appbar.BackAction onPress={this._goBack}/>
                    <Appbar.Content
                        title={this.props.appTitle}
                        subtitle={this.props.appSubTitle}
                    />
                    <Appbar.Action icon="refresh" onPress={this.props.onRefresh}/>
                </Appbar.Header>
            );
        }else if (this.props.canGoBack) {
            return (
                <Appbar.Header>
                    <Appbar.BackAction onPress={this._goBack}/>
                    <Appbar.Content
                        title={this.props.appTitle}
                        subtitle={this.props.appSubTitle}
                    />
                </Appbar.Header>
            );
        }else if (this.props.onRefresh) {
            return (
                <Appbar.Header>
                    <Appbar.Content
                        title={this.props.appTitle}
                        subtitle={this.props.appSubTitle}
                    />
                    <Appbar.Action icon="refresh" onPress={this.props.onRefresh} />
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