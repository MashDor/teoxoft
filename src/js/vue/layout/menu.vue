<template lang="pug">
    .menu
        button(type='button', :class="{'menu__button_active': activeSection == 0}", @click="activeSection=0").menu__button
            svg.menu__icon
                use(href='icons/icons.svg#dashboard')
            span.menu__title Dashboard
        button(type='button', :class="{'menu__button_active': activeSection == 1}", @click="activeSection=1").menu__button
            svg.menu__icon
                use(href='icons/icons.svg#add-contracts')
            span.menu__title Add Contract
        button(type='button', :class="{'menu__button_active': activeSection == 2}", @click="activeSection=2").menu__button
            svg.menu__icon
                use(href='icons/icons.svg#open-tasks')
            span.menu__title Open Tasks
</template>
<script>
export default {
    data() {
        return {
            activeSection: 1,
        }
    },
    watch: {
        activeSection() {
            this.$parent.active = this.activeSection;
        }
    }
}
</script>