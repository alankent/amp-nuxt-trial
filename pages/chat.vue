<template>
  <AppShell currentPage="chat">

    <!-- Chat is anchored at bottom of page above nav bar -->
    <div class="app__anchor_to_bottom">
      <main>
        <ChatContent/>
      </main>
    </div>

  </AppShell>

</template>


<script>

import AppShell from '~/components/AppShell.vue'
import ChatContent from '~/components/ChatContent.vue'

export default {
  components: {
    AppShell,
    ChatContent,
  },
}

</script>
