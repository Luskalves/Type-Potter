import { expect } from 'chai';
import Muggle from '../src/humans/muggle';
describe('testando o muggles', () => {
  it('testando se o muggles existe', () => {
    const muggle = new Muggle('name', 33, true);
    expect(muggle).haveOwnProperty('name')
  })
})