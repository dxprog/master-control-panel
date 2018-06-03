import { TemperatureInfo } from './temperature-info';

export interface TemperatureSensor {
  fetch(): Promise<TemperatureInfo>;
}