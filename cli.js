#!/usr/bin/env node
/**
 * CLI tool to publish messages to Kafka topics
 */
const program = require("commander");
const { publish } = require("./producerCli");

program
  .version("0.0.1")
  .usage("[options] <message>")
  .option("-t, --topic [topic]", "Kafka topic", "example")
  .parse(process.argv);

const message = program.args.join(" ");
console.log("TOPIC:", program.topic);
console.log("MESSAGE:", message);
publish(message, program.topic);
