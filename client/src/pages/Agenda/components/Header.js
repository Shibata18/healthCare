import React from 'react';
import logo from '../../../assets/logo.png'

import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
        alignItems: 'stretch',
    },
    image: {
        width: 40,
        height: 50,
        justifyContent:"flex-start"
    },
    detailColumn: {
        flexDirection: 'column',
        flexGrow: 9,
        textTransform: 'uppercase',
    },
    linkColumn: {
        flexDirection: 'column',
        flexGrow: 2,
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    },
    name: {
        fontSize: 24,
        margin:10,
        color:'#00BCD4',
        alignItems: 'center',
        justifyContent:"center",
    },
    
});
function Header() {
    return (
        <View style={styles.container}>
                <Image source={logo} style={styles.image} />
            <View style={styles.detailColumn}>
                <Text style={styles.name}>Aquann</Text>
            </View>
            <View style={styles.linkColumn}>
            </View>
        </View>
    );
}
export default Header