<!--
Display a full width image with parallax scroll.
-->

<template>
  <div class="hero-image">
    <!-- Parallax scrolled hero image -->
    <div class="hero-image__window">

      <amp-position-observer
        :on="`scroll:parallaxTransition-${id}.seekTo(percent=event.percent)`"
        intersection-ratios="0"
	      layout="nodisplay">
      </amp-position-observer>

      <amp-img
        :id="`parallaxImage-${id}`"
        :width="width"
        :height="height"
        layout="responsive"
        :src="src"
        :alt="alt">
      </amp-img>

      <div class="hero-image__title-panel">
        <div class="hero-image__title-background">
          <span class="hero-image__title-text">{{ title }}</span>
        </div>
      </div>

    </div>
    
    <!-- This is using v-html attribute to inject the inner HTML without escaping because
         Vue turns double quotes into &quot; which is valid except in a <script> tag. -->
    <amp-animation :id="`parallaxTransition-${id}`" layout="nodisplay">
      <script type="application/json" v-html='
        JSON.stringify({
          "duration": "1",
          "fill": "both",
          "direction": "reverse",
          "animations": [{
            "selector": `#parallaxImage-${id}`,
            "keyframes": [{
              "transform": "translateY(-50%)"
            }]
          }]
        })
      '></script>
    </amp-animation>

  </div>
</template>


<script>

export default {
  props: {
    id: String,
    width: Number,
    height: Number,
    src: String,
    title: String,
    alt: String
  },
  head: {
    script: [
      { hid: "amp-animation", 'custom-element': "amp-animation", src: "https://cdn.ampproject.org/v0/amp-animation-0.1.js", async: '' },
      { hid: "amp-position-observer", 'custom-element': "amp-position-observer", src: "https://cdn.ampproject.org/v0/amp-position-observer-0.1.js", async: '' },
    ]
  }
}

</script>


<style>

.hero-image__window {
  position: relative;
  overflow: hidden;
}

.hero-image__window amp-img {
  margin-bottom: -20%;
}

.hero-image__title-panel {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 0;
  margin: 0;
}

.hero-image__title-background {
  background-color: rgba(0,0,0,.2);
  padding: 10px;
}

.hero-image__title-text {
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

</style>
