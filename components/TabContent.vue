<template>
  <div role="tabpanel" class="tabContent">
    <slot></slot>
  </div>
</template>

<style>
.tabContent {
  display: none;
  width: 100%;
  order: 1; /* must be greater than the order of the tab buttons to flex to the next line */
  border: 1px solid #ccc;
}
</style>
