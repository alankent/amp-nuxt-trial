<!--
Content to be displayed when a nav button is selected.
Appears under <AppNavBar> after a <AppNavButton>.
-->

<template>
  <div role="tabpanel" class="app-nav-content" :hidden="!selected" :[hidden]="`appNav.option != '${option}'`">
    <slot></slot>
  </div>
</template>


<script>

export default {
  props: {
    option: String,
    selected: Boolean,
  },
}

</script>


<style>

.app-nav-content {
  width: 100%;
}

</style>
