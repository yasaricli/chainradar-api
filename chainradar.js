import request from 'request';
import _ from 'underscore';

export class Api {
  constructor(options={}) {
    this.options = _.defaults(options, {
      apiUrl: 'http://chainradar.com/api',
      version: 'v1',

      // Coins
      // Each API request is relative to a coin, so there is a required parameter coin: string.
      // aeon, bbr, bcn, btc, dsh, fcn, mcn, qcn, duck, mro, rd
      coin: 'bcn'
    });
  }

  // generate object key: value to URL /value/value/value/
  objectToUrl(o) {
    return _.map(o, (value, key) => value).join('/');
  }

  // Generate api endpoint URL
  getUrl(endpoint) {
    const { apiUrl, version, coin } = this.options
    return `${apiUrl}/${version}/${coin}/${endpoint}`;
  }

  get(endpoint, callback) {
    request.get(this.getUrl(endpoint), (err, res, body) => {
      return callback(JSON.parse(body));
    });
  }

  /* Status {coin}/status
   * Get actual coin statistics data.
   * coin: string Coin symbol alias
   */
  getStatus(callback) {
    return this.get('status', callback);
  }

  /*
   * Get blocks
   * Header data in height range.
   * {coin}/blocks/range/{from}/{to}/header
   * coin: string Coin symbol alias .
   * from: integer Blocks starting height.
   * to: integer Blocks ending height.
   */
  getBlocksHeader(o, callback) {
    return this.get(`blocks/range/${this.objectToUrl(o)}/summary`, callback);
  }

  /*
   * Block header
   * Get block header data by height or hash.
   * coin: string Coin symbol alias
   * height|hash: string Block height or hash.
   */
  getBlockHeader(heightOrHash, callback) {
    return this.get(`blocks/${heightOrHash}/summary`, callback);
  }

  /*
   * Blocks data
   * Get blocks full data in height range.
   * coin: string Coin symbol alias.
   * from: integer Blocks starting height.
   * to: integer Blocks ending height.
   */
  getBlocksData(o, callback) {
    return this.get(`blocks/range/${this.objectToUrl(o)}/full`, callback);
  }

  /*
   * Block data
   * Get block data by height or hash.
   * coin: string Coin symbol alias (see supported coins list).
   * height|hash: string Block height or hash.
   */
  getBlockData(heightOrHash, callback) {
    return this.get(`blocks/${heightOrHash}/full`, callback);
  }

  
}
