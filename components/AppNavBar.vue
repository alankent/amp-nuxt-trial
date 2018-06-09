<!--
Application wide navigation button bar for bottom of page.
This component takes a series of alternating <AppNavButton> and <AppNavContent>
children representing the different buttons in the navigation bar.
-->

<template>
  <div class="app-nav-bar">
    <amp-state id="appNav">
      <script type="application/json" v-html=' JSON.stringify({ "option": "" }) '></script>
    </amp-state>
    <amp-selector role="tablist" layout="container" class="app-nav-bar__selector" on="select:AMP.setState({appNav: {option: event.targetOption}})">
      <slot></slot>
    </amp-selector>
  </div>
</template>


<script>

export default {
  head: {
    script: [
      { 'custom-element': "amp-selector", src: "https://cdn.ampproject.org/v0/amp-selector-0.1.js", async: true },
      { 'custom-element': "amp-bind", src: "https://cdn.ampproject.org/v0/amp-bind-0.1.js", async: true },
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
