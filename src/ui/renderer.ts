import * as http from 'http';

import { TemperatureInfo } from '../common/interfaces/temperature-info';

const UPDATE_INTERVAL = 60 * 1000;

let updateTimer: NodeJS.Timer;

function displayTemperature() {
  const req = http.request('http://localhost:4444/conditions', res => {
    let buffer: string = '';
    res.setEncoding('utf8');
    res.on('data', (chunk: string) => buffer += chunk);
    res.on('end', () => {
      const data: any = JSON.parse(buffer);
      const conditions: TemperatureInfo = data.sensor;
      const nws: any = data.nws;

      const tempEl = document.getElementById('currentTemp');
      tempEl.innerHTML = Math.round(conditions.temperature * 1.8 + 32).toString() + '&deg;F';

      const iconEl: HTMLImageElement = <HTMLImageElement> document.getElementById('currentConditionIcon');
      const conditionTextEl: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('currentConditionText');
      const conditionsIcon = /land\/(day|night)\/([\w]+)/.exec(nws.icon);
      iconEl.src = `images/${conditionsIcon[2]}-${conditionsIcon[1]}.svg`;
      conditionTextEl.innerHTML = nws.textDescription;

      clearTimeout(updateTimer);
      updateTimer = setTimeout(displayTemperature, UPDATE_INTERVAL);
    });
  });

  req.end();
}

displayTemperature();
