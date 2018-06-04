import * as request from 'request-promise-native';

export function nwsApiCall(station: string, endpoint: string): Promise<any> {
  return request({
    uri: `https://api.weather.gov/stations/${station}/${endpoint}`,
    headers: {
      'User-Agent': 'master-control-panel weather conditions service'
    },
    json: true
  });
}

/**
 * Retrieves and returns the current observations for a station.
 *
 * @param station The station to retrieve current conditions from
 */
export function getCurrentConditions(station: string): Promise<any> {
  return nwsApiCall(station, 'observations/current')
    .then(data => data.properties);
}