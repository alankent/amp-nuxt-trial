<!--
List of previous chat messages.
-->

<template>
  <div class="chat-list">
     <!-- <div> Before live list </div> -->

     <amp-live-list
         id="chat-list__live-list"
         layout="container"
         data-poll-interval="15000"
         data-max-items-per-page="20">
       
       <!-- Because we reuse the same ids for list items, you will never see the refresh button appear. -->
       <button update id="chat-list__update-button" class="chat-list__update-button" on="tap:chat-list__live-list.update">
         REFRESH
       </button>

       <div items class="chat-list__items">
         <div v-for="(msg, index) in messages" :key="msg.timestamp"
             class="chat-list__item"
             :id="'chat-list__message-' + index"
             :data-sort-time="msg.timestamp"
             :data-update-time="msg.timestamp">
           <!--<div> {{ index }} - {{ msg.timestamp }} - {{ msg.time }} - {{ msg.who }} - {{ msg.message }} </div>-->
           <amp-img class="chat-list__avatar" :src="msg.who + '.png'" width="320" height="320" layout="responsive"></amp-img>
           <div class="chat-list__content">
             <span class="chat-list__name">@{{msg.who}}</span>
             <span class="chat-list__time">{{msg.time}}</span>
             <br />
             <span class="chat-list__message">{{msg.message}}</span>
           </div>
         </div>
       </div>

     </amp-live-list>

     <!-- <div> After live list </div> -->
  </div>
</template>


<script>

function timestampToString(timestamp) {
  let now = new Date(timestamp * 1000);
  let month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ][ now.getMonth() ];
  let date = now.getDate();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  let suffix = (hours < 12) ? "a" : "p";
  hours = (hours < 12) ? hours : hours - 12;
  hours = hours || 12;
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  //return `${month} ${date} ${hours}:${mins}:${secs}${suffix}`;
  return `${hours}:${mins}${suffix}`;
}

function synthensizeMessages() {
  let messages = [
    { who: "elenor", message: "Wow, I would not miss this one for the world!" },
    { who: "liana", message: "You better not miss it - you are playing!" },
    { who: "elenor", message: "Playing is overrated - I plan to sit out for the next one" },
    { who: "sam", message: "Woah! A place for all our fans!" },
    { who: "liana", message: "Then why are there no messages except from us?" },
    { who: "sam", message: "Well, I'm a fan of us!" },
    { who: "hank", message: "Ugh, really Sam?" },
    { who: "elenor", message: "Sam, I think you are kind of missing the point" },
    { who: "sam", message: "But its super great that we have our own concert!" },
    { who: "sam", message: "I'm mean who'd have thought? Right?" },
    { who: "liana", message: "Yes, I must admit it is kinda cool" },
    { who: "liana", message: "You are in, right Elenor?" },
    { who: "hank", message: "Of course she is in - we need her on bass" },
    { who: "liana", message: "Always charming Hank - you know how to make someone feel wanted" },
    { who: "elenor", message: "What do you expect from a guy, right?" },
    { who: "hank", message: "Hey! What did I do wrong this time?" },
    { who: "sam", message: "It's cool hank" },
    { who: "sam", message: "But I thought you said you did not play any instruments" },
    { who: "hank", message: "I was just trying to get rid of a pest" },
    { who: "sam", message: "A pest? You mean like an insect or something?" },
    { who: "hank", message: "Or something. Definitely or something." },
    { who: "liana", message: "Now Hank, be nice!" },
    { who: "sam", message: "Am I missing something?" },
    { who: "elenor", message: "Well, it wouldn't be the first time would it" },
  ];

  // Number of messages to display.
  const numDisplayed = 20;

  // Pretend a new message is being sent every 10 seconds (faster than page refresh rate).
  const interval = 10;

  // Get current time in seconds.
  let now = new Date().getTime() / 1000;

  //  Work out time of first method in the array (which was in the past).
  let roundedTime = Math.floor(now / interval) * interval - (messages.length * interval);

  // Build up an array iterating from the time the first message was sent in
  // the past until now. Compute the message number from the timestamp so
  // the same time always returns the same message.
  let arr = [];
  for (let i = 0; i < numDisplayed; i++) {
    let timestamp = roundedTime + i * interval;
    let m = messages[Math.floor(timestamp / interval) % messages.length];
    arr.push({ time: timestampToString(timestamp), timestamp: timestamp, who: m.who, message: m.message });
  }
  return arr;
}

export default {
  head: {
    script: [
      { 'custom-element': "amp-live-list", src: "https://cdn.ampproject.org/v0/amp-live-list-0.1.js", async: true },
    ]
  },
  data () {
    return { messages: synthensizeMessages() }
  }
}

</script>


<style>

.chat-list__item {
  border: 1px solid #444;
  padding: 5px;
  background: #eee;
  display: flex;
  align-items: center;
}

.chat-list__avatar {
  height: 60px;
  width: 60px;
  min-width: 60px;
  background: #888;
}

.chat-list__content {
  flex-grow: 1;
  padding-left: .5em;
}

.chat-list__name {
  font-size: 14px;
  color: #888;
}

.chat-list__time {
  padding-left: 1em;
  font-size: 12px;
  color: #888;
}

.chat-list__message {
  font-size: 16px;
}

/* Hide list during updates */
amp-live-list > [update] {
  display: none;
}

</style>
