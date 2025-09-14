// Gerekli discord.js kütüphanesini ve bileşenlerini çağırıyoruz.
const { Client, GatewayIntentBits } = require('discord.js');

// Botun hangi niyetlerle (intents) çalışacağını belirtiyoruz.
// Sadece sunucu (Guilds) ile ilgili temel bilgilere erişmesi yeterli.
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

// Botun token'ını buraya gireceksin.
// Güvenlik için bu token'ı tırnak işaretlerinin içinde tut.
const token = 'MTQxNjYwMDMzODU2NzUyODU4OQ.G2fd6I.HkmJ0KOUa2a-WRBNS5TGQnfX-fAcDSd5LoU5Fs';

// Bot başarıyla Discord'a giriş yaptığında bu olay (event) tetiklenir.
// Konsola bir onay mesajı yazdırarak botun aktif olduğunu anlarız.
client.on('ready', () => {
  console.log(`Bot başarıyla giriş yaptı: ${client.user.tag}`);
  console.log(`Sunucu listesinin en üstünde online!`);
});

// Botu Discord'a token ile giriş yaptırır. Bu satır olmazsa bot çalışmaz.
client.login(token);
