import React, {Component} from 'react';
import { Switch, View, Text, KeyboardAvoidingView, Dimensions } from 'react-native';
// import Spacer from 'react-native-spacer';
import Spacer from './spacer';

global.sharedState = {
    scale: true
};

const withScaledSheetSwitch = ChildComponent =>
    class extends Component {
        state = {
            scale: global.sharedState.scale,
        };

        componentDidUpdate() {
            global.sharedState.scale = this.state.scale;
        }

        render() {
            return (
                <Spacer enabled style={{ height: '100%' }}>
                    <View  style={{flex:1, height: '100%'}}>
                            <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                                <Text style={{ fontSize: 16 }}>size-matters enabled?</Text>
                                <Switch value={this.state.scale} onValueChange={() => this.setState(prevState => ({ scale: !prevState.scale }))} />
                            </View>
                            <ChildComponent {...this.props} scale={this.state.scale} />
                    </View>
                </Spacer>
            );
        }

    };

export default withScaledSheetSwitch;