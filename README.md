# typesense-vue-instantsearch-demo

This is a demo that shows you a quick search interface that was built with Vue and [typesense-instantsearch-adapter](https://github.com/typesense/typesense-instantsearch-adapter).

It was created using `npx create-instantsearch-app` and then [here's](https://github.com/typesense/typesense-vue-instantsearch-demo/commit/a3e3d4d3306746ab933ed6c3102d3e6427064c80#diff-7a7a37b12ee1265d7e27577ec286120d2cbc0940908635e264a2be44ccb9a8a0R72-R99) the key change that lets you use the app with Typesense:

Read the accompanying walk-through here: [https://typesense.org/docs/latest/guide/search-ui-components.html](https://typesense.org/docs/latest/guide/search-ui-components.html).

Here are more live demos that use the Instantsearch adapter: [https://typesense.org/docs/overview/demos.html](https://typesense.org/docs/overview/demos.html)

## Get started

To run this project locally, install the dependencies, start Typesense Server, populate the index and run the app server:

```sh
$ nvm use
$ npm install
$ npm run typesenseServer
```

```sh
$ npm run populateTypesenseIndex
$ npm start
```

Open http://localhost:3000 to see your app.
