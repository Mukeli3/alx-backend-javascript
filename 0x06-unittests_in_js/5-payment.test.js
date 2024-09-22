const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consSpy;
    
  // runs before each test
  beforeEach(() => {
    consSpy = sinon.spy(console, 'log');
  });

  // after
  afterEach(() => {
    consSpy.restore();
  });

  it('logs "The total is: 120" and calls console once with 100 and 20 as inputs') => {
    sendPaymentRequestToApi(100, 20);
    expect(consoSpy.calledOnce).to.be.true;
    expect(consSpy.calledWith('The total is: 120')).to.be.true;
  });
  it('logs "The total is: 20" call console once with 10 and 10 as inputs', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consSpy.calledOnce).to.be.true;
    expect(consSpy.calledWith('The total is: 20')).to.be.true;
  });
});
