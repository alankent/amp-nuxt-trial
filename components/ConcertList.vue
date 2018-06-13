<!--
Display filter conditions and matching concerts.
-->

<template>
  <div class="concert-list">
    <div class="concert-list__filter-panel">
      Concerts between _______ and ________
      At venue __________
    </div>
    <div class="concert-list__matching-concerts">
      <amp-list width="auto" layout="fixed-height" height="100" src="/concerts.json" class="concert-list__items"
        v-html='`
          <template type="amp-mustache">
            <div class="concert-list__item {{#available}}concert-list__item--available{{/available}}" >
              <div class="concert-list__date">{{ date }}</div>
              <div class="concert-list__venue">{{ venue }}</div>
              <div class="concert-list__status">{{ status }}</div>
            </div>
          </template>
        `'>
      </amp-list>
    </div>
  </div>
</template>


<script>

export default {
  head: {
    script: [
      { 'custom-element': "amp-list", src: "https://cdn.ampproject.org/v0/amp-list-0.1.js", async: true },
      { 'custom-template': "amp-mustache", src: "https://cdn.ampproject.org/v0/amp-mustache-0.1.js", async: true },
    ]
  }
}

</script>


<style>

.concert-list__matching-concerts {
  border-top: 1px solid #ccc;
  width: 100%;
}

.concert-list__item {
  display: flex;
  width: 100%;
  align-items: stretch;
  background: #eee;
  color: #888;
}

.concert-list__item--available {
  color: black;
}

.concert-list__item:nth-child(odd) {
  background: #ccc;
}

.concert-list__date {
  flex: 0 0 5rem;
  text-align: center;
}

.concert-list__venue {
  flex-grow: 1;
}

.concert-list__status {
  flex: 0 0 7rem;
  text-align: center;
}

</style>
