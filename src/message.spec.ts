import message from './message';

it('should have the message "Hello world"', () => {
  expect(message).toMatchInlineSnapshot(`"Hello World"`);
});
