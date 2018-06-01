<template>
  <footer>
    <div>
      <button class="big-button">BUY NOW</button>
      <button class="big-button">ADD TO CART</button>
    </div>
  </footer>
</template>

<style>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.big-button {
  width: 50%;
  float: left;
  height: 100%;
  padding: 20px;
  background-color: rgb(180,180,0);
}

a, a:active, a:visited {
  color: inherit; /* Don't let links change color */
}
</style>
