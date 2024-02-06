// App.vue
<script lang="ts">
import { provide } from 'vue';
import { useStore, storeKey } from 'src/store';
console.log('App.vuew');
export default {
    name: 'App',
    setup() {
        provide(storeKey, useStore());
    },
};
</script>

<template>
<router-view />
</template>
