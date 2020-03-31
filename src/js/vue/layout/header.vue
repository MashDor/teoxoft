<template lang="pug">
    header.header
        .header__account(v-if='userName')
            svg 
                use(href='icons/icons.svg#account')
            span Welcome, {{userName}}
        button.header__login(@click='userName ? userName = null : popupIsOpen = true')
            svg
                use(href='icons/icons.svg#logout')
            span {{userName ? 'Logout' : 'Login'}}
        .header__popup(v-if='popupIsOpen')
            h1 Enter your name
            input(type='text', v-model="userName")
            button.button(type="button", @click='popupIsOpen = false') Log in
</template>
<script>
export default {
    data() {
        return {
            userName: null,
            popupIsOpen: false,
        }
    }
}
</script>