<template>
  <div id="app" class="container is-fluid">
    <h1 class="title has-text-centered">Survey</h1>
    <survey-container :questions="questions" /> 
  </div>
</template>

<script>
  import SurveyContainer from './components/SurveyContainer.vue'

  export default {
    name: 'app',
    components: {
      SurveyContainer,
    },
    data() {
      return {
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
            name: 'Do you have anything other you wish to tell us?',
            type: 'freetext',
            answer: ''
          },
          {
            id: 5,
            name: 'This is a test question',
            type: 'radio',
            options: ["Hej", "Hoj", "Hehehe"],
            answer: ''
          },
            {
            id: 6,
            name: 'What kind of animals do you have?',
            type: 'checkbox',
            options: ["Cat3", "Dog5", "Horse7", "Rodent", "Fish", "Bird", "Bunny8"],
            answer: []
          },
        ],
      }
    },
    methods: {
  
    }
  }
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";
  $firstvet-primary: #101C4E;
  $firstvet-primary-invert: findColorInvert($firstvet-primary);
  $firstvet-secondary: #F46178;
  $firstvet-secondary-invert: findColorInvert($firstvet-secondary);  

  $colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "firstvet-primary": ($firstvet-primary, $firstvet-primary-invert),
    "firstvet-secondary": ($firstvet-secondary, $firstvet-secondary-invert)
);

  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  button {
    background: #101C4E;
    border: 1px solid #101C4E;
    color: white;
  }

  button:hover {
    background: rgba(16,28,78,0.9);
    border: 1px solid rgba(16,28,78,0.9);
  }

  .title {
    margin-top: 3rem;
  }

  body {
    font-family: Lato, sans-serif;
  }

  html {
    background: #CEECED;
  }
</style>
