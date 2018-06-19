<!--
Display a thin header bar at the top of the page.
At present this displays the logged in user's name, or a login link.
-->

<template>
  <div class="site-title-bar">
    <div class="site-title-bar__fixed">
      <div class="site-title-bar__title">
        <!-- This should be a facy graphic or font -->
        Extra Ordinary Ticket Sales
      </div>
      <div class="site-title-bar__login-button" amp-access="NOT access" amp-access-hide>
         <a on="tap:amp-access.login-sign-in">Login</a>
      </div>
      <div class="site-title-bar__hello" amp-access="access" amp-access-hide
        v-html=' `<template amp-access-template type="amp-mustache"><span>Hi {{ name }}</span></template>` '>
	<!-- We cannot use "<template>" here because it gets processed by Vue,
	     so we use v-html to inject raw HTML. -->
      </div>
    </div>
    <div class="site-title-bar__spacer">
    </div>
  </div>
</template>


<script>

export default {
  head: {
    script: [
      { hid: "amp-access", 'custom-element': "amp-access", src: "https://cdn.ampproject.org/v0/amp-access-0.1.js", async: '' },
      { hid: "amp-analytics", 'custom-element': "amp-analytics", src: "https://cdn.ampproject.org/v0/amp-analytics-0.1.js", async: '' },
      { hid: "amp-mustache", 'custom-template': "amp-mustache", src: "https://cdn.ampproject.org/v0/amp-mustache-0.1.js", async: '' },
      { 'id': "amp-access", type: "application/json", innerHTML: `
        {
          "authorization": "https://ampbyexample.com/components/amp-access/authorization?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM",
          "pingback": "https://ampbyexample.com/components/amp-access/authorization?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM",
          "login": {
            "sign-in": "https://ampbyexample.com/components/amp-access/login?rid=READER_ID&url=CANONICAL_URL",
            "sign-out": "https://ampbyexample.com/components/amp-access/logout"
          },
          "authorizationFallbackResponse": {
            "error": true,
            "access": false,
            "subscriber": false
          }
        }`
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  }
}
</script>


<style>

.site-title-bar__fixed {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  clear: both;
  background: white;
  border-bottom: 1px solid #ccc;
}

.site-title-bar__spacer {
  height: 3rem;
}

.site-title-bar__title {
  float: left;
}

.site-title-bar__login-button {
  float: right;
}

.site-title-bar__hello {
  float: right;
}

</style>
