import * as http from 'http';

import { TemperatureInfo } from '../common/interfaces/temperature-info';

function displayTemperature() {
  const req = http.request('http://localhost:4444/conditions', res => {
    let buffer: string = '';
    res.setEncoding('utf8');
    res.on('data', (chunk: string) => buffer += chunk);
    res.on('end', () => {
      const conditions: TemperatureInfo = JSON.parse(buffer);
      const el = document.getElementById('currentTemp');
      el.innerHTML = Math.round(conditions.temperature * 1.8 + 32).toString() + '&deg;F';
    });
  });

  req.end();
}

displayTemperature();
