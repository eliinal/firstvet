<template>
    <div>
        <div 
            v-for="question in questions"
            :key="question.id"
        >
            <h3 class="subtitle has-centered-text">{{question.id}}. {{question.name}}</h3>
            <div v-if="typeof question.answer == 'object' ||
                typeof question.answer == 'Array'"
                class="answer"
            >
                {{ question.answer.join(', ') }}
            </div>
            <div v-else class="answer">
                {{question.answer}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'summary',
    props: {
        questions: Array
    }, 
}
</script>

<style lang="scss" scoped>
    .answer {
        margin-bottom: 1rem;
    }

</style>