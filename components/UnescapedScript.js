import Vue from "vue";

var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
    ? getChildrenTextContent(node.children)
    : node.text
  }).join('')
}

/* Using this component avoids the problem of Nuxt swallowing nested <template> elements. */
export default Vue.component('unescaped-script', {
  render: function (createElement) {
    return createElement(
      'script',
      {
        attrs: {
          type: this.type
        },
        domProps: {
          innerHTML: getChildrenTextContent(this.$slots.default)
        }
      });
  },
  props: {
    type: { type: String, required: true }
  }
})
