<template>
  <div>
    <header class="header">
      <h1 class="header-title">
        <a href="/">
          typesense-vue-instanstantsearch-demo
        </a>
      </h1>
      <p class="header-subtitle">
        using
        <a href="https://github.com/algolia/vue-instantsearch">
          Vue InstantSearch + Typesense Instantsearch adapter
        </a>
      </p>
    </header>

    <div class="container">
      <ais-instant-search :search-client="searchClient" index-name="books">
        <ais-configure :hits-per-page.camel="8" />
        <div class="search-panel">
          <div class="search-panel__results">
            <div class="searchbox">
              <ais-search-box placeholder="" />
            </div>
            <ais-hits>
              <template slot="item" slot-scope="{ item }">
                <article>
                  <img
                    :src="item['image_url']"
                    :alt="item['name']"
                    height="100"
                  />
                  <h1>
                    <ais-highlight
                      :hit="item"
                      attribute="title"
                      class="hit-name"
                    />
                  </h1>
                  <div class="hit-authors">
                    <span
                      v-for="(fieldValue, index) in item['authors']"
                      :key="`highlight-${fieldValue}-${index}`"
                    >
                      <ais-highlight
                        :hit="item"
                        :attribute="`authors.${index}`"
                      /><template v-if="index < item['authors'].length - 1"
                        >,
                      </template>
                    </span>
                  </div>
                  <div class="hit-publication-year">
                    {{ item['publication_year'] }}
                  </div>
                  <div class="hit-rating">{{ item['average_rating'] }}/5</div>
                </article>
              </template>
            </ais-hits>

            <div class="pagination">
              <ais-pagination />
            </div>
          </div>
        </div>
      </ais-instant-search>
    </div>
  </div>
</template>

<script>
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'xyz', // Be sure to use an API key that only allows searches, in production
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  //  filterBy is managed and overridden by InstantSearch.js. To set it, you want to use one of the filter widgets like refinementList or use the `configure` widget.
  additionalSearchParameters: {
    queryBy: 'title,authors',
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

export default {
  data() {
    return {
      searchClient,
    };
  },
};
</script>

<style>
body,
h1 {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

em {
  background: cyan;
  font-style: normal;
}

.header {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(to right, #4dba87, #2f9088);
  color: #fff;
  margin-bottom: 1rem;
}

.header a {
  color: #fff;
  text-decoration: none;
}

.header-title {
  font-size: 1.2rem;
  font-weight: normal;
}

.header-title::after {
  content: ' ▸ ';
  padding: 0 0.5rem;
}

.header-subtitle {
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.search-panel {
  display: flex;
}

.search-panel__filters {
  flex: 1;
}

.search-panel__results {
  flex: 3;
}

.ais-Highlight-highlighted {
  color: inherit;
  font-size: inherit;
}

.searchbox {
  margin-bottom: 2rem;
}

.pagination {
  margin: 2rem auto;
  text-align: center;
}

.hit-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 10px;
}

.hit-authors {
  margin-top: 3px;
  font-size: 0.8rem;
}

.hit-publication-year {
  font-size: 0.8rem;
  margin-top: 20px;
}

.hit-rating {
  margin-top: 3px;
  font-size: 0.8rem;
}

.ais-Hits-item {
  padding: 30px;
  box-shadow: none;
  border: 1px solid lighten(lightgray, 8%);
}
</style>
