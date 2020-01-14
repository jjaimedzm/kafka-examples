const kafka = require("kafka-node");
// const bp = require('body-parser');
const config = require("./config");
const functions = require("./repository/functions");

module.exports.publish = async (message, topic) => {
  console.log("publish => ", { message, topic });
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient({ kafkaHost: config.kafka_server });
  const producer = new Producer(client);

  producer.on("ready", async function() {
    let payloads = [
      {
        topic,
        messages: message
      }
    ];
    producer.send(payloads, (err, data) => {
      if (err) console.log("Ocurrio un error");
      console.log("SE envio correctamente");
      process.exit();
    });
  });
};
