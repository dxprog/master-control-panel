declare module 'node-dht-sensor' {
  interface IDhtSensorData {
    temperature: number;
    humidity: number;
    isValid: boolean;
    errors: number;
  }

  function initialize(
    sensorType: number,
    gpioPin: number
  ): void;
  function read(): IDhtSensorData;

  function read(
    sensorType: number,
    gpioPin: number
  ): IDhtSensorData;

  function read(
    sensorType: number,
    gpioPin: number,
    callback: (err: Error, temperature: number, humidity: number) => void
  ): void;
}
