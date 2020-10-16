<template>
<div>
    <b-form @submit.prevent="addObras( autor )">
        <b-form-input @submit.prevent="addObras( autor )" v-model="autor" placeholder="Introduce al autor"></b-form-input>
        <b-button class="mt-2" type="submit" variant="success">Añadir</b-button>
    </b-form>
    <div class="mt-2">Value: {{ autor }}</div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'

export default {
    name: 'Form',
    data() {
        return {
            autor: ''
        }
    },

    methods: {
        ...mapActions(['addObras'])
    }
}
</script>
