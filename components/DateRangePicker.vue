<!--
Accept a date range from the user.
-->

<template>
  <div class="date-range-picker">
    <div class="date-range-picker__input-panel">
      <div class="date-range-picker__input-container">
        <input class="date-range-picker__input"
          id="lb-start"
          placeholder="Start date"
          on="tap:lb.open;change:AMP.setState({startDate: event.value})"
          role="textbox"
          tabindex="0">
      </div>
      <div class="date-range-picker__input-container">
        <input class="date-range-picker__input"
          id="lb-end"
          placeholder="End date"
          on="tap:lb.open;change:AMP.setState({endDate: event.value})"
          role="textbox"
          tabindex="0">
      </div>
      <button class="date-range-picker__clear-button"
        on="tap:lb-picker.clear,AMP.setState({startDate:'', endDate:''})">Clear</button>
    </div>
    <amp-lightbox id="lb"
      layout="nodisplay">
      <button class="date-range-picker__close-button"
        on="tap:lb.close"
        tabindex="0">Close</button>
      <div class="date-range-picker__picker-container">
        <amp-date-picker id="lb-picker"
          fullscreen
          type="range"
          mode="static"
          layout="fill"
          number-of-months="12"
          format="YYYY-MM-DD"
          on="activate: lb.open;
              deactivate: lb.close;
              select:AMP.setState({startDate: event.start.date, endDate: event.end.date});"
          start-input-selector="#lb-start"
          end-input-selector="#lb-end"
          :min="(new Date()).toISOString().split('T')[0]"></amp-date-picker>
      </div>
    </amp-lightbox>
  </div>
</template>


<script>

export default {
  head: {
    script: [
      { 'custom-element': "amp-date-picker", src: "https://cdn.ampproject.org/v0/amp-date-picker-0.1.js", async: true },
      { 'custom-element': "amp-lightbox", src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js", async: true },
      { 'custom-element': "amp-form", src: "https://cdn.ampproject.org/v0/amp-form-0.1.js", async: true },
    ],
    meta: [
      { 'name': "amp-experiments-opt-in", content: "amp-date-picker" },
    ]
  }
}

</script>


<style>

.date-range-picker {
}

.date-range-picker__input-panel {
  /* align-content-center space-between */
  display: flex;
  align-items: center;
  flex-direction: center;
  justify-content: space-between;
}

.date-range-picker__input-container {
  /*ampstart-input*/
  max-width: 100%;
  width: 100px;
  min-width: 50px;
  font-size: 1rem;
  line-height: 1.5rem;
  /*border-bottom: 1px solid black;*/
  margin-right: 1rem;
}

.date-range-picker__input {
  padding: 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
}

.date-range-picker__clear-button {
  /*ampstart-btn caps*/
  background: #12f;
  color: white;
  font-weight: bold;
  border: 1px solid #12f;
  line-height: 1rem;
  text-decoration: none;
  vertical-align: middle;
  padding: 10px;
  margin: 8px 0;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
}

.date-range-picker__close-button {
/*ampstart-btn absolute m1 caps small-button*/
  margin: 1em;
  position: absolute;
  font-size: .75em;
  line-height: .75em;
  margin: .75em;
}

.date-range-picker__picker-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}


.CalendarMonth_caption {
  color: #fff;
}

[type="range"] .amp-date-picker-selecting {
  border-bottom-color: #b60845;
  color: #b60845;
}

amp-lightbox {
  background: rgba(0, 0, 0, .75);
}

amp-lightbox .align-content-center {
  height: 100%;
}

</style>
