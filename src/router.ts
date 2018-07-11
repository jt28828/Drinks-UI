import Vue from 'vue';
import Router from 'vue-router';
import Drink from './views/Drink.vue';
import Create from './views/Create.vue';
import Manage from './views/Manage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'drink',
      component: Drink,
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage,
    },
  ],
});
