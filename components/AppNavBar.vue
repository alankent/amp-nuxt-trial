<!--
Application wide navigation button bar for bottom of page.
This component takes a series of alternating <AppNavButton> and <AppNavContent>
children representing the different buttons in the navigation bar.
-->

<template>
  <div class="app-nav-bar">
    <amp-state id="appNav">
      <UnescapedScript type="application/json">
        { "option": "" }
      </UnescapedScript>
    </amp-state>
    <amp-selector role="tablist" layout="container" class="app-nav-bar__selector" on="select:AMP.setState({appNav: {option: event.targetOption}})">
      <slot></slot>
    </amp-selector>
  </div>
</template>


<script>

import UnescapedScript from '~/components/UnescapedScript.js'

export default {
  components: {
    UnescapedScript
  },
  head: {
    script: [
      { hid: "amp-selector", 'custom-element': "amp-selector", src: "https://cdn.ampproject.org/v0/amp-selector-0.1.js", async: '' },
      { hid: "amp-bind", 'custom-element': "amp-bind", src: "https://cdn.ampproject.org/v0/amp-bind-0.1.js", async: '' },
    ]
  }
}

</script>


<style>

.app-nav-bar__selector {
  display: flex;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}

</style>
