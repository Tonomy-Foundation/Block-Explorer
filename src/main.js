// main.js
import { createApp } from 'vue';
// eslint-disable-next-line no-restricted-imports
import App from './App.vue';
// eslint-disable-next-line no-restricted-imports
import store from './store';

const app = createApp(App);
app.use(store);
app.mount('#app');
