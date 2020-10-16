<template>
<div class="container">
    <h1>Agregar</h1>
    <Form></Form>
</div>
</template>

<script>
import Form from '../components/Form'
import {
    mapActions
} from 'vuex'

export default {
    name: 'Agregar',
    components: {
        Form
    },
}
</script>
