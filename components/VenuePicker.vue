<!--
Input text area with smart autocomplete on venue name.
-->

<template>
<!--
  <div class="venue-picker">
    <div class="venue-picker__input_container">
      <input class="venue-picker__input" type="text">
    </div>  
  </div>
-->
  <div class="venue-picker">
    <div class="venue-picker__venue-search">
      <div class="venue-picker__search-container">
        <input name="venue-picker__dropdown"
            type="hidden"
            [value]="venue">
        <input class="venue-picker__input"
            id="venue-picker__query"
            name="query"
            autocomplete="off"
            placeholder="Select a venue"
            type="text"
            on="input-debounced:AMP.setState({ venue: event.value, autosuggest: event.value, comboExpanded: true}), venue-picker__autosuggest-list.show"
            [value]="venue || ''"
            value="">
        <button class="venue-picker__dropdown-toggle"
            on="tap:venue-picker__autosuggest-list.toggleVisibility, AMP.setState({ comboExpanded: !comboExpanded, autosuggest: '' })"
            type="button">
          <span [class]="comboExpanded ? 'venue-picker__arrow-up' : 'venue-picker__arrow-down'"
              class="venue-picker__arrow-down"></span>
        </button>
      </div>
      <amp-list class="venue-picker__autosuggest-list"
          single-item
          items="."
          layout="fixed-height"
          height="350"
          [src]="'/api/venues?venue=' + autosuggest"
          id="venue-picker__autosuggest-list"
          hidden
          v-html='`
        <template type="amp-mustache">
          <amp-selector class="venue-picker__dropdown-selector"
              keyboard-select-mode="focus"
              layout="container"
              on="select:AMP.setState({ venue: event.targetOption, comboExpanded: false }),
                         venue-picker__autosuggest-list.hide">
            {{#items}}
            <div class="venue-picker__select-option"
                role="option"
                tabindex="0"
                on="tap:venue-picker__autosuggest-list.hide"
                option="{{venue}}">{{venue}}</div>
            {{/items}}
          </amp-selector>
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
      { 'custom-element': "amp-form", src: "https://cdn.ampproject.org/v0/amp-form-0.1.js", async: true },
    ]
  }
}

</script>


<style>

.venue-picker {
}

.venue-picker__venue-search {
  width: 100%;
  max-width: 350px;
  position: relative;
}

.venue-picker__search-container {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: center;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  min-width: 50px;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-right: 1rem;
}

.venue-picker__input {
  padding: .7rem;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
}

.venue-picker__dropdown-toggle {
  height: 2.2rem;
  width: 2.2rem;
  display: block;
}

.venue-picker__arrow-up {
  display: block;
  height: 24px;
  width: 24px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik03LjQxIDE1LjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+");
}

.venue-picker__arrow-down {
  display: block;
  height: 24px;
  width: 24px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik03LjQxIDcuODRMMTIgMTIuNDJsNC41OS00LjU4TDE4IDkuMjVsLTYgNi02LTZ6Ii8+CiAgICA8cGF0aCBkPSJNMC0uNzVoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+");
}

.venue-picker__autosuggest-container {
  position: relative;
  display: inline-block;
}

.venue-picker__autosuggest-list {
  box-shadow: 0px 2px 6px rgba(0,0,0,.3);
  width: 100%;
  background: white;
}

.venue-picker__dropdown-selector {
}

.venue-picker__select-option {
  padding: 1em;
}

.venue-picker__select-option:nth-child(odd) {
  background: #eee;
}

</style>
