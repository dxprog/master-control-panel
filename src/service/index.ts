import * as express from 'express';
import * as https from 'https';

import { readConditions } from './services/dht11';
import { getCurrentConditions } from './services/nws';

const WEATHER_STATION = 'KSFO';

const app = express();

app.get('/conditions', async (req, res) => {
  const [ sensorConditions, nwsConditions ] = await Promise.all([
    readConditions(),
    getCurrentConditions(WEATHER_STATION)
  ]);

  res.json({
    sensor: sensorConditions,
    nws: nwsConditions
  });
});

app.listen(4444, () => {
  console.log('temperature service started');
});