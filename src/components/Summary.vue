<template>
  <div class="summary-container">
    <div 
      v-for="question in this.$store.state.questions"
      :key="question.id"
      class="answers"
    >
      <h3 class="header">{{question.id}}. {{question.name}}</h3>
      <div 
        v-if="typeof question.answer == 'object' ||
        typeof question.answer == 'Array'"
        class="answer"
      >
          {{ question.answer.join(', ') }}
      </div>
      <div v-else class="answer">
          {{question.answer}}
      </div>
    </div>
    <b-button
      type="is-firstvet-primary"
      size="is-medium"
      @click="handleClick"
      class="returnBtn"
    >
      Return to survey
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'summary',
  props: {
    questions: Array
  }, 
  methods: {
    handleClick() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .summary-container {
    margin-left: 10rem;
    margin-right: 10rem;
    padding: 1rem 8rem;
    text-align: center;
    background: #E2F2F3;
  } 

  .answers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .header {
    font-size: 20px;
    margin-bottom: 0.5rem;
  }

</style>