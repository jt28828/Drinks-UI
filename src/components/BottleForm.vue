<template>
  <div id="bottleForm">
    <h1>{{(bottle != null)? 'Editing ' : 'Creating '}}Bottle</h1>
    <form>
      <label>Name</label>
      <input type="text" placeholder="Name" />
      <label>Description</label>
      <input type="text" placeholder="Description" />
      <label>Image</label>
      <input type="text" placeholder="Image" />
      <label>Alcohol Percentage</label>
      <input type="number" placeholder="Alcohol Percentage" />
      <button id="cancelButton">Cancel</button>
      <button id="submitButton">Submit</button>
    </form>

  </div>
</template> 

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Bottle } from '@/models/bottle';

@Component({
  components: {
  },
})
export default class BottleForm extends Vue {
  @Prop() private bottle: Bottle;
  public get thisBottle(): Bottle {
    return this.bottle;
  }
  public set thisBottle(b: Bottle) {
    this.bottle = b;
  }
}
</script>

<style lang="scss" scoped>
// Import application mixins
@import "../sass/constants.scss";
@import "../sass/colors.scss";
#bottleForm {
  position: absolute;
  width: 90%;
  height: 90%;
  max-width: 650px;
  max-height: 700px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  box-shadow: 3px 5px 15px 0 #bdbdbd;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
}
h1 {
  text-align: center;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0px;
}

input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  width: 80%;
}
label {
  margin-left: 10%;
  font-size: 16px;
  font-weight: 400;
}
#cancelButton {
  float: left;
  margin-bottom: 20px;
  background-color: map-get($red, "500");
}
#submitButton {
  float: right;
  margin-bottom: 20px;
}
</style>
