<template>
<div>
    <h1>Editar</h1>
    {{id}} - {{obra}}
    <form @submit.prevent="editObra(obra)">
        <input type="text" v-model="obra.autor">
        <button>Editar</button>
    </form>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex'
export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getObra', 'editObra'])
    },
    created() {
        this.getObra(this.id)
    },
    computed: {
        ...mapState(['obra'])
    }
}
</script>
