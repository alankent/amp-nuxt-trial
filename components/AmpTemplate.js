import Vue from "vue";

/* Using this component avoids the problem of Nuxt swallowing nested <template> elements. */
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
