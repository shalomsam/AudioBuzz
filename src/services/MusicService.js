import { Config } from '../config/index';

class MusicService {

  static async getTracks (library = 'mixed', location = 'us') {
    const url = `${Config.baseUrl}/${library}-topchart/${location}`;
    return await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'default',
      },
    })
    .then((response) => response.json());
  }

}

export { MusicService };
