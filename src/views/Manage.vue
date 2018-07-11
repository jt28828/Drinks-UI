<template>
  <div id="manage" class="viewContainer">

    <div id="bottleCardContainer" :class="{hidden: editOpen}">
      <!-- Add Bottle Card -->
      <div class="add card">
        <i class="fas fa-plus"></i>
      </div>
      <!-- The Actual bottle cards -->
      <bottle-card v-for="(bottle, index) in bottles" :key="index" :bottleOrDrink="bottle" @cardOpened="onBottleOpened($event)"></bottle-card>
    </div>

    <bottle-form v-if="editOpen" :bottle="selectedBottle"></bottle-form>
  </div>
</template>

<script lang="ts">
import { Bottle } from '@/models/bottle';
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import BottleForm from '@/components/BottleForm.vue';

@Component({
  components: {
    'bottle-card': Card,
    'bottle-form': BottleForm,
  },
})
export default class Manage extends Vue {
  public bottles: Bottle[] = [];
  public selectedBottle: Bottle;
  public editOpen: boolean = false;
  constructor() {
    super();
    for (let i = 0; i < 5; i++) {
      this.bottles.push(new Bottle({
        bottle_id: 10,
        bottle_name: 'Vodka',
        bottle_type: 'Lorem ipsum dolor sit amoluptatibus dignissimos!',
        bottle_image: '',
        alcohol_content_percent: 40,
      }));
      this.selectedBottle = this.bottles[0];
    }
  }/** Closes any open bottles */
  private onBottleOpened(bottle: Bottle) {
    this.selectedBottle = bottle;
    this.editOpen = true;
  }
}
</script>

<style lang="scss" scoped>
// Import application mixins
@import "../sass/constants.scss";
@import "../sass/colors.scss";

#bottleCardContainer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: all 0.4s;
  padding: 20px 5px 20px 5px;
}

#bottleCardContainer.hidden {
  opacity: 0;
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
 