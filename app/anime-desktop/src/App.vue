<template>
  <div id="app">
    <navbar/>
    <home/>
  </div>
</template>

<script>
import Home from './views/Home';
import Navbar from './components/Navbar';

export default {
  components: {
    home: Home,
    Navbar,
  },
};
</script>


<style lang="scss">
@import "~normalize.css";
@import url("./assets/fonts/font.scss");
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  font-family: Graphik, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857;
  background-color: #f5f6f7;
}
body,
html {
  height: 100%;
}
a {
  color: #2b6ef4;
}

a,
a:focus,
a:hover {
  text-decoration: none;
}

a:focus,
a:hover {
  color: #23527c;
}

a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
}
h1,
h2,
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
h4,
h5,
h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
h1 {
  font-size: 36px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 14px;
}

h6 {
  font-size: 12px;
}

p {
  margin: 0 0 10px;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}

ol ol,
ol ul,
ul ol,
ul ul {
  margin-bottom: 0;
}
</style>
