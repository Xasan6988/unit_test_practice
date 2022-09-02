const axios = requre('axios');
const Ajax = require('./async');

// Mock object for may catch request for backend and mock they response data
// In simple words - pseudo request
jest.mock('axios');

describe('Ajax: echo', () => {
  test('should return value async', async () => {
    const result = await Ajax.echo('some data');
    expect(result).toBe('some data');
  });
  test('should return value with promise', () => {
    Ajax.echo('some data').then(data => {
      expect(data).toBe('some data');
    });
  })
  test('should catch error with promise', () => {
    return Ajax.echo().catch(err => {
      expect(err).toBeInstanceOf(Error);
    });
  });
  test('should catch error async', async () => {
    expect.assertions(2);
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe('error');
      expect(e).toBeInstanceOf(Error);
    }
  });
});

describe('Ajax: GET', () => {

  let response;
  let todos;

  beforeEach(() => {
    todos = [
      {id: 1, name: 'Todo 1', completed: false}
    ];

    response = {
      data: {
        todos
      }
    }
  });

  test('should return data from backend', () => {
    // Define mock data to be returned from request
    axios.get.mockReturnValue(response);

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos);
    });
  });
});
