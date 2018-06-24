<template>
  <AppShell currentPage="concerts">

    <HeroImage
      id="concerts"
      :width="2"
      :height="1"
      src="band.png"
      title="The Extra Ordinary Band Debut Tour"
      alt="The Band Memebers"/>

    <main>

      <DescriptionPanel>
        <p>The Extra Ordinary band is making is debut tour through many locations with its latest smash single.</p>
        <p>Come and see this one hit wonder before they disappear for good!</p>
      </DescriptionPanel>

      <ConcertList/>

    </main>

  </AppShell>

</template>


<script>

import AppShell from '~/components/AppShell.vue'
import HeroImage from '~/components/HeroImage.vue'
import DescriptionPanel from '~/components/DescriptionPanel.vue'
import ConcertList from '~/components/ConcertList.vue'

export default {
  components: {
    AppShell,
    HeroImage,
    DescriptionPanel,
    ConcertList,
  },
}

</script>
