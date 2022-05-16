import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { image } from '../../assets/index'

import GiftReveal from '../../components/GiftReveal';
import Life from '../../components/Life';

export default function Home() {
    const [show, setShow] = useState(false);
    const [objects, setObjects] = useState({ 0: '', 1: '' });
    const [idGift, setIdGift] = useState();
    const [chances, setChances] = useState(5);
    const [finish, setFinish] = useState(false);
    const [lifes, setLifes] = useState('')


    console.log(chances)
    function handleNextRandom(id) {
        if (chances >= 1) {
            setIdGift(id);
            const random = Math.floor(Math.random() * image.objects.length);
            setObjects({ 0: image.objects[random].bad, 1: image.objects[random].good });
            countChances(objects[id].tipo);
            setShow(!show);
        } else {
            setFinish(true);
        }

    }

    function addLife() {
        setChances(chances + 1); setFinish(false); setShow(!show);
    }

    function countChances(id) {
        console.log('tipo: ', id);
        if (id <= 0) {
            setChances(chances - 1);
        }
    }
    if (finish) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Acabou as suas chances :( {'\n'}Assista anuncio para ganhar mais vidinhas</Text>
                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 8, marginTop: 20 }} onPress={() => addLife()}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Ganhar mais vidinhas</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <Life chances={chances} />
            {show ? (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 24, margin: 20 }}>{objects[idGift].mensagem}</Text>
                    <GiftReveal url={objects} selected={idGift} />
                    <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, borderRadius: 8, marginBottom: 20 }} onPress={() => setShow()}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Tentar outra vez</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <Text style={{ color: 'blue', fontSize: 32, fontWeight: 'bold' }}>Escolha o seu presente</Text>
                    <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => handleNextRandom(0)}>
                            <Image source={image.gift} style={{ width: 300, height: 300 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleNextRandom(1)}>
                            <Image source={image.gift} style={{ width: 300, height: 300 }} />
                        </TouchableOpacity>
                    </View>
                </>
            )
            }


        </View >
    );
}