// import 'paho-client';
import Paho from 'paho-mqtt';
import Mqtt from 'mqtt';

// function startConnect(){
// // Create a client instance: Broker, Port, Websocket Path, Client ID
// var client;
// host = "ec2-34-216-22-106.us-west-2.compute.amazonaws.com";
// client = new Paho.MQTT.Client(host, Number(1883), 60);

// // set callback handlers
// client.onConnectionLost = function (responseObject) {
//     console.log("Connection Lost: "+responseObject.errorMessage);
// }

// client.onMessageArrived = function (message) {
//   console.log("Message Arrived: "+message.payloadString);
// }

// // Called when the connection is made
// function onConnect(){
// 	console.log("Connected!");
// }

// // Connect the client, providing an onConnect callback
// client.connect({
// 	onSuccess: onConnect
// });
// }

// Called after form input is processed
//function startConnect() {

    // Generate a random client ID
    //var clientID = "clientID_" + parseInt("2132432");
    /*var host = "ec2-34-216-22-106.us-west-2.compute.amazonaws.com";

    // Initialize new Paho client connection
    var client = new Paho.Client(host, 1883, "34653254672WER");

    // connect the client
    client.connect({onSuccess:onConnect});
    //client.subscribe('mychanel');

    client.onConnectionLost = onConnectionLost;
    // Set callback handlers
    // client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived; */
   // var mqtt = require('mqtt')
var client  = Mqtt.connect([{ host: 'ec2-34-216-22-106.us-west-2.compute.amazonaws.com', port: 1883 }])

client.on('connect', function () {
  client.subscribe('mychanel', function (err) {
    if (!err) {
      client.publish('mychanel', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

    
//}

function onConnect(){
    console.log("onConnect");
    client.subscribe("mychanel");
}

function onMessageArrived(message: any){
   console.log("Received message"+ message.payloadString);
}

function onConnectionLost(){
   console.error('connection lost, sad');
}