import * as express from 'express';
import * as sensor from 'node-dht-sensor';

const app = express();

app.get('/conditions', (req, res) => {
  sensor.read(11, 4, (err: Error, temperature?: number, humidity?: number) => {
    if (!err) {
      res.json({
        temperature,
        humidity
      });
    }
  });
});

app.listen(4444, () => {
  console.log('temperature service started');
});