<template>
    <div>
        <component v-bind:is="layout()"></component>
    </div>
</template>

<script>
import DefaultLayout from './DefaultLayout.vue';
import NoneLayout from './NoneLayout.vue';
export default {
    components: {
        DefaultLayout,
        NoneLayout
    },
    methods: {
        layout() {
            let layout = this.$route.meta.layout ? this.$route.meta.layout + '-layout' : 'default-layout';
            return layout;
        }
    }
}
</script>
