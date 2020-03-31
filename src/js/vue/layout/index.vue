<template lang="pug">
    .index
        .index__menu
            left-menu
        .index__header
            main-header
        .index__contant
            h1(v-if="active==0") Dashboard
            wizard(v-if="active==1")
            h1(v-if="active==2") Open Tasks
</template>
<script>
import Wizard from './wizard/index.vue'
import Header from './header.vue';
import Menu from './menu.vue';
export default {
    components: {
        'main-header': Header,
        'left-menu': Menu,
        'wizard': Wizard,
    },
    data() {
        return {
            active: 1,
        }
    }
}
</script>