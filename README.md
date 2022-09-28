# 💲 New Zealand budget tracker

I spend too much money 😶. I want to save more. This exists to help get closer to the dream of affording a house deposit in New Zealand. 😑

## ⚡ Getting Started

### 🤝Third party platform API

Im using [Akahu](https://www.akahu.nz/) which provides financial information from New Zealand banks.

To properly use this app you will need an Akahu account. See [here](https://developers.akahu.nz/docs/personal-apps) for more information

- Copy/duplicate the `.env.example` and name it `.env.local`
- Add Akahu details to `env.local`.

### 🚀 Running the app

```bash
npm run dev
```

## Technology used

- [NextJS](https://nextjs.org/) with ReactJS.
- [chakra-ui](https://chakra-ui.com/) as component library.
- [react-query](https://react-query-v3.tanstack.com/) for handling API requests with [axios](https://axios-http.com/).
- [jotai](https://jotai.org/) for state management.

### For testing

- [react-testing-library](https://testing-library.com/) test the way the user would interact with the app.
- [vitest](https://vitest.dev/) test runner. Faster alternative to jest.
- [msw](https://mswjs.io/) for mocking APIs for tests.

## 🔧 TODO and maybe coming soon™

- Find good default images for credits/debits.
- Add pending transactions from Akahu.
- Update stats to compare last month to this month.
- Set budget goals for categories.
