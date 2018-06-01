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
	width="800"
	height="515"
	layout="responsive"
	src="liana-and-elenor.png"
	alt="The Band Memebers">
      </amp-img>

      <div class="image-title-panel">
	<div class="image-title-background">
	  <span class="image-title-text">The Extra Ordinary Band Debut Tour</span>
	</div>
      </div>

    </div>
    
    <!-- TODO: The following does not work - all the quotes of the script
	 element are being turned into &quot; causing parse errors in the
	 script -->
    <amp-animation id="parallaxTransition" layout="nodisplay">
      <script type="application/json">
        {
          "duration": "1",
          "fill": "both",
          "direction": "reverse",
          "animations": [{
            "selector": "#parallaxImage",
            "keyframes": [{
              "transform": "translateY(-50%)"
            }]
          }]
        }
      </script>
    </amp-animation>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      { async: 'async', 'custom-element': "amp-animation", src: "https://cdn.ampproject.org/v0/amp-animation-0.1.js" },
      { async: 'async', 'custom-element': "amp-position-observer", src: "https://cdn.ampproject.org/v0/amp-position-observer-0.1.js" },
    ]
  }
}
</script>

<style scoped>
.image-window {
  position: relative;
  overflow: hidden;
  margin-top: 3rem;
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
