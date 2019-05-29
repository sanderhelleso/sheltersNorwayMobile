import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class SearchField extends Component {
    state = {
        keywords: ''
    }

    // update input text on change
    handleChangeText = (keywords) => {
        setState({ keywords });
    }

    render() {
        return (
            <View>
                <TextInput 
                    onChangeText={this.handleChangeText}
                    value={this.state.keywords}
                    placeholder="SØK BY, FYLKE, KOMMUNE..."
                />
            </View>
        )
    }
}

export default SearchField;