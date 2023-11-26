import MOCKED_DATA from '../mocked-data.json';

// A mock function to mimic making an async request for data
export function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: [MOCKED_DATA] }), 500)
  );
}
