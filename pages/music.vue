<template>
  <AppShell currentPage="music">

    <HeroImage
      id="music"
      :width="800"
      :height="515"
      src="liana-and-elenor.png"
      title="The Extra Ordinary Band Debut Tour"
      alt="The Band Memebers"/>

    <main>
      <DescriptionPanel>
        <p>The band is a one hit wonder, although some may argue with even that.</p>
        <p>So don't be late! Concerts with a single song are pretty short!</p>
      </DescriptionPanel>
    </main>

  </AppShell>
</template>


<script>

import AppShell from '~/components/AppShell.vue'
import HeroImage from '~/components/HeroImage.vue'
import DescriptionPanel from '~/components/DescriptionPanel.vue'

export default {
  components: {
    AppShell,
    HeroImage,
    DescriptionPanel,
  },
}

</script>
