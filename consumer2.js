const request = require('request');
const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');

try {
  const Consumer = kafka.Consumer;
  const client = new kafka.KafkaClient({kafkaHost: config.kafka_server});
  let consumer = new Consumer(
    client,
    [
      { topic: config.kafka_topic, partition: 0 }
    ],
    {
      autoCommit: true,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
      encoding: 'utf8',
      fromOffset: false
    }
  );

  consumer.on('message', async function(message) {
    console.log('here');
    console.log(
      'kafka-> ',
      message.value
    );


    // hace algo con la información
    //req();//


  })
  consumer.on('error', function(err) {
    console.log('error', err);
  });
}
catch(e) {
  console.log(e);
}


async function req(){
  request('https://jsonplaceholder.typicode.com/todos/1', (error, response, body) => {
    console.log(body);
  })
}