<template>
  <amp-selector role="tablist" layout="container" class="ampTabContainer">
    <slot></slot>
  </amp-selector>
</template>


<script>
export default {
  head: {
    script: [
      { hid: "amp-selector", 'custom-element': "amp-selector", src: "https://cdn.ampproject.org/v0/amp-selector-0.1.js", async: '' },
    ]
  }
}
</script>


<style>
.ampTabContainer {
  display: flex;
  flex-wrap: wrap;
}
</style>
