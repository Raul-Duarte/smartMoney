import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import BalancePenelLabel from './BalancePenelLabel'
import BalancePenelChart from './BalancePenelChart'

const BalancePenel = ({currentBalance}) => {
    return (
        <View style={styles.container}>
            <BalancePenelLabel currentBalance={currentBalance} />
            <BalancePenelChart />

        </View>
    )
}

export default BalancePenel;

const styles = StyleSheet.create({
    ccontainer: {
        // flex:1,
    }
})