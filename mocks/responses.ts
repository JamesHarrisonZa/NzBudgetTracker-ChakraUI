export const getFakeTransactions = () => {
  return [
    {
      date: '2022-08-28T12:00:00.000Z',
      amount: 42.0,
      type: 'CREDIT',
      description: 'Direct Credit from partner',
      merchantName: null,
      categories: null,
      logoUrl: null,
    },
    {
      date: '2022-08-28T12:00:00.000Z',
      amount: -20.0,
      type: 'DEBIT',
      description: 'POS W/D 199.00ZAR @ 10.2366 conversion rate',
      merchantName: 'Netflix',
      categories: [
        { name: 'Entertainment streaming services', type: 'nzfcc:base' },
        { name: 'Radio & television services', type: 'nzfcc:group' },
        { name: 'Lifestyle', type: 'nzfcc:pfm' },
      ],
      logoUrl:
        'https://static.akahu.io/outlets/merchant_cji7ykevs0002jnms0l7yynra_logo.png',
    },
    {
      date: '2022-08-28T12:00:00.000Z',
      amount: -50.42,
      type: 'DIRECT DEBIT',
      description: 'Direct Debit -MERIDIAN ENERGY LIMITED',
      merchantName: 'Meridian Energy',
      categories: [
        { name: 'Electricity and gas', type: 'nzfcc:base' },
        { name: 'Electricity gas & water supply', type: 'nzfcc:group' },
        { name: 'Utilities', type: 'nzfcc:pfm' },
      ],
      logoUrl:
        'https://static.akahu.io/outlets/merchant_cjjwbxcvq003iguzywv6il6vh_logo.png',
    },
    {
      date: '2022-08-26T07:28:00.000Z',
      amount: -25.42,
      type: 'EFTPOS',
      description: 'POS W/D Super Liquor -19:28',
      merchantName: 'Super Liquor',
      categories: [
        { name: 'Beer, Wine & Liquor', type: 'nzfcc:base' },
        { name: 'Specialised food retailing', type: 'nzfcc:group' },
        { name: 'Food', type: 'nzfcc:pfm' },
      ],
      logoUrl:
        'https://static.akahu.io/outlets/merchant_cjk7c9uej003ibyojodd0zwq0_logo.png',
    },
    {
      date: '2022-08-26T07:12:00.000Z',
      amount: -20.42,
      type: 'EFTPOS',
      description: 'POS W/D THE CURRY MAS-19:12',
      merchantName: 'The Curry Master',
      categories: [
        { name: 'Cafes & restaurants', type: 'nzfcc:base' },
        { name: 'Cafes & restaurants', type: 'nzfcc:group' },
        { name: 'Lifestyle', type: 'nzfcc:pfm' },
      ],
      logoUrl:
        'https://static.akahu.io/outlets/merchant_ck2kxmrlw002qmpzy6p269k13_logo.png',
    },
    {
      date: '2022-08-25T12:00:00.000Z',
      amount: -31.42,
      type: 'PAYMENT',
      description:
        'PAY NZ GARDEN SERVICES LIMITED T/A AUCKLAND GARDEN SERVICES',
      merchantName: null,
      categories: null,
      logoUrl: null,
    },
    {
      date: '2022-08-24T12:00:00.000Z',
      amount: -42.42,
      type: 'DIRECT DEBIT',
      description: 'Direct Debit -WATERCARE SERVICES LIMITED',
      merchantName: 'Watercare',
      categories: [
        { name: 'Electricity and gas', type: 'nzfcc:base' },
        { name: 'Electricity gas & water supply', type: 'nzfcc:group' },
        { name: 'Utilities', type: 'nzfcc:pfm' },
      ],
      logoUrl:
        'https://static.akahu.io/images/merchant_cktxh6jal000409kz5zwrarlp_logo.png',
    },
    {
      date: '2022-08-24T12:00:00.000Z',
      amount: -560.42,
      type: 'STANDING ORDER',
      description: 'AP#20132540 TO STEPHEN',
      merchantName: null,
      categories: null,
      logoUrl: null,
    },
    {
      date: '2022-08-24T12:00:00.000Z',
      amount: -42.42,
      type: 'DEBIT',
      description: 'AA INSURANCE AUCKLAND',
      merchantName: 'AA Insurance',
      categories: [
        { name: 'Insurance', type: 'nzfcc:base' },
        { name: 'Other insurance', type: 'nzfcc:group' },
        { name: 'Household', type: 'nzfcc:pfm' },
      ],
      logoUrl:
        'https://static.akahu.io/outlets/merchant_cjha0rp9o000001p4urrgplql_logo.png',
    },
    {
      date: '2022-08-23T00:46:00.000Z',
      amount: -21.42,
      type: 'EFTPOS',
      description: 'POS W/D Ravenhill Caf-12:46',
      merchantName: 'Ravenhill Cafe',
      categories: [
        { name: 'Cafes & restaurants', type: 'nzfcc:base' },
        { name: 'Cafes & restaurants', type: 'nzfcc:group' },
        { name: 'Lifestyle', type: 'nzfcc:pfm' },
      ],
      logoUrl:
        'https://static.akahu.io/outlets/merchant_ck5wxt21x000d0azy4ckjhx7i_logo.png',
    },
    {
      date: '2022-08-23T00:37:00.000Z',
      amount: -42.42,
      type: 'EFTPOS',
      description: 'POS W/D COUNTDOWN BIR-12:37',
      merchantName: 'Countdown',
      categories: [
        { name: 'Grocery Stores and Supermarkets', type: 'nzfcc:base' },
        { name: 'Supermarket and grocery stores', type: 'nzfcc:group' },
        { name: 'Food', type: 'nzfcc:pfm' },
      ],
      logoUrl:
        'https://static.akahu.io/outlets/merchant_cjgkhyhvg000001n31lpr1zkt_logo.png',
    },
  ];
};
