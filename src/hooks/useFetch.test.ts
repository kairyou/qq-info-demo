import { act, renderHook, waitFor } from '@testing-library/react';
import useFetch from 'hooks/useFetch';

// jest.setTimeout(5000);
describe('test useFetch', () => {
  test('should fetch data', async () => {
    // render a hook within a test React component
    const { result } = renderHook(() =>
      useFetch('https://jsonplaceholder.typicode.com/todos/1', {})
    );
    const { fetch } = result.current;
    // await act(async () => await fetch());
    act(() => {
      fetch();
    });
    // wait for the hook to return data
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data).not.toBeNull();
  });
});
