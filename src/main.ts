import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { analytics } from './directives/analytics';

const app = createApp(App);
app.directive('analytics', analytics);
app.use(router).mount('#app');
