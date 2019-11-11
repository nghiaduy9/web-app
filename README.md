# Night Watch web app

## INSTALLATION

### Requirements

- Node.js >= 8
- Dotenv files: `.env.production` and/or `.env.development`

### Instructions

```bash
$ yarn install
$ yarn build
$ yarn start # yarn dev for development
```

## DOCUMENTATION

## Environment Variables

- `NODE_ENV` (string): "development" or "production" environment
- `PORT` (number): Port number to run the server
- `WATCH_MANAGER_ADDRESS` (string): Address of watch manager service
- `USER_MANAGER_ADDRESS` (string): Address of user manager service

### API Routes

#### `/api/watch-manager`

> Redirect to [watch manager service routes](https://github.com/night-watch-project/watch-manager#routes)
