<template>
<div>
<!--

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

-->

    <Header/>

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

    <TheFooter/>
  </div>
</template>

<script>
import HeroImage from '~/components/HeroImage.vue'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    HeroImage,
    TheHeader,
    TheFooter,
  },
}
</script>

<style>

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

</style>
