<template>
  <div class='home-page'>

    <SiteTitleBar/>

    <AppNavBar>

      <AppNavButton selected option="concerts">
        <!-- "calendar" from https://materialdesignicons.com/ -->
        <svg style="width:48px;height:48px" viewBox="0 0 24 24">
          <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
        </svg>
        <div>Concerts</div>
      </AppNavButton>

      <AppNavButton option="music">
        <!-- "music" from https://materialdesignicons.com/ -->
        <svg style="width:48px;height:48px" viewBox="0 0 24 24">
          <path d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z" />
        </svg>
        <div>Music</div>
      </AppNavButton>

      <AppNavButton option="chat">
        <!-- "message-text" from https://materialdesignicons.com/ -->
        <svg style="width:48px;height:48px" viewBox="0 0 24 24">
          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18" />
        </svg>
        <div>Chat</div>
      </AppNavButton>

      <AppNavButton option="my-account">
        <!-- "account" from https://materialdesignicons.com/ -->
        <svg style="width:48px;height:48px" viewBox="0 0 24 24">
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
        <div>My Account</div>
      </AppNavButton>

    </AppNavBar>

    <AppNavContent selected option="concerts">

      <HeroImage
        :width="800"
        :height="515"
        src="liana-and-elenor.png"
        title="The Extra Ordinary Band Debut Tour"
        alt="The Band Memebers"/>

      <main>

        <DescriptionPanel>
          <p>The Extra Ordinary band is making is debut tour through many locations with its latest smash single.</p>
          <p>Come and see this one hit wonder before they disappear for good!</p>
        </DescriptionPanel>

        <!-- <FilterPanel/> -->

        <!-- <ConcertList/> -->

      </main>

    </AppNavContent>

    <AppNavContent option="music">
      <main>
        <DescriptionPanel>
          <p>The band is a one hit wonder, although some may argue with even that.</p>
          <p>So don't be late! Concerts with a single song are pretty short!</p>
        </DescriptionPanel>
      </main>
    </AppNavContent>

    <AppNavContent option="chat">
      <main>
        <!-- <ChatList/> -->
        Chat
      </main>
    </AppNavContent>

    <AppNavContent option="my-account">
      <main>
        <!-- <MyAccount/> -->
        My account.
      </main>
    </AppNavContent>

  </div>

</template>


<script>

import SiteTitleBar from '~/components/SiteTitleBar.vue'
import AppNavBar from '~/components/AppNavBar.vue'
import AppNavButton from '~/components/AppNavButton.vue'
import AppNavContent from '~/components/AppNavContent.vue'
import HeroImage from '~/components/HeroImage.vue'

export default {
  components: {
    SiteTitleBar,
    AppNavBar,
    AppNavButton,
    AppNavContent,
    HeroImage,
  },
}

</script>


<style>

body {
  font-family: Helvetica, sans-serif;
  border: 0;
  margin: 0;
  padding: 0;
}

.home-page {
  z-index: 0;
}

main {
  max-width: 600px;
  margin: auto;
}

</style>
