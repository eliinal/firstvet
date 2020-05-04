<template>
  <div id="app" class="container is-fluid">
    <h1 class="title has-text-centered">Survey</h1>
    <router-view />
  </div>
</template>

<script>
  

  export default {
    name: 'app',
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
