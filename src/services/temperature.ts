import { TemperatureInfo } from '../interfaces/temperature-info';
import { TemperatureSensor } from '../interfaces/temperature-sensor';

export class Temperature implements TemperatureSensor {
  temperature: number;
  humidity: number;

  constructor(temperature: number = null, humidity: number = null) {
    this.temperature = temperature;
    this.humidity = humidity;
  }

  async fetch(): Promise<TemperatureInfo> {
    return Promise.resolve({
      temperature: this.temperature,
      humidity: this.humidity
    });
  }
}