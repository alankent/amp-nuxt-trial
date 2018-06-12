<template>

    <!-- TODO: FROM BIKE SHED -->
    <header class="headerbar">

      <!-- Hamburger menu -->
      <div role="button" aria-label="open sidebar" on="tap:header-sidebar.toggle" tabindex="0" class="ampstart-navbar-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
      </div>

      <div class="headerbar-title">
        <a href="landing.amp.html">
          <!--<amp-img src="../../img/e-commerce/logo.png" width="96" height="27" layout="fixed" class="my0 mx-auto" alt=""></amp-img>-->
          <span class="headerbar-title">Tour Tickets</span>
        </a>
      </div>

      <!-- Cart icon -->
      <div class="headerbar-fixed">
	<a href="cart.amp.html" class="headerbar-fixed-link">
	  <div class="headerbar-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 35"><g><path d="M.8.47598c-.4 0-.8.3-.8.8s.4.9.8.9h4.4l4.4 21.6c0 .5.4 1 .9.9h21c.4 0 .9-.4.9-.9s-.4-.9-.9-.9H11.2l-.7-3.5h22.7c.4 0 .7-.3.8-.7l2.9-13c.1-.5-.3-1.1-.8-1.1H7.5l-.8-3.5c-.1-.3-.4-.6-.8-.6H.8zm7 6h27.3l-2.6 11.3H10.1l-2.3-11.3zm6.9 19.9c-2.1 0-3.8 1.8-3.8 3.9s1.7 3.9 3.8 3.9c2.1 0 3.8-1.8 3.8-3.9 0-2.1-1.7-3.9-3.8-3.9zm12.6 0c-2.1 0-3.8 1.8-3.8 3.9s1.7 3.9 3.8 3.9c2.1 0 3.8-1.8 3.8-3.9 0-2.1-1.7-3.9-3.8-3.9zm-12.6 1.7c1.2 0 2.1 1 2.1 2.2 0 1.2-.9 2.2-2.1 2.2-1.2 0-2.1-1-2.1-2.2 0-1.2.9-2.2 2.1-2.2zm12.6 0c1.2 0 2.1 1 2.1 2.2 0 1.2-.9 2.2-2.1 2.2-1.2 0-2.1-1-2.1-2.2 0-1.2 1-2.2 2.1-2.2z" fill="#222"></path></g></svg>
          </div>
	</a>
      </div>

    </header>
</template>

<style>

.headerbar {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #fff;
  height: 3rem;
  box-shadow: none;
  border-bottom: 1px solid #f3f3f3;
  left: 0;
  right: 0;
  top: calc(0px);
  position: fixed;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  z-index: 999;
}

.headerbar-icon-wrapper {
  width: 25px;
  position: relative;
}

.headerbar-fixed-link {
  margin-right: 0;
  text-decoration: none;
  background-color: transparent;
}

.headerbar-title {
  width: 100%;
  text-align: center;
}

</style>
