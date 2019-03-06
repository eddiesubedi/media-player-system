<template>
  <div class="container" style="--hue:220;">
    <img class="image" src="https://cdn.masterani.me/wallpaper/0/2984D7lgN4j2.jpg">
    <div class="overlay-color-top"></div>
    <div class="overlay-color-bottom"></div>
    <div class="overlay-color-dark"></div>
    <div class="main">
      <div class="main__title">That Time I Got Reincarnated as a Slime</div>
      <div class="main__japanese">転生したらスライムだった件</div>
      <div class="main__ep">Episode 22 - Conquering the Labyrinth</div>
      <p class="main__desc">
        Corporate worker Mikami Satoru is stabbed by a random killer,
        and is reborn to an alternate world. But he turns out to be
        reborn a slime! Thrown into this new world with the name Rimuru,
        he begins his quest to create a world that’s welcoming to all races.
      </p>
      <div class="btns">
        <svg viewBox="0 0 56 56" class="btns__play">
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
        <div class="btns__text">Continue Watching</div>
        <div class="detailIcon" v-tooltip.top="'Details'">
          <div class="detailIcon__lines">
            <span class="detailIcon__line-1"></span>
            <span class="detailIcon__line-2"></span>
            <span class="detailIcon__line-3"></span>
          </div>
        </div>
        <div
          class="addIcon"
          v-tooltip.top="toolTipText"
          :class="{ added: onWatchList }"
          @click="toggleWatchList"
        >
          <div class="addIcon__lines" :class="{ added: onWatchList }">
            <span class="addIcon__line-1"></span>
            <span class="addIcon__line-2"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onWatchList: false,
      toolTipText: 'Add to watchlist',
    };
  },
  methods: {
    toggleWatchList() {
      this.onWatchList = !this.onWatchList;
      if (this.onWatchList) {
        this.toolTipText = 'Remove from watchlist';
      } else {
        this.toolTipText = 'Add to watchlist';
      }
    },
  },
  mounted() {},
};
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
    width: 35%;
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
  &__play {
    width: 60px;
    transition: transform 0.2s ease;
    cursor: pointer;
  }
  &__play:hover {
    transform: scale(1.1);
  }
  &__text {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-transform: uppercase;
    margin-left: 16px;
  }
}
.detailIcon {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: inset 0 0 0 2px hsla(0, 0%, 100%, 0.4);
  margin-left: 25px;
  transition: box-shadow 0.2s ease-in, transform 0.2s ease-in;
  cursor: pointer;
  &__lines {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
  }
  &__line-1 {
    width: 16px !important;
  }
  &__line-2 {
    transform: rotate(45deg) translateY(-5.25px);
  }
  &__line-3 {
    transform: rotate(135deg) translateY(-5.25px);
  }
  &__line-1,
  &__line-2,
  &__line-3 {
    background-color: white;
    position: absolute;
    width: 12px;
    height: 2px;
  }
}
.detailIcon:hover {
  box-shadow: inset 0 0 0 2px #fff;
  transform: scale(1.1);
}
.addIcon {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: inset 0 0 0 2px hsla(0, 0%, 100%, 0.4);
  margin-left: 15px;
  transition: box-shadow 0.2s ease-in, transform 0.2s ease-in,
    background-color 0.2s ease-in;
  cursor: pointer;
  &__lines {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    transition: transform 0.2s ease;
  }
  &__line-1 {
    transform: rotate(90deg);
  }
  &__lines.added {
    transform: translateY(-2.25px) rotate(45deg);
  }
  &__lines.added &__line-1 {
    transform: rotate(90deg) translateY(-3.25px);
    background-color: hsla(var(--hue), 100%, 30%, 1);
  }
  &__lines.added &__line-2 {
    width: 8px;
    transform: translateY(7.25px);
    background-color: hsla(var(--hue), 100%, 30%, 1);
  }
  &__line-1,
  &__line-2 {
    background-color: white;
    position: absolute;
    width: 16px;
    height: 2px;
  }
}
.addIcon.added {
  background-color: white;
}
.addIcon:hover {
  box-shadow: inset 0 0 0 2px #fff;
  transform: scale(1.1);
}
.addIcon.added:hover .addIcon__lines.added {
  top: 57%;
}
.addIcon.added:hover .addIcon__line-1 {
  transform: rotate(90deg);
}
.addIcon.added:hover .addIcon__line-2 {
  width: 16px;
  transform: translateY(0);
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
  min-height: 800px;
}
</style>
