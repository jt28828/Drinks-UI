<template>
  <div id="home" class="viewContainer">
    <div id="searchBar">
      <i class="fas fa-search"></i>
      <input placeholder="Search" />
    </div>

    <div id="drinkCardsContainer">
      <!-- Add Bottle Card -->
      <div class="add card">
        <i class="fas fa-plus"></i>
      </div>
      <!-- The Actual bottle cards -->
      <bottle-card v-for="(bottle, index) in bottles" :key="index" :bottle="bottle" @bottleOpened="onBottleOpened($event)"></bottle-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Drink extends Vue {
  public currentScreen: string = 'Choose a drink';
  public menuOpen: boolean = false;
}
</script>

<style lang="scss" scoped>
// Import application mixins
@import "../sass/constants.scss";
@import "../sass/colors.scss";
#searchBar {
  padding: 0px 5px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 20px;
  width: 95%;
  max-width: 500px;
  height: 55px;
  background-color: white;
  box-shadow: 3px 5px 5px 0 #bdbdbd;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 10;
  &:hover {
    box-shadow: 3px 2px 2px 0 #bdbdbd;
  }
  input {
    border: none;
    flex: 1;
    margin-bottom: 0px;
  }
  i {
    font-size: 20px;
    width: 30px;
    color: grey;
  }
}

#drinkCardsContainer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: all 0.4s;
  padding: 100px 5px 20px 5px;
}
.card {
  background-color: white;
  box-shadow: 3px 5px 15px 0 #bdbdbd;
  width: 300px;
  height: 150px;
  margin: 0px 5px 20px 5px;
  padding: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(0.9) rotateZ(2deg);
  }
}
.card.add {
  background-color: $secondary-color;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5em;
  color: white;
}
</style>