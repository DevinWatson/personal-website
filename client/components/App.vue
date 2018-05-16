<template>
  <div class="bg" id="app">
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}

.page {
  text-align: center;
}
.page code {
  background-color: black;
}

body, html {
    height: 100%;
}
.bg { 
    background-image: url("../../static/bg.jpg");

    height: 100%; 

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}   
</style>
