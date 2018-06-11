<!--
Button for use under <AppNavBar>.
Takes an icon image URL and label text as properties.
Each button must also be manually allocated a unique id.
Exactly one button should be selected to have initial content displayed.
-->

<template>
  <div role="tab" class="app-nav-button" :selected="selected" :option="option">
    <slot></slot>
  </div>
</template>


<script>

export default {
  params: {
    option: String,
    selected: Boolean,
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

amp-selector [option][selected] {
  outline: none;
}

</style>
