<template>
  <!-- For Managing drinks in the machine -->
  <div class="card" :class="{open: bottle.isOpen}" @click="openDrink(bottle)">
    <div class="title">{{bottle.name}}</div>
    <div class="description">{{bottle.type}}</div>
  </div>
</template> 

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Bottle } from '@/models/bottle';

@Component({
  components: {
  },
})
export default class DrinkCard extends Vue {
  @Prop() public drink: Bottle;
}
</script>

<style lang="scss" scoped>
// Import application mixins
@import "../sass/constants.scss";
@import "../sass/colors.scss";

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

.cardInternal {
  background-color: white;
  width: 300px;
  height: 150px;
}

.card.open {
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: rotateX(90deg);
}
.title {
  font-size: 1.8em;
  width: 100%;
  height: 30%;
  margin-top: 0;
  text-align: center;
  pointer-events: none;
  user-select: none;
}

.description {
  height: 80%;
  pointer-events: none;
  user-select: none;
}
</style>
