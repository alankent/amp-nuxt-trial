<!--
Input text area to send a message.
-->

<template>
  <div class="chat-send">

    <div amp-access="access" amp-access-hide>
      <form class="chat-send__form" method="post" action-xhr="..." target="_top">
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
    </div>

    <div amp-access="NOT access" amp-access-hide>
      <form class="chat-send__form" method="post" action-xhr="..." target="_top">
        <input disabled class="chat-send__message" type="text" name="message" placeholder="login to join the conversation" required>
        <input disabled class="chat-send__button" type="submit" value="Send">
      </form>
    </div>
  </div>

</template>


<script>

export default {
  head: {
    script: [
      { hid: 'amp-form', 'custom-element': "amp-form", src: "https://cdn.ampproject.org/v0/amp-form-0.1.js", async: '' },
    ]
  }
}

</script>


<style>

.chat-send {
  max-width: 600px;
  margin: auto;
}

.chat-send__form {
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

.chat-send__button[disabled] {
  color: #888;
  background: #444;
}

</style>
