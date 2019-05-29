import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SearchField from './SearchField';

class Search extends Component {
    render() {
        return (
            <View>
                <Text>Search</Text>
                <SearchField />
            </View>
        )
    }
}

export default Search;