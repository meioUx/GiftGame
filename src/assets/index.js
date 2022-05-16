export const image = {
    gift: require('./images/gift.png'),
    heart: require('./images/heart.png'),
    objects: [
        {
            bad: {
                url: require('./images/game/barco-bom.jpg'),
                mensagem: 'Parabéns! Você ganhou presente bom!',
                tipo: 1
            },
            good: {
                url: require('./images/game/barco-ruim.jpg'),
                mensagem: 'Não foi desta vez! Você ganhou presente ruim!',
                tipo: 0
            }

        },
        {
            bad: {
                url: require('./images/game/casa-bom.jpg'),
                mensagem: 'Parabéns! Você ganhou presente bom!',
                tipo: 1
            },
            good: {
                url: require('./images/game/casa-ruim.jpg'),
                mensagem: 'Não foi desta vez! Você ganhou presente ruim!',
                tipo: 0
            }
        },
        {
            good: {
                url: require('./images/game/carro-bom.jpg'),
                mensagem: 'Parabéns! Você ganhou presente bom!',
                tipo: 1
            },
            bad: {
                url: require('./images/game/carro-ruim.jpg'),
                mensagem: 'Não foi desta vez! Você ganhou presente ruim!',
                tipo: 0
            }
        },
        {
            bad: {
                url: require('./images/game/tenis-bom.jpg'),
                mensagem: 'Parabéns! Você ganhou presente bom!',
                tipo: 1
            },
            good: {
                url: require('./images/game/tenis-ruim.jpg'),
                mensagem: 'Não foi desta vez! Você ganhou presente ruim!',
                tipo: 0
            }
        },

    ]
}