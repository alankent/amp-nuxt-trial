<!--
Button for use under <AppNavBar>.
Takes an icon image URL and label text as properties.
Each button must also be manually allocated a unique id.
Exactly one button should be selected to have initial content displayed.

If buttons are different pages ("spa=false"), you should specify the 'src' attribute.
-->

<template>
  <!-- If 'src' specified, then AppNavBar uses <amp-selector> to update the selected attribute -->
  <div v-if="!src" role="tab" class="app-nav-button" :selected="selected" :option="option">
    <slot></slot>
  </div>
  <!-- Else 'src' not specified, so we use <a href=...> to navigate to another page -->
  <div v-else role="tab" class="app-nav-button" :selected="selected" :option="option">
    <a class="app-nav-button__link" :href="src">
      <slot></slot>
    </a>
  </div>
</template>


<script>

export default {
  props: {
    option: String,
    selected: Boolean,
    src: String,
  }
}

</script>


<style>

.app-nav-button {
  flex-basis: 100%;
  align-items: stretch;
  list-style: none;
  text-align: center;
  cursor: pointer;
  padding: 4px;
  text-decoration: none;
  background: black;
  color: #888;
  fill: #888;
  outline: none;
}

.app-nav-button[selected] {
  color: #fff;
  fill: #fff;
}

.app-nav-button__link {
  color: inherit;
  text-decoration: none;
}

.app-nav-button__link:visited {
    fill: inherit;
    color: inherit;
}

/* Turn off decoration <amp-selector> tries to add */
amp-selector [option][selected] {
  outline: none;
}


</style>
