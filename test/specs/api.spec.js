// @ts-check
const { ShipEngine } = require('../../cjs/index');
const { Hoverfly } = require('../utils/Hoverfly');
const { expect } = require('chai');
const constants = require('../utils/constants');
/**
 * @typedef { import('../../src/services/service-factory').ServiceAPI } ServiceAPI
 */

const fixtures = {
  yankeeStadium: {
    // success
    street: ['1 E 161 St'],
    country: 'US',
    cityLocality: 'The Bronx',
    postalCode: '10451',
    stateProvince: 'NY',
  },
  astroDome: {
    // verified with warning
    // "There was a change or addition to the state/province"
    street: ['501 Crawford St, Houston'],
    country: 'USA',
    cityLocality: 'TX',
    postalCode: '77002',
    stateProvince: 'US',
  },
  dodgersStadium: {
    // error
    // "Invalid City, State, or Zip"
    street: ['1000 Elysion Ave'],
    country: 'US',
    cityLocality: 'Los Angeles',
    postalCode: '90012',
    stateProvince: 'CA',
  },
  wrigleyField: {
    // unverified
    // "country_code is not currently a supported country"
    street: ['1060 W Addison St'],
    country: 'ABC123',
    cityLocality: 'Chicago',
    postalCode: '60613',
    stateProvince: 'IL',
  },
};

describe('API', () => {
  /** @type { ServiceAPI } **/
  let api;

  before(async () => {
    await Hoverfly.start();
    api = ShipEngine({
      apiKey: 'myApiKey',
      baseUrl: `${constants.hoverflyBaseUrl}/v1`,
    });
  });
  after(async () => {
    await Hoverfly.stop();
  });
  describe('hoverfly - tags', () => {
    before(async () => {
      await Hoverfly.import('v1/tags.json');
    });
    it('should create tag / return created tag', async () => {
      const res = await api.createTag('foo');
      expect(res.name).to.eq('foo');
    });
    it('should have an api key', async () => {
      const res = await api.createTag('foo');
      expect(res.name).to.eq('foo');
    });
  });

  describe('addresses', () => {
    before(async () => {
      await Hoverfly.import('v1/addresses.json');
    });
    describe('query', () => {
      it('should have no exceptions', async () => {
        const queryResult = await api.queryAddress(fixtures.yankeeStadium);
        expect(queryResult.exceptions).to.be.empty;
        expect(queryResult.normalized.country).not.to.be.empty;
        expect(queryResult.original.country).not.to.be.empty;
      });
      it('should have exceptions if no matched address', async () => {
        const queryResult = await api.queryAddress(fixtures.dodgersStadium);
        expect(queryResult.exceptions).not.to.be.empty;
        expect(queryResult.normalized).to.eq(undefined);
        expect(queryResult.original.country).to.eq(
          fixtures.dodgersStadium.country
        );
      });
    });
    describe('validate', () => {
      it('should be true if success', async () => {
        const queryResult = await api.validateAddress(fixtures.yankeeStadium);
        expect(queryResult).to.be.true;
      });
      it('should be true if only warning', async () => {
        const queryResult = await api.validateAddress(fixtures.astroDome);
        expect(queryResult).to.be.true;
      });
      it('should be false if error / no matched address', async () => {
        const queryResult = await api.validateAddress(fixtures.dodgersStadium);
        expect(queryResult).to.be.false;
      });
      it('should be false if unverified / no matched address', async () => {
        const queryResult = await api.validateAddress(fixtures.wrigleyField);
        expect(queryResult).to.be.false;
      });
    });
    describe('normalize', () => {
      it('should normalize if possible', async () => {
        const normalized = await api.normalizeAddress(fixtures.yankeeStadium);
        expect(normalized).contains({
          stateProvince: fixtures.yankeeStadium.stateProvince,
        });
      });
      it('should throw an error if invalid', async () => {
        try {
          await api.normalizeAddress(fixtures.dodgersStadium);
          expect.fail('should not reach here');
        } catch (err) {
          expect(err.message).to.contain('unable to normalize');
        }
      });
    });
  });
});
