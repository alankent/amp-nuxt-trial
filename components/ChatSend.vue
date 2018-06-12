<!--
Input text area to send a message.
-->

<template>
  <form class="chat-send" method="post" action-xhr="..." target="_top">
    <input class="chat-send__message" type="text" name="message" placeholder="share your excitement!" required>
    <input class="chat-send__button" type="submit" value="Send">
    <!-- Not implemented.
    <div submit-success>
      Sending message successful 
    </div>
    <div submit-error>
      Sending message failed!
    </div>
    -->
  </form>
</template>


<script>

export default {
  head: {
    script: [
      { 'custom-element': "amp-form", src: "https://cdn.ampproject.org/v0/amp-form-0.1.js", async: true },
    ]
  }
}

</script>


<style>

.chat-send {
  padding: 0;
  display: flex;
  border: 1px solid black;
}

.chat-send__message {
  flex: 1 0 8em;
  font-size: 1em;
  line-height: 100%;
  padding: .5em;
}

.chat-send__button {
  flex: 0 0 2.75em;;
  color: #fff;
  background: #12f;
  border: 1px solid black;
}

</style>
