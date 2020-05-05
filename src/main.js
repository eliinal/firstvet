import Vue from 'vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import Vuex from 'vuex';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(Vuex)

import Summary from './components/Summary.vue'
import Survey from './components/Survey.vue' 
import App from './App.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: Survey, name: "home" },
    { path: '/summary', component: Summary, name: "summary"}]
})

const store = new Vuex.Store({
  state: {
    questions: [
      {
        id: 1,
        name: 'What kind of animals do you have?',
        type: 'checkbox',
        options: ["Cat", "Dog", "Horse", "Rodent", "Fish", "Bird", "Bunny"],
        answer: []
      },
      { 
        id: 2,
        name: 'Would you recommend FirstVet to a friend?',
        type: 'radio',
        options: ["Yes", "No", "Not sure"],
        answer: ''
      },
      {
        id: 3,
        name: 'How pleased were you with the help you received (1-10)?',
        type: 'scale',
        answer: 0
      },
      {
        id: 4,
        name: 'Why were you in contact with us?',
        type: 'freetext',
        answer: ''
      },
      {
        id: 5,
        name: 'Where did you hear about us?',
        type: 'checkbox',
        options: ["Vet recommendation", "Social media", "News article", "Advertising", "Other"],
        answer: []
      },
      {
        id: 6,
        name: 'Do you have anything other you wish to tell us?',
        type: 'freetext',
        answer: ''
      },
    ],
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
