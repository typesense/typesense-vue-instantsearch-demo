import App from './App.vue';
import { createApp } from 'vue';
import InstantSearch from 'vue-instantsearch/vue3/es';
const app = createApp(App).use(InstantSearch);
app.mount('#app');
