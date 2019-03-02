<template>
  <div class="container" style="--hue:0;">
    <img class="image" src="https://cdn.masterani.me/wallpaper/0/3042B9280QvU.jpg">
    <div class="overlay-color-top"></div>
    <div class="overlay-color-bottom"></div>
    <div class="overlay-color-dark"></div>
    <div class="main">
      <div class="main__title">The Rising of the Shield Hero</div>
      <div class="main__japanese">盾の勇者の成り上がり</div>
      <div class="main__ep">Episode 8 - Curse Series</div>
      <p class="main__desc">
        After hearing of a village in the East that's being ravaged by an epidemic,
        Naofumi and his party head there to deliver medicine.
      </p>
      <div class="btns">
        <svg viewBox="0 0 56 56" class="play">
          <!-- eslint-disable-->
          <path
            fill="#FFF"
            fill-rule="evenodd"
            stroke="#FFF"
            stroke-width="1.5"
            d="M55.25 28C55.25 12.95 43.048.75 28 .75 12.95.75.75 12.95.75 28S12.95 55.25 28 55.25c15.049 0 27.25-12.2 27.25-27.25zM21.74 17.104L40.613 28 21.741 38.895v-21.79z"
          ></path>
          <!-- eslint-enable-->
        </svg>
        <div class="text">Continue Watching</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  position: relative;
}
.image {
  width: 90%;
  object-fit: cover;
  overflow: hidden;
  margin-left: 10%;
}
.main {
  position: absolute;
  top: 29%;
  left: 5%;
  color: white;
  &__title {
    font-size: 48px;
    font-weight: 300;
    line-height: 55.2px;
    margin-top: 20px;
    width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__japanese {
    margin-bottom: 20px;
  }
  &__ep {
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  &__desc {
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    width: 35%;
  }
}
.btns {
  margin-top: 32px;
  display: flex;
  align-items: center;
  .play {
    width: 60px;
  }
  .text {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-transform: uppercase;
    margin-left: 16px;
  }
}

.overlay-color-top {
  background-image: linear-gradient(
      180deg,
      rgba(41, 44, 51, 0.8),
      rgba(41, 44, 51, 0.25) 15%,
      rgba(41, 44, 51, 0) 40%
    ),
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.432) 4.34%,
      rgba(0, 0, 0, 0.392) 7.78%,
      rgba(0, 0, 0, 0.338) 10.86%,
      rgba(0, 0, 0, 0.266) 13.74%,
      rgba(0, 0, 0, 0.189) 16.63%,
      rgba(0, 0, 0, 0.122) 19.8%,
      rgba(0, 0, 0, 0.059) 23.48%,
      rgba(0, 0, 0, 0.018) 27.91%,
      transparent 33.33%
    ),
    radial-gradient(
      ellipse at left top,
      hsla(var(--hue), 100%, 60%, 1) 5%,
      hsla(var(--hue), 100%, 60%, 0) 60%
    );
}
.overlay-color-bottom {
  background-image: linear-gradient(
    245deg,
    hsla(var(--hue), 50%, 40%, 0) 35%,
    hsla(var(--hue), 50%, 40%, 1) 70%
  );
}
.overlay-color-top,
.overlay-color-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.image,
.overlay-color-top,
.overlay-color-bottom {
  height: 90vh;
  min-height: 500px;
}
</style>
