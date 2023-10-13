import { trimText } from '../trimText';

describe('trimText function', () => {
  it('should trim text correctly', () => {
    const text = 'This is a long text that needs to be trimmed.';
    const limit = 20;
    const trimmed = trimText(text, limit);
    expect(trimmed).toEqual('This is a long text ...');
  });

  it('should not trim short text', () => {
    const text = 'Short text.';
    const limit = 20;
    const trimmed = trimText(text, limit);
    expect(trimmed).toEqual(text);
  });

  it('should return empty string for empty input', () => {
    const text = '';
    const limit = 20;
    const trimmed = trimText(text, limit);
    expect(trimmed).toEqual('');
  });
});
