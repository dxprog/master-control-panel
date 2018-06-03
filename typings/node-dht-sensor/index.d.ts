declare module 'node-dht-sensor' {
  function read(
    sensorType: number,
    pinNumber: number,
    callback: (err: Error, temperature: number, humidity: number) => void
  ): void;
}
