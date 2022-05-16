import React from 'react';
import { View, Text, Image } from 'react-native';

import { image } from '../../assets/index'

export default function Life({ chances }) {
    let heart = [];
    for (let index = 0; index < chances; index++) {
        heart.push(<Image source={image.heart} style={{ width: 20, height: 20, resizeMode: 'contain', margin: 2 }} />);

    }
    return (
        <View style={{ flexDirection: 'row' }}>
            {heart}
        </View>
    );
}