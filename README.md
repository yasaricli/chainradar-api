# chainradar-api


## Installation

```
npm install chainradar
```

## Usage

Importing:

```js
var ChainRadar = require('chainradar');
```

An instance of a api needs to be initialized before it can be used:

```js
var api = new ChainRadar(options)
```

Options:

  * `apiUrl` - API ENDPOINT **default: 'http://chainradar.com/api'**
  * `version` - CURRENT API VERSION **default: 'v1'**
  * `coin` - Each API request is relative to a coin, so there is a required parameter **default: bcn** 

#### Status

Get actual coin statistics data.

```js
api.getStatus((data) => {
  console.log(data.hash)
});
```

#### Blocks headers

Get blocks header data in height range.

```js
const blockOptions = {
  from: '100000',
  to: '100001'
};

api.getBlocksHeader(blockOptions, (data) => {
  console.log(data)
});
```

Parameters:

* from: integer Blocks starting height.
* to: integer Blocks ending height.

### Pre Publish

    npm run prepublish


### Limits
There are API requests count limits by IP for direct calls and by domain for AJAX calls.

#### ANONYMOUS
Direct calls - `100` requests from one IP in a 1 day.
AJAX calls - not allowed.

#### LINKED
If web-site adds a link to the [ChainRadar](https://chainradar.com/) and [inform us](https://chainradar.com/contact), we will increase its limits to both IP and domain.

Direct calls - `1500` requests from one IP in a 1 day.
AJAX calls - `30000` total requests referred to linked site domain in a 1 day.

#### PREMIUM
If Linked limits are not enough for your web-service, then you can [contact us](https://chainradar.com/contact) and we can discuss special limits.
