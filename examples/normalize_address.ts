/* normalize_address.ts */
/* initialize */
import ShipEngine from 'shipengine';

const shipengine = ShipEngine('my_api_key');

/* normalize address args */
const address = await shipengine.normalizeAddress({
  street: ['1 E 161St'],
  country: 'US',
  cityLocality: 'The Bronx',
  stateProvince: 'NY',
});

console.log(`normalized street is: ${address.street}`);
console.log(`is residential: ${address.isResidential}`);

/* exception handling */
try {
  await shipengine.normalizeAddress({ street: '1234 Main St' });
} catch (err) {
  // do something with error
  console.error('caught!');
}

/* normalize address service */
const [addr1, addr2] = await shipengine.addresses.normalize([
  {
    street: '1234 Main St',
  },
  {
    street: ['1 E 161 St'],
    country: 'US',
    cityLocality: 'The Bronx',
    stateProvince: 'NY',
  },
]);

console.assert(addr1 === undefined, 'first address cannot be normalized');
console.assert(!!addr2, 'second address should be valid');
