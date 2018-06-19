import Vue from "vue";

export default Vue.component('amp-template', {
    render: function (createElement) {
        return createElement(
            'template',
            { attrs: {type: this.type } },
            this.$slots.default)
    },
    props: {
        type: { type: String, required: true }
    }
})