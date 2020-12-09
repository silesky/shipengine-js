/* validate_address.ts */
/* initialize */
const ShipEngine = require('shipengine');

const shipengine = ShipEngine('my_api_key');

/* validate address args */

const isValid = await shipengine.validateAddress({
  street: '1 E 161 St',
  cityLocality: 'The Bronx',
  postalCode: '10451',
  stateProvince: 'NY',
  country: 'US',
});

console.log(isValid ? 'valid!' : 'invalid!');

/* validate address service */
const [isValid1, isValid2] = shipengine.addresses.validate([
  {
    street: '1 E 161 St',
    cityLocality: 'The Bronx',
    stateProvince: 'NY',
    postalCode: '10451',
    country: 'US',
  },
  {
    street: ['4009 Marathon Blvd', 'Suite 200'],
    cityLocality: 'The Bronx',
    stateProvince: 'TX',
    country: 'US',
  },
]);

console.log(isValid1 && isValid2 ? 'all are valid' : 'some are invalid');