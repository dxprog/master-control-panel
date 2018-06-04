import * as sensor from 'node-dht-sensor';

import { TemperatureInfo } from '../../common/interfaces/temperature-info';

const DHT11 = 11;
const GPIO_PIN = 4;

export function readConditions(): Promise<TemperatureInfo> {
  return new Promise((resolve, reject) => {
    sensor.read(
      DHT11,
      GPIO_PIN,
      (err: Error, temperature: number, humidity: number): void => {
        resolve({
          temperature,
          humidity
        });
      });
  });
}