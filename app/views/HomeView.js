import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeView = () => {
    return (
        <View style={styles.container}>
            <Text>
                Home
            </Text>
        </View>
    )
}

export default HomeView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});