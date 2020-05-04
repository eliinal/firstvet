<template>
  <div class="survey-container">
    <div 
      v-if="submitted == true" 
    >
      <h3 class="subtitle has-text-centered">Summary</h3>
      <Summary :questions="questions" />
    </div>
    <form v-else>
      <div v-for="question in questions" :key="question.id" class="inputs">
          <label 
            for="question.id"
            class="subtitle has-text-centered"
          >
            {{question.id}}. {{question.name}}
          </label>
          <div
            v-if="question.type === 'radio'"
            class="block"
          >
            <b-radio 
              v-for="n in question.options.length"
              :key="n"
              v-model="question.answer"
              type="is-firstvet-primary"
              name="option"
              :native-value="question.options[n-1]"
            >
              {{question.options[n-1]}}
            </b-radio> 
          </div>
          <div v-else-if="question.type === 'checkbox'"
            class="block"
          >
            <b-checkbox 
              v-for="n in question.options.length"
              :key="n"
              v-model="question.answer"
              type="is-firstvet-primary"
              :native-value="question.options[n-1]"
            >  
              {{question.options[n-1]}}
            </b-checkbox>
          </div>
          <div 
            v-else-if="question.type === 'scale'" class="slider"
          >
            <b-slider 
              rounded
              :min=min
              :max=max
              v-model="question.answer"
              type="is-firstvet-primary"
            >
            </b-slider>
          </div>  
          <div
            v-else-if="question.type === 'freetext'"
            class="block"
          >
            <b-input 
              maxlength="200" 
              type="textarea"
              id="freetext"
              v-model="question.answer"
            >
            </b-input>
          </div>
      </div>
      <div class="button-container">
        <b-button 
          type="is-firstvet-secondary"
          size="is-medium"
          @click="clearData"
        >
          Cancel
        </b-button>
        <b-button
          type="is-firstvet-primary"
          size="is-medium"
          @click="handleSubmit"
        >
          Submit
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
  import Summary from './Summary.vue'

  export default {
    name: 'survey-container',
    components: {
      Summary
    },
    props: {
        questions: Array,
    }, 
    data () {
      return {
        min: 0,
        max: 10,
        submitted: false,
      }
    }, 
    methods: {
      handleSubmit() {
        this.submitted = true
      },
      clearData() {
        this.questions.forEach(question => {
          if (question.type === 'radio' || question.type === 'freetext') {
            question.answer = ''
          } else if (question.type === 'checkbox') {
            question.answer = []
          } else if (question.type === 'scale') {
            question.answer = 0
          }
        })
      }
    }
  }
</script>

<style scoped>
  .survey-container {
    margin-left: 10rem;
    margin-right: 10rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    background: #E2F2F3;
  }

  .inputs {
    margin-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .block, .slider {
    margin-top: 1rem;
  }

  .button-container {
    margin-top: 1rem;
    float: center;
  }

  #freetext {
    resize: none;
    outline: none;
  }

  #radio, #checkbox {
    margin: 0 0.5rem 1rem 0;
    transform: scale(1.5);
  }
</style>