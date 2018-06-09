<!-- Display a full width image with parallax scroll. -->

<template>
  <div>
    <!-- Parallax scrolled hero image -->
    <div class="image-window">

      <amp-position-observer
	on="scroll:parallaxTransition.seekTo(percent=event.percent)"
	intersection-ratios="0"
	layout="nodisplay">
      </amp-position-observer>

      <amp-img id="parallaxImage"
	:width="width"
	:height="height"
	layout="responsive"
	:src="src"
	:alt="alt">
      </amp-img>

      <div class="image-title-panel">
	<div class="image-title-background">
	  <span class="image-title-text">{{ title }}</span>
	</div>
      </div>

    </div>
    
    <!-- This is using v-html attribute to inject the inner HTML without escaping because
         Vue turns double quotes into &quot; which is valid except in a <script> tag. -->
    <amp-animation id="parallaxTransition" layout="nodisplay">
      <script type="application/json" v-html='
        JSON.stringify({
          "duration": "1",
          "fill": "both",
          "direction": "reverse",
          "animations": [{
            "selector": "#parallaxImage",
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
    width: Number,
    height: Number,
    src: String,
    title: String,
    alt: String
  },
  head: {
    script: [
      { 'custom-element': "amp-animation", src: "https://cdn.ampproject.org/v0/amp-animation-0.1.js", async: true },
      { 'custom-element': "amp-position-observer", src: "https://cdn.ampproject.org/v0/amp-position-observer-0.1.js", async: true },
    ]
  }
}
</script>

<style scoped>
.image-window {
  position: relative;
  overflow: hidden;
}

.image-window amp-img {
  margin-bottom: -20%;
}

.image-title-panel {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 0;
  margin: 0;
}

.image-title-background {
  background-color: rgba(0,0,0,.2);
  padding: 10px;
}

.image-title-text {
  justify-content: center;
  color: white;
}
</style>
