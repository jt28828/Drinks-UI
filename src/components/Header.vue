<template>
  <div id="header">
    <router-link tag="span" to="/">
      <span id="chooseDrink" class="headerButton">
        Drink
        <i class="fas fa-glass-martini"></i>
      </span>
    </router-link>
    <router-link tag="span" to="/manage">
      <span id="addBottles" class="headerButton">
        Bottles
        <i class="fas fa-cog"></i>
      </span>
    </router-link>
  </div>
</template> 

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Header extends Vue {
  public currentPage: string = 'selection';

  /**
   * Changes the currently selected page
   */
  public changePage(page: string) {
    this.currentPage = page;
  }
}
</script>

<style lang="scss" scoped>
// Import application mixins
@import "../sass/constants.scss";
@import "../sass/colors.scss";

#header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: $header-height;
  background-color: $primary-color;
  z-index: 100;
}

#headerButton {
  display: none;
  margin-left: 0;
  width: 100px;
}

#headerButton i {
  font-size: 48px;
  line-height: $header-height;
}

.headerButton {
  width: 120px;
  height: $header-height;
  display: inline-block;
  text-align: center;
  line-height: $header-height;
  background-size: 50% 200%;
  background-image: linear-gradient(
    to top,
    $primary-color-dark 50%,
    $primary-color 50%
  );
  color: white;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: background-position linear 0.2s;
  white-space: nowrap;
  outline: none;
}
.headerButton:not(:first-child) {
  margin-left: 10px;
}
.router-link-exact-active .headerButton {
  background-position: 0 -100%;
}
.headerButton:hover {
  background-position: 0 -100%;
}
#slideOutNavBar {
  position: fixed;
  top: $header-height;
  left: -300px;
  display: none;
  flex-direction: column;
  width: 300px;
  min-height: 100%;
  padding-top: 5px;
  height: 455px;
  background-color: $primary-color;
  z-index: 1000;
  transition: all ease-out 0.2s;
}
.slideHeaderButton {
  width: 100%;
  height: $header-height;
  display: inline-block;
  margin-bottom: 10px;
  text-align: center;
  line-height: $header-height;
  background-size: 200% 100%;
  background-image: linear-gradient(
    to left,
    $primary-color 50%,
    $primary-color 50%
  );
  color: white;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: background-position linear 0.2s;
  white-space: nowrap;
}
.slideheaderButton:hover {
  background-position: -100% 100%;
}
#appContentContainer {
  width: 100%;
  height: calc(100% - 80px);
  position: absolute;
  top: 80px;
}
</style>
