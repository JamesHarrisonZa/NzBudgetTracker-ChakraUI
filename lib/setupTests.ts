// Add global imports for tests
import '@testing-library/jest-dom';

import React from 'react';
global.React = React;

// MSW
import { server } from '../mocks/server.js';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
