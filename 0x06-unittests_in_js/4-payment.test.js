const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let cnStub;
  let consSpy;

  beforeEach(() => {
    cnStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consSpy = sinon.spy(console, 'log'); // spy on console log
  });
  afterEach(() => {
    cnStub.restore(); // restore the stub
    consSpy.restore(); // restore Spy
  });

  it('calls Utils.calculateNumber with "SUM", 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(cnStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    expect(consSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
