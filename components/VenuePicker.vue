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
        <!--
        <input name="venue-picker__dropdown"
            type="hidden"
            [value]="venue">
            -->
        <input class="venue-picker__input"
            id="venue-picker__query"
            name="query"
            autocomplete="off"
            placeholder="Select a venue"
            type="text"
            on="input-debounced:AMP.setState({ venue: event.value, autosuggest: event.value, comboExpanded: true}), venue-picker__autosuggest-list.show"
            [value]="inputText || ''"
            value="">
        <button on="tap:venue-picker__autosuggest-list.toggleVisibility, AMP.setState({ comboExpanded: !comboExpanded })"
            class="venue-picker__dropdown-toggle"
            type="button">
          <i [class]="comboExpanded ? 'venue-picker__arrow-up' : 'venue-picker__arrow-down'"
              class="venue-picker__arrow-down"></i>
        </button>
      </div>
      <amp-list class="venue-picker__autosuggest-list"
          single-item
          items="."
          layout="fixed-height"
          height="350"
          src="/api/venues"
          id="venue-picker__autosuggest-list"
          hidden
          v-html='`
        <template type="amp-mustache">
          <amp-selector class="venue-picker__dropdown-selector"
              keyboard-select-mode="focus"
              layout="container"
              on="select:AMP.setState({ venue: event.targetOption }),
                         venue-picker__autosuggest-list.hide">
            {{#items}}
            <div class="venue-picker__select-option"
                role="option"
                tabindex="0"
                on="tap:venue-picker__autosuggest-list.hide"
                option="{{name}}">{{name}}</div>
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
}

.venue-picker__search-container {
  display: flex;
  align-items: center;
  flex-direction: center;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  min-width: 50px;
  font-size: 1rem;
  line-height: 1.5rem;
  /*border-bottom: 1px solid black;*/
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
}

.venue-picker__arrow-up {
  height: 100%;
  box-sizing: border-box;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Q…YgNnoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+);
}

.venue-picker__arrow-down {
  height: 100%;
  box-sizing: border-box;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Q…Z6Ii8+CiAgICA8cGF0aCBkPSJNMC0uNzVoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+);
}

.venue-picker__autosuggest-list {
  position: relative;
  display: block;
  background: white;
  overflow: hidden;
}

.venue-picker__dropdown-selector {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
}
</style>
