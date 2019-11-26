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
- `FACEBOOK_APP_ID` (string): ID of the app created on Facebook
- `FACEBOOK_APP_SECRET` (string): Secret of the app created on Facebook
- `FACEBOOK_CALLBACK_URL` (string): Callback URL after authenticated
- `JWT_SECRET` (string): Secret to authenticate jwt

### API Routes

#### 1. `/api/user-manager`

> Proxy to [user manager service](https://github.com/night-watch-project/user-manager#routes)

#### 2. `/api/watch-manager`

> Proxy to [watch manager service](https://github.com/night-watch-project/watch-manager#routes)

### Root Routes

#### 1. `/auth/facebook`

> authentication with facebook's user account

#### 2. `/auth/facebook/cb`

> callback after handle authentication with facebook
