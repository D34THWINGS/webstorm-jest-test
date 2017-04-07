jest.unmock('../user');

const User = require('../user');

describe('User', () => {
  it('should construct user with firstName and lastName', () => {
    // Given
    const lastName = 'foo';
    const firstName = 'bar';

    // When
    const user = new User(firstName, lastName);

    // Then
    expect(user.firstName).toEqual(firstName);
    expect(user.lastName).toEqual(lastName);
  });
});