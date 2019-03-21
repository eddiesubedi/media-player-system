<template>
  <div class="container">
    <div class="slider">
      <span v-for="(anime, i) in animes" :key="anime.url" class="slide-container">
        <div class="slider__slide slide" :class="calculate(i)">
          <img :src="anime.url" alt class="slide__image">
          <div class="slide__overlay" :style="{'--hue':anime.hue}"></div>
          <div class="slide__content">
            <div class="slide__content--title">{{anime.name}}</div>
            <div class="slide__content--info">{{anime.info}}</div>
          </div>
        </div>
      </span>
    </div>
    <div class="btn">
      <svg
        viewBox="0 0 64 64"
        class="btn__left"
        @click="left"
        :class="{'btn--disabled': leftBtnDisabled}"
      >
        <title>Previous</title>
        <g transform="matrix(0 -1 -1 0 64 64)" fill="none" fill-rule="evenodd">
          <circle fill="#121417" cx="32" cy="32" r="32"></circle>
          <path d="M40.8 27.92l-9.2 9.2-9.2-9.2" stroke-width="2" stroke="#fff"></path>
        </g>
      </svg>
      <svg
        viewBox="0 0 64 64"
        class="btn__right"
        @click="right"
        :class="{'btn--disabled': rightBtnDisabled}"
      >
        <title>Next</title>
        <g transform="rotate(-90 32 32)" fill="none" fill-rule="evenodd">
          <circle fill="#121417" cx="32" cy="32" r="32"></circle>
          <path d="M40.8 27.92l-9.2 9.2-9.2-9.2" stroke-width="2" stroke="#fff"></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import Data from '../assets/data';

export default {
  data() {
    return {
      animes: Data,
      numberOfSlides: 5,
      slideAmount: 0,
      slideGroup: 0,
      leftBtnDisabled: false,
      rightBtnDisabled: false,
    };
  },
  watch: {
    numberOfSlides() {
      this.updateCSSVariable('--Slider-items', this.numberOfSlides);
    },
    slideAmount() {
      this.updateCSSVariable('--Slide-amount', `${this.slideAmount}%`);
    },
  },
  methods: {
    updateCSSVariable(name, value) {
      this.$el.style.setProperty(name, value);
    },
    right() {
      if (this.animes.length > (this.slideGroup + 1) * this.numberOfSlides) {
        let numberOfImagesShown = this.numberOfSlides * (this.slideGroup + 1);
        let remaningImages = this.animes.length - numberOfImagesShown;
        if (this.numberOfSlides <= remaningImages) {
          this.slideAmount = this.slideAmount - 100;
        } else {
          let slideAmount = (100 / this.numberOfSlides) * remaningImages;
          this.slideAmount = this.slideAmount - slideAmount;
        }
        this.slideGroup = this.slideGroup + 1;
      }
      this.disabledBtn();
    },
    left() {
      if (this.slideGroup > 0) {
        let leftOver = this.slideAmount % 100;
        if (leftOver != 0) {
          this.slideAmount = this.slideAmount - leftOver;
        } else {
          this.slideAmount = this.slideAmount + 100;
        }
        this.slideGroup = this.slideGroup - 1;
      }
      this.disabledBtn();
    },
    calculate(i) {
      var left = this.numberOfSlides * this.slideGroup + 1;
      var right = left + (this.numberOfSlides - 1);
      if (right > this.animes.length) {
        right = this.animes.length;
        left = right - (this.numberOfSlides - 1);
      }
      if (i + 1 >= left && i + 1 <= right) {
        var disabled = false;
      } else {
        disabled = true;
      }
      return {
        'slide--disabled': disabled,
      };
    },
    disabledBtn() {
      if (this.slideGroup > 0) {
        this.leftBtnDisabled = false;
      } else {
        this.leftBtnDisabled = true;
      }
      if (this.animes.length > (this.slideGroup + 1) * this.numberOfSlides) {
        this.rightBtnDisabled = false;
      } else {
        this.rightBtnDisabled = true;
      }
    },
  },
  mounted() {
    this.updateCSSVariable('--Slider-items', this.numberOfSlides);
    this.updateCSSVariable('--Slide-amount', `${this.slideAmount}%`);
    this.disabledBtn();
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-left: 2vw;
  margin-right: 2vw;
}
.slider {
  transform: translateX(var(--Slide-amount));
  transition: transform 0.6s ease-out;
  box-shadow: 0 24px 88px -8px rgba(4, 4, 5, 0.4);
}
.slide-container {
  white-space: nowrap;
}
.slide {
  position: relative;
  width: calc(100% / var(--Slider-items));
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  transition: transform 0.2s ease;
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-image: linear-gradient(
        15deg,
        hsla(var(--hue), 50%, 40%, 1) 5%,
        hsla(var(--hue), 50%, 40%, 0.2) 75%
      ),
      radial-gradient(
        circle at center bottom,
        hsla(var(--hue), 100%, 60%, 0.4) 10%,
        hsla(var(--hue), 100%, 60%, 0) 60%
      ),
      linear-gradient(345deg, rgba(0, 0, 0, 0.25) 5%, transparent 25%);
  }
  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 2.5em;
    font-weight: 300;

    top: 0;
    padding-left: 2vw;
    padding-right: 2vw;
    top: 62%;
    white-space: pre-line;
    &--title {
      $lineHeight: 35px;
      line-height: $lineHeight;
      height: $lineHeight * 2; /* height is 2x line-height, so two lines will display */
      overflow: hidden;
      margin-bottom: 1.5vw;
    }
    &--info {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }
  &--disabled {
    opacity: 0;
    transition: opacity 0.6s ease;
  }
}
.slide:hover {
  transform: scale(1.03);
  box-shadow: 0 24px 88px -8px rgba(4, 4, 5, 0.4);
  z-index: 2;
  transition-delay: 0.2s;
}
.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  display: flex;
  width: 95vw;
  justify-content: space-between;
  &__left,
  &__right {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 2px 4px 10px 0 rgba(4, 4, 5, 0.6);
    cursor: pointer;
    transition: opacity 0.2s ease;
  }
  &__left {
    transform: translateX(-50%);
  }
  &__right {
    transform: translateX(50%);
  }
  &--disabled {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
