import { CamelcaseToWordPipe } from './camelcase-to-word.pipe';

describe('CamelcaseToWordPipe', () => {
  it('create an instance', () => {
    const pipe = new CamelcaseToWordPipe();
    expect(pipe).toBeTruthy();
  });
});
