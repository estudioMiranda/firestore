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
    created() {
        this.getObras(this.id)
    },
    methods: {
        ...mapActions(['getObras', 'editObra'])
    },
    computed: {
        ...mapState(['obra'])
    }
}
</script>
