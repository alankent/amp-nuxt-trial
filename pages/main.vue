<template>
<div>
<!--
<!doctype html>
<html ⚡>
  <head>
    <meta charset="utf-8">
    <title>Sample document</title>
    <link rel="canonical" href="./regular-html-version.html">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">

    <style amp-custom>

      .headerbar {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0;
        padding-bottom: 0;
        background-color: #fff;
        height: 3rem;
        box-shadow: none;
        border-bottom: 1px solid #f3f3f3;
        left: 0;
        right: 0;
        top: calc(0px);
        position: fixed;
        justify-content: flex-start;
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        z-index: 999;
      }

      .headerbar-icon-wrapper {
        width: 25px;
        position: relative;
      }

      .headerbar-fixed-link {
        margin-right: 0;
        text-decoration: none;
        background-color: transparent;
      }

      .headerbar-title {
        width: 100%;
        text-align: center;
      }

      body {
        font-family: Helvetica, sans-serif;
      }

      main {
        max-width: 412px;
        margin: auto;
      }
      
      p {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .field-label {
        text-size: 80%;
        color: #888;
      }

      .description-panel {
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }

      .tabs-panel {
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }

      # Date Picker

      .CalendarMonth_caption {
        color: #fff;
      }

      [type="range"] .amp-date-picker-selecting {
        border-bottom-color: #b60845;
        color: #b60845;
      }

      .align-content-center,
      .align-content-center .amp-date-picker-calendar-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-direction: row;
      }

      amp-lightbox {
        background: rgba(0, 0, 0, .75);
      }

    </style>

    <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "TODO",
      "headline": "Extra Ordinary",
      "image": [
	"thumbnail1.jpg"
      ],
      "datePublished": "2018-05-13T11:00:00+08:00"
    }
    </script>

    <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
    <script async custom-element="amp-fx-collection" src="https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js"></script>
    <script async custom-element="amp-animation" src="https://cdn.ampproject.org/v0/amp-animation-0.1.js"></script>
    <script async custom-element="amp-position-observer" src="https://cdn.ampproject.org/v0/amp-position-observer-0.1.js"></script>
    <script async custom-element="amp-fit-text" src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"></script>
    <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
    <script async custom-element="amp-date-picker" src="https://cdn.ampproject.org/v0/amp-date-picker-0.1.js"></script>
    <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
    <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.1.js"></script>
    <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
    <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
    <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>

    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
  </head>
  <body>

-->

    <!-- TODO: FROM BIKE SHED -->
    <header class="headerbar">

      <!-- Hamburger menu -->
      <div role="button" aria-label="open sidebar" on="tap:header-sidebar.toggle" tabindex="0" class="ampstart-navbar-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
      </div>

      <div class="headerbar-title">
        <a href="landing.amp.html">
          <!--<amp-img src="../../img/e-commerce/logo.png" width="96" height="27" layout="fixed" class="my0 mx-auto" alt=""></amp-img>-->
          <span class="headerbar-title">Tour Tickets</span>
        </a>
      </div>

      <!-- Cart icon -->
      <div class="headerbar-fixed">
	<a href="cart.amp.html" class="headerbar-fixed-link">
	  <div class="headerbar-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 35"><g><path d="M.8.47598c-.4 0-.8.3-.8.8s.4.9.8.9h4.4l4.4 21.6c0 .5.4 1 .9.9h21c.4 0 .9-.4.9-.9s-.4-.9-.9-.9H11.2l-.7-3.5h22.7c.4 0 .7-.3.8-.7l2.9-13c.1-.5-.3-1.1-.8-1.1H7.5l-.8-3.5c-.1-.3-.4-.6-.8-.6H.8zm7 6h27.3l-2.6 11.3H10.1l-2.3-11.3zm6.9 19.9c-2.1 0-3.8 1.8-3.8 3.9s1.7 3.9 3.8 3.9c2.1 0 3.8-1.8 3.8-3.9 0-2.1-1.7-3.9-3.8-3.9zm12.6 0c-2.1 0-3.8 1.8-3.8 3.9s1.7 3.9 3.8 3.9c2.1 0 3.8-1.8 3.8-3.9 0-2.1-1.7-3.9-3.8-3.9zm-12.6 1.7c1.2 0 2.1 1 2.1 2.2 0 1.2-.9 2.2-2.1 2.2-1.2 0-2.1-1-2.1-2.2 0-1.2.9-2.2 2.1-2.2zm12.6 0c1.2 0 2.1 1 2.1 2.2 0 1.2-.9 2.2-2.1 2.2-1.2 0-2.1-1-2.1-2.2 0-1.2 1-2.2 2.1-2.2z" fill="#222"></path></g></svg>
          </div>
	</a>
      </div>

    </header>

    <!-- Parallax scrolled hero image -->
    <HeroImage/>

    <main>

      <div class="description-panel">
        <p>The Extra Ordinary band is making is debut tour through many locations with its smash single.</p>
        <p>Don't be late! Concerts with a single song are pretty short!</p>
      </div>

      <div class="tabs-panel">
        <div class="tab">

          <p class="field-label">Event Date(s)</p>
<!--
          <amp-date-picker
            id="simple-date-picker-3"
            type="single"
            mode="overlay"
            layout="container"
            on="select:AMP.setState({date3: event.date ? event.date : ''})"
            locale="en"
            format="YYYY-MM-DD"
            open-after-select
            highlighted="FREQ=YEARLY;DTSTART=20171124T110000Z;UNTIL=20171126T040000Z;BYMONTH=11;BYDAY=+4TH;WKST=SU"
            input-selector="[name=date3]"
            class="mr1 ml1 flex picker">

            <div class="ampstart-input inline-block mt1">
              <input class="border-none p0"
                name="date3"
                placeholder="Pick a date">
            </div>
            <button class="ampstart-btn m1 caps"
              on="tap:simple-date-picker-3.clear">Clear</button>
            <template type="amp-mustache" info-template>
              <span [text]="date3 ? 'You picked ' + date3 + '.' : 'You will see your chosen date here.'">You will see your chosen date here.</span>
            </template>
          </amp-date-picker>
-->

          <p class="field-label">Locations</p>
          <!--<amp-list src="./events.json" layout="flex-item">-->
          <amp-list width="auto" height="100" layout="fixed-height" src="./events.json">
            <div placeholder>Loading...</div>
            <div fallback>Failed to load events.</div>
            <template type="amp-mustache">
              <div>
                <span>{{name}}</span>
                <span>{{price}}</span>
              </div>
            </template>
          </amp-list>

          <div hidden> -- amp-access
            <p class="field-label">Backstage Pass</p>
            <!--TODO
            <amp-checkbox>
              <div>
                <span>{{name}}</span>
                <span>{{price}}</span>
              </div>
            </amp-checkbox>
            -->
          </div>

          <div>
            <span>Total</span>
            <span [text]="total_price"></span>
          </div>

        </div>
        <div class="tab">

          <div hidden> -- amp-access
            <input type="text" placeholder="Enter your comment"></input>
            <button>send</button>
          </div>

          <!--TODO
          <amp-live-list>
          </amp-live-list>
          -->

        </div>
      </div>

      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <!-- FAILED TEST
      <amp-iframe layout="responsive" width="4" height="3" src="https://poly.google.com/view/5cp769JNOCe/embed?chrome=min&amp=" frameborder="0" allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope;" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" ></amp-iframe>
      <p>Some text</p>
      <iframe width="100%" height="100%" src="https://poly.google.com/view/5cp769JNOCe/embed?chrome=min" frameborder="0" style="border:none;" allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope;" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" ></iframe>
      -->
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
    </main>

    <Footer/>
</div>
<!--
  </body>
</html>
-->

</template>

<script>
import HeroImage from '~/components/HeroImage.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    HeroImage,
    Footer,
  },
  head () {
    return {
    script: [
      { innherHTML: 'console.log("hello")', type: 'text/javascript', charset: 'utf-8' },
      { async: 'async', 'custom-element': "amp-animation", src: "https://cdn.ampproject.org/v0/amp-animation-0.1.js" },
      { async: 'async', 'custom-element': "amp-position-observer", src: "https://cdn.ampproject.org/v0/amp-position-observer-0.1.js" },
    ]
    };
  }
}
</script>

