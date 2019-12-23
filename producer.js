const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');


console.log(config)

try {
  // const Producer = kafka.Producer;
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient({kafkaHost: config.kafka_server});
  const producer = new Producer(client);
  // const kafka_topic = 'example';
  console.log(config.kafka_topic);
  let payloads = [
    {
      topic: config.kafka_topic,
      messages: "Este es un ejemplo de envio de mensajes"
    }
  ];

  producer.on('ready', async function() {
    let push_status = producer.send(payloads, (err, data) => {
      if (err) {
        console.log('[kafka-producer -> '+config.kafka_topic+']: broker update failed');
      } else {
        console.log('[kafka-producer -> '+config.kafka_topic+']: broker update success');
      }
    });
  });

  producer.on('error', function(err) {
    console.log(err);
    console.log('[kafka-producer -> '+kafka_topic+']: connection errored');
    throw err;
  });
}
catch(e) {
  console.log("++++++")
  console.log(e);
}