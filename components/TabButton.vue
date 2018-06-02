<template>
  <div role="tab" class="tabButton" :selected="selected" :option="option">
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

.tabButton[selected] {
  outline: none;
  background: #ccc;
}

.tabButton {
  list-style: none;
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
}

.tabButton[selected]+.tabContent {
  display: block;
}

</style>
