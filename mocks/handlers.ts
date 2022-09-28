import { rest } from 'msw';
import { getFakeTransactions } from './responses';

export const handlers = [
  rest.get('/api/akahu', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getFakeTransactions()));
  }),
];
