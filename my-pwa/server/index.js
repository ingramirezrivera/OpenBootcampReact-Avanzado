const express = require('express');
const cors = require('cors');
const webpush = require('web-push');

//Middlewares 
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Constantes
const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cBpD9JMSrHM:APA91bH-G-LDooo_nvuwg7vkfOvjn_LPqVp63nSdkHOCRNVR1UZDG1hPIC4kYsz962Yt-w0nwHfNO_QwMWZZMd5U20-5wQWdC94WEHO316dBFTwclTFVRdlyc6jzJ-0QzMld2n4k4e_k',
    expirationTime: null,
    keys: {
      p256dh: 'BPeq0KHCxuhS3qG3SA5TPwWCgsklvKZiklEeHNxSxaZDgB3Kr0T1G_Oykhs8H4oyWZ7fmLdFoj-P7VOhFejfAT4',
      auth: 'dXVARaSudKJ2zGniJOyLpw'
    }
}

const vapidKeys = {
    publicKey: "BIGfAr3J_EyjBgmLn6Xiy5zBtsCyPwDOfRI5ABy2kJ10oW9Mo8NodBaz3sEKQwUmOHvLE5xhAFz7WMQ7RX9V_bs",
    privateKey: "pGWwasbUWf7LBQ-EcG3YjipCtAvmNCZXOnFfkPM4r1s"
  }

  webpush.setVapidDetails(
    'mailto:ing.ramirez@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

// Routes 
app.get('/', async (req,res) => {
    // res.sendStatus(200).json();
    const payload = JSON.stringify({ title: "Titulo de la notificación", message: "Mensaje de la notificación" })
    try{
        await webpush.sendNotification(pushSubscription, payload);
        await res.send("Enviado");
    }catch (e) { console.log(e) }
})

app.post('/subscription', (req,res) => {
    console.log(req.body);
    req.sendStatus(200).json();
} )

app.listen(8000, () => console.log("Server listening on port 8000"));