### Description

Angularjs application with sign in based on jwt authentification. After sign in the jwt will be used as authorization header for
accessing the rest api. There is an interceptor which will modify the request adding the Authorization Header.
Technologies user AngularJS, AngularJS Material, SCSS.
The build system is done with Webpack for development and generating the static content for production.
For more information see the packages.json regarding the depedencies used.

### Quick start

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

```

## Installing

* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. 
The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)
