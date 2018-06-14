<!--
Display filter conditions and matching concerts.
-->

<template>
  <div class="concert-list">
    <div class="concert-list__title">Concerts</div>
    <table class="concert-list__filter-panel">
      <tr><td>Dates:</td><td><DateRangePicker/></td></tr>
      <tr><td>Venue:</td><td><VenuePicker/></td></tr>
    </table>
    <div class="concert-list__matching-concerts">
      <amp-list class="concert-list__items" width="auto" layout="fixed-height" height="100"
        src="/api/concerts"
        [src]="'/api/concerts?startDate=' + startDate + '&endDate=' + endDate + '&venue=' + venue"
        v-html='`
          <template type="amp-mustache">
            <div class="concert-list__row">
              <div class="concert-list__item {{#available}}concert-list__item--available{{/available}}" >
                <div class="concert-list__date">{{ date }}</div>
                <div class="concert-list__venue">{{ venue }}</div>
                <div class="concert-list__status">{{ status }}</div>
              </div>
            </div>
          </template>
        `'>
      </amp-list>
    </div>
  </div>
</template>


<script>

import DateRangePicker from '~/components/DateRangePicker.vue'
import VenuePicker from '~/components/VenuePicker.vue'

export default {
  components: {
    DateRangePicker,
    VenuePicker,
  },
  head: {
    script: [
      { 'custom-element': "amp-list", src: "https://cdn.ampproject.org/v0/amp-list-0.1.js", async: true },
      { 'custom-template': "amp-mustache", src: "https://cdn.ampproject.org/v0/amp-mustache-0.1.js", async: true },
    ]
  }
}

</script>


<style>

.concert-list__title {
  font-size: 32pt;
  font-weight: bold;
  width: 100%;
  padding-top: 1rem;
  text-align: center;
  color: #12f;
}

.concert-list__filter-panel {
  margin: auto;
  padding: 1rem;
  padding-top: 0;
  border-collapse:separate;
  border-spacing:0 1rem;
}

.concert-list__matching-concerts {
  background: #eee;
  outline: 1px solid #ccc;
  width: 100%;
  padding: 0 5px;
  margin-bottom: 5rem;
}

.concert-list__row {
  width: 100%;
  margin: 5px 0;
}

.concert-list__item {
  display: flex;
  width: 100%;
  align-items: stretch;
  background: white;
  color: #aaa;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 3px;
}

.concert-list__item--available {
  color: black;
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
  color: #f88;
}

.concert-list__item--available > .concert-list__status {
  color: #030;
}

amp-lightbox {
  height: 100%;
}

</style>
