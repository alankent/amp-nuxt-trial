<template>
  <AppShell currentPage="my-account">

    <main>
      <MyAccount/>
    </main>

  </AppShell>
</template>


<script>

import AppShell from '~/components/AppShell.vue'
import MyAccount from '~/components/MyAccount.vue'

export default {
  components: {
    AppShell,
    MyAccount,
  },
}

</script>
