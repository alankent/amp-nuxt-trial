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
           <div class="chat-list__avatar">IMG: {{ msg.who }} </div>
           <div class="chat-list__time">{{msg.time}}</div>
           <div class="chat-list__message">{{msg.message}}</div>
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
    { who: 'liana', message: '0 Hi everyone' },
    { who: 'sam', message: '1 Hi dudes' },
    { who: 'hank', message: '2 This is going to be so rad' },
    { who: 'liana', message: '3 How uncouth!' },
    { who: 'helen', message: '4 Think happy thoughts!' },
    { who: 'liana', message: '5 Hi everyone' },
    { who: 'sam', message: '6 Hi dudes' },
    { who: 'hank', message: '7 This is going to be so rad' },
    { who: 'liana', message: '8 How uncouth!' },
    { who: 'helen', message: '9 Think happy thoughts!' },
    { who: 'liana', message: '10 Hi everyone' },
    { who: 'sam', message: '11 Hi dudes' },
    { who: 'hank', message: '12 This is going to be so rad' },
    { who: 'liana', message: '13 How uncouth!' },
    { who: 'helen', message: '14 Think happy thoughts!' },
    { who: 'liana', message: '15 Hi everyone' },
    { who: 'sam', message: '16 Hi dudes' },
    { who: 'hank', message: '17 This is going to be so rad' },
    { who: 'liana', message: '18 How uncouth!' },
    { who: 'helen', message: '19 Think happy thoughts!' },
  ];

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
  for (let i = 0; i < messages.length; i++) {
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
  height: 50px;
  width: 50px;
  background: #888;
}

.chat-list__time {
  padding: 1rem;
  width: 5rem;
  font-size: .8rem;
}

.chat-list__message {
  flex-grow: 1;
  font-size: 1rem;
}

/* Hide list during updates */
amp-live-list > [update] {
  display: none;
}

</style>
