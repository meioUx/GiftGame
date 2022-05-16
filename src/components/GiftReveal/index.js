import React from 'react';
import { View, Image } from 'react-native';

export default function GiftReveal({ url, selected }) {
    return (
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
            {selected == 0 ?
                <View style={{ margin: 10 }}>
                    <Image source={url[0].url} style={{ width: 270, height: 200, resizeMode: 'contain', borderWidth: 2, borderColor: 'red' }} />
                </View>
                :
                <View style={{ margin: 10 }}>
                    <Image source={url[0].url} style={{ width: 270, height: 200, resizeMode: 'contain', borderWidth: 2, borderColor: 'black' }} />
                </View>
            }


            {selected == 1 ?
                <View style={{ margin: 10 }}>
                    <Image source={url[1].url} style={{ width: 270, height: 200, resizeMode: 'contain', borderWidth: 2, borderColor: 'red' }} />
                </View>
                :
                <View style={{ margin: 10 }}>
                    <Image source={url[1].url} style={{ width: 270, height: 200, resizeMode: 'contain', borderWidth: 2, borderColor: 'black' }} />
                </View>
            }

        </View>
    );
}