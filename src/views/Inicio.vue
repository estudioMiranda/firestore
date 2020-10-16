<template>
<div>
    <h1>Lista de Tareas</h1>
    <router-link to='/agregar'>
        <b-button class="mt-2" variant="success">Añadir</b-button>
    </router-link>
    <ul>
        <li v-for="(item, index) in obras" :key="index">
            {{item.id}} - {{item.autor}}
            <router-link :to="{name: 'Editar', params: {id: item.id}}">
                <b-button class="mt-2" variant="success">Editar</b-button>
            </router-link>
            <button @click="deleteObra(item.id)">Eliminar</button>
        </li>
    </ul>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex'
export default {
    name: 'Inicio',
    created() {
        this.getObras()
    },
    methods: {
        ...mapActions(['getObras', 'deleteObra'])
    },
    computed: {
        ...mapState(['obras'])
    }
}
</script>
