<template>
  <div id="app">
    <app-header></app-header>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    'app-header': Header,
  },
})
export default class App extends Vue {
  public currentScreen: string = 'Choose a drink';
  public menuOpen: boolean = false;
}
</script>

<style lang="scss">
// Import font awesome
@import "~@fortawesome/fontawesome-free-webfonts/css/fontawesome.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-solid.css";
@import "~@fortawesome/fontawesome-free-webfonts/css/fa-regular.css";

// Import application mixins
@import "./sass/constants.scss";
@import "./sass/colors.scss";

html,
body {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
}

#content {
  width: 100%;
  height: calc(100% - #{$header-height});
  margin-top: $header-height;
  background-color: #f5f5f5;
}

.viewContainer {
  width: 100%;
  height: 100%;
  position: relative;
}
input {
  border: none;
  border-bottom: solid grey 1px;
  height: 50px;
  margin-bottom: 10px;
}

button {
  width: 100px;
  height: 40px;
  font-size: 18px;
  color: white;
  background-color: $primary-color;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(0.9);
  }
}
</style>
