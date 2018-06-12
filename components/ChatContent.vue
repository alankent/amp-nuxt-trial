<!--
Display the contents of the Chat tab.
This includes a list of previous chat messages and an area to type in your own
message to send.
-->

<template>
  <div class="chat-content">
    <div class="chat-content__list">
      <ChatList/>
    </div>
    <div class="chat-content__send">
      <ChatSend/>
    </div>
  </div>
</template>


<script>

import ChatList from '~/components/ChatList.vue'
import ChatSend from '~/components/ChatSend.vue'

export default {
  components: {
    ChatList,
    ChatSend,
  }
}

</script>


<style>

.chat-content {
}

.chat-content__list {
}

.chat-content__send {
  margin-top: 1em;
}

</style>
