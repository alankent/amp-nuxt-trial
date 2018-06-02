<template>
  <amp-selector role="tablist" layout="container" class="ampTabContainer">
    <slot></slot>
  </amp-selector>
</template>


<script>
export default {
  head: {
    script: [
      { 'custom-element': "amp-selector", src: "https://cdn.ampproject.org/v0/amp-selector-0.1.js", async: true },
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
