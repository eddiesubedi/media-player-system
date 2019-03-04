<template>
  <div class="container">
    <div class="slider">
      <div v-for="i in numberOfSlides" :key="i" class="slider__item slider__item--active">
        <div>{{i}}</div>
      </div>
      <!-- <div class="slider__item slider__item--new" v-for="i in numberOfSlides" :key="i">{{i}}nigger</div> -->
    </div>
    <button @click="slideLeft">Left</button>
    <button @click="slideRight">Right</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfSlides: 5,
      slideAmount: 0,
      opacityAmount: 1,
    };
  },
  watch: {
    numberOfSlides() {
      this.updateCSSVariable('--Slider-items', this.numberOfSlides);
    },
    slideAmount() {
      this.updateCSSVariable('--Slide-amount', `${this.slideAmount}%`);
    },
    opacityAmount() {
      this.updateCSSVariable('--Opacity', this.opacityAmount);
    },
  },
  methods: {
    updateCSSVariable(name, value) {
      this.$el.style.setProperty(name, value);
    },
    slideLeft() {
      this.slideAmount = 98;
      this.opacityAmount = 0;
    },
    slideRight() {
      this.slideAmount = -98;
      this.opacityAmount = 0;
    },
  },
  mounted() {
    this.updateCSSVariable('--Slider-items', this.numberOfSlides);
    this.updateCSSVariable('--Slide-amount', `${this.slideAmount}vw`);
    this.updateCSSVariable('--Opacity', 1);
  },
};
</script>

<style scoped lang="scss">
$margin: 20px;
$height: 600px;
// .container {
//   position: relative;
//   height: $height + $margin * 2;
//   overflow: hidden;
// }
// .slider {
//   height: $height;
//   transform: translateX(var(--Slide-amount));
//   margin: $margin;
//   transition: transform 0.2s ease;
//   &__item {
//     display: inline-block;
//     width: calc(100% / var(--Slider-items));
//     height: 100%;
//     background-color: green;
//     opacity: var(--Opacity);
//     transition: transform 0.5s ease-out, opacity 0.5s ease-out;
//   }
//   &__item:hover {
//     transform: scale(1.05);
//     background-color: lightseagreen;
//   }
// }
.container {
  overflow: hidden;
}
.slider {
  $padding: 1%;
  white-space: nowrap;
  padding: $padding;
  margin: 1%;

  transform: translateX(calc(var(--Slide-amount)));
  transition: transform 0.3s ease;
  &__item {
    display: inline-block;
    height: 100%;
    height: $height;
    width: calc(100% / var(--Slider-items));
    background-color: green;
    border: 1px solid black;
    &--active {
      opacity: var(--Opacity);
      transition: opacity 0.5s ease-out;
    }
    &--active:hover {
      transform: scale(1.05);
      background-color: lightseagreen;
    }
    &--new {
      opacity: calc(1 - var(--Opacity));
      transition: opacity 0.5s ease-out;
    }
  }
}
</style>
