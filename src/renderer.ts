import { TemperatureInfo } from './interfaces/temperature-info';
import { Temperature } from './services/temperature';

async function displayTemperature() {
  const sensor: Temperature = new Temperature(85, 10);
  const info: TemperatureInfo = await sensor.fetch();
  const el = document.getElementById('currentTemp');
  el.innerHTML = info.temperature.toString();
}

displayTemperature();