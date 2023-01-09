<template>
  <article class="home-slider">
    <div class="home-slider__bg-w">
      <span class="ui-loader" v-if="!slideList.length"></span>
      <div
        class="home-slider__bg"
        v-for="(slide, index) in slideList"
        :key="index"
        :style="{ '--bg-color': slide.backgroundColor }"
        :class="{
          hideLeft: isHideLeft(index),
          hideRight: isHideRight(index),
          showLeft: isShowLeft(index),
          showRight: isShowRight(index),
        }"
      />
    </div>
    <div
      class="home-slider__slide-handler"
      v-for="(slide, index) in slideList"
      :key="index"
      :style="{
        '--bg-color': slide.backgroundColor,
        '--translateX': isActive(index, cssProsBannerTranslateX) + 'px',
        '--angle': isActive(index, cssProsBannerTranslateX * 0.2) + 'deg',
      }"
      :class="{
        hideLeft: isHideLeft(index),
        hideRight: isHideRight(index),
        showLeft: isShowLeft(index),
        showRight: isShowRight(index),
        active: isActive(index),
        move: isActive(index, isMove),
      }"
      @mousedown="startMove"
      @touchstart="startMove"
      @dragstart.stop
    >
      <section class="home-slider__slide">
        <div
          class="home-slider__info"
          :style="{
            '--title-and-btn-color': slide.titleAndBtnColor,
          }"
        >
          <h2 class="home-slider__title">
            <a :href="slide.url" :target="slide.url">
              {{ slide.title }}
            </a>
          </h2>
          <p class="home-slider__text">
            {{ slide.content }}
          </p>
          <a
            class="home-slider__btn"
            :href="slide.url"
            :target="slide.url"
            v-if="slide.buttonText"
          >
            {{ slide.buttonText }}
          </a>
        </div>
        <div
          class="home-slider__img-w"
          :class="{
            move: isActive(index, isMove),
            active: isActive(index),
          }"
          :style="{
            '--img-border-color': slide.imgBorderColor || null,
          }"
        >
          <img :src="slide.image" alt="" />
        </div>
      </section>
    </div>
    <div class="home-slider__arrows" v-if="slideList.length">
      <SliderButton
        class="home-slider__arrow-icon left"
        @click="leftClick"
        v-if="slideList.length"
      />
      <SliderButton
        class="home-slider__arrow-icon right"
        :directionRight="true"
        @click="rightClick"
      />
    </div>
    <ul class="home-slider__nav">
      <li
        class="home-slider__nav-item ui-btn"
        v-for="(slide, index) in slideList"
        :key="index"
        :class="{
          active: isActive(index),
        }"
        @click="setIndex(index, Math.sign(currIndex - index))"
      />
    </ul>
  </article>
</template>

<script setup>
import SliderButton from "~/modules/home/components/UI/SliderButton.vue";

const slideList = [
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://images.ctfassets.net/ql2dtx28kmvf/2ltaWF07s0nzDneVRsBS9/7c1c11394df6be85eb7590966337b8d6/Banner_new_B2B_-349552_-363636.png",
    backgroundColor: "#393D38",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
    imgBorderColor: "",
  },
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://images.ctfassets.net/ql2dtx28kmvf/4Va4aWBR80jjY1hZrjsZHA/833bad1bdf1d1d856aff6853fa125c51/Banner_new_B2B-7.png",
    backgroundColor: "#273d22",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
    imgBorderColor: "",
  },
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://images.ctfassets.net/ql2dtx28kmvf/2ltaWF07s0nzDneVRsBS9/7c1c11394df6be85eb7590966337b8d6/Banner_new_B2B_-349552_-363636.png",
    backgroundColor: "#393D38",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
    imgBorderColor: "",
  },
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://images.ctfassets.net/ql2dtx28kmvf/4Va4aWBR80jjY1hZrjsZHA/833bad1bdf1d1d856aff6853fa125c51/Banner_new_B2B-7.png",
    backgroundColor: "#273d22",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
    imgBorderColor: "",
  },
];

const isMove = ref(false);

const cssProsStartX = ref(0);
const cssProsBannerTranslateX = ref(0);

const currIndex = ref(0);

const isNextLeft = ref(false);
const nextIndex = ref(0);

const intervalID = ref(-1);
const intervalSeconds = ref(8);

const GRABBING = ref('grabbing');
const	HIDE_SCROLL = ref('hide-scroll');

class HomeSliderApi {
	getSliders() {
		return contentfulClient.getEntries({
			content_type: 'slider',
			locale: '*'
		}).then((data) => {
			return data.items
				.map(el => CNTFTransformer.transform(el.fields))
				.map(el => MainSliderItem.fromJson(el));
		});
	}
}

function getFormattedUrl(url) {
  return formatUrl(url);
}

function getIsAbsolutePath(url) {
	return new RegExp('^(?:[a-z+]+:)?//', 'i').test(url);
}

function formatUrl(url) {
  if (!url) return url;
  if (this.getIsAbsolutePath(url)) return url;
  if (url[0] !== '/') return '/' + url;
  return url;
}

function endInterval() {
  clearInterval(intervalID.value);
}

function startInterval() {
  endInterval();
  intervalID.value = setInterval(() => {
    moveOn(-1);
  }, intervalSeconds.value * 1000);
}

function beforeMount() {
  HomeSliderApi.getSliders().then(list => {
    slideList = list;
    startInterval();
  });
}

function leftClick() {
  moveOn(1);
}

function rightClick() {
  moveOn(-1);
}

function isHideLeft(index) {
  return index !== currIndex.value && !isNextLeft.value;
}

function isHideRight(index) {
  return index !== currIndex.value && isNextLeft.value;
}

function isShowLeft(index) {
  return index === currIndex.value && isNextLeft.value;
}

function isShowRight(index) {
  return index === currIndex.value && isNextLeft.value;
}

/// Проверяет равен ли переданный индекс текущему, если да, возвращает *значение второго параметра* или *1*.
///
/// В случае провала всех проверок возвращает *0*
function isActive(index, val) {
  if (typeof val !== "undefined" && index === currIndex.value) return val;
  else return +(index === currIndex.value);
}

function isMouse(e) {
	return e.type.includes('mouse')
}

function isTouch(e) {
	return e.type.includes('touch')
}

function startMove(event) {
   endInterval();

  if (isMouse(event)) {
    cssProsStartX.value = event.clientX;
    addEventListener("mousemove", move);
    addEventListener("mouseup", endMove);
  } else if (isTouch(event)) {
    cssProsStartX.value = event.touches[0].clientX;
    addEventListener("touchmove", move);
    addEventListener("touchend", endMove);
  }
  isMove.value = true; 

  document.body.classList.add(HIDE_SCROLL.value);
}

function move(event) {
  let currX;
  if (isMouse(event)) {
    currX = event.clientX;
  } else if (isTouch(event)) {
    currX = event.touches[0].clientX;
  }

  cssProsBannerTranslateX.value = (currX - cssProsStartX.value) * 0.6;
}

function endMove(event) {
   if (isMouse(event)) {
    removeEventListener("mousemove", move);
    removeEventListener("mouseup", endMove);
  } else if (isTouch(event)) {
    removeEventListener("touchmove", move);
    removeEventListener("touchend", endMove);
  }

  isMove.value = false;
  
  document.body.classList.remove(GRABBING.value);

  const sign = Math.sign(cssProsBannerTranslateX.value)
  cssProsBannerTranslateX.value = 0;
  moveOn(sign) 
}

function moveOn(sign) {
  let nextIndex = currIndex.value + sign * -1;
  
  if (nextIndex < 0) nextIndex = slideList.length - 1;
  else if (nextIndex >= slideList.length) nextIndex = 0;

  setIndex(nextIndex, sign);
}

function setIndex(nextIndex, sign) {
  isNextLeft.value = sign > 0;
  currIndex.value = nextIndex;

  startInterval(); 
}
</script>

<style lang="scss" scoped>
.home-slider {
  $local-anim-time: 0.5s;
  $anim-func: cubic-bezier(0.15, 0.69, 0.5, 1);

  position: relative;
  display: flex;
  justify-content: center;

  height: 750px;
  width: 100%;

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    @include setAbs();
    z-index: -2;

    background-color: black;
  }

  @include bigMobile() {
    /* height: 448px; */
  }

  @mixin animConfig() {
    animation-duration: $local-anim-time;
    animation-fill-mode: forwards;
    animation-timing-function: $anim-func;
  }

  @keyframes hideLeft {
    100% {
      left: -100%;
    }
  }

  @keyframes hideRight {
    100% {
      left: 100%;
    }
  }

  @keyframes showLeft {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }

  @keyframes showRight {
/*     0% {
      left: 100%;
    }
    100% {
      left: 0;
    } */
  }

  &__bg-w {
    display: flex;

    position: absolute;
    @include setAbs();
    z-index: -1;

    pointer-events: none;
    user-select: none;
  }

  &__bg {
    --bg-color: black;
    position: absolute;
    left: 0;
    top: 0;
    //top: 50%;

    height: 100%;
    //min-width: 100%;
    width: 100%;

    background-color: Var(--bg-color);

    //transform: translateY(-50%);
    transition: $local-anim-time $anim-func;

    &.showLeft {
      animation-name: showLeft;
      @include animConfig();
    }

    &.showRight {
      animation-name: showRight;
      @include animConfig();
    }

    &.hideLeft {
      animation-name: hideLeft;
      @include animConfig();
      opacity: 0;
    }

    &.hideRight {
      animation-name: hideRight;
      @include animConfig();
      opacity: 0;
    }
  }

  &__slide-handler {
    @extend %width-main;
    height: 100%;
    width: 100%;

    --translateX: 0px;
    --angle: 0deg;
    --bg-color: black;

    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
    user-select: none;

    padding: 24px 16px 32px;
    margin: auto;

    transition: $local-anim-time $anim-func;
    opacity: 1;

    cursor: grab;

    &.active {
      z-index: 2;
    }

    &.move {
      transform: translateX(var(--translateX));
      transition: 0s;
      cursor: grabbing;
    }

    &.showLeft {
      animation-name: showLeft;
      @include animConfig();
    }

    &.showRight {
      animation-name: showRight;
      @include animConfig();
    }

    &.hideLeft {
      animation-name: hideLeft;
      @include animConfig();
      opacity: 0;
    }

    &.hideRight {
      animation-name: hideRight;
      @include animConfig();
      opacity: 0;
    }
  }

  &__slide {
    height: 100%;
    max-width: 1130px;
    width: 100%;

    @include flex-container(row, space-between, center);

    gap: 16px;

    @include bigMobile() {
      flex-direction: column;
    }
  }

  &__info {
    --title-and-btn-color: #f36c21;

    position: relative;
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    z-index: 3;

    @include bigMobile() {
      height: 100%;
      width: 100%;

      align-items: center;
      justify-content: center;

      text-align: center;
    }
  }

  &__title {
    @include font(36, 43, 700);
    color: white;
  }

  /*   &__divider {
    width: max(50%, 150px);
    border: 1px solid #F7F9FA;

    @include bigMobile() {
      display: none;
    }
  } */

  &__text {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: white;
  }

  &__btn {
    @include flex-container(row, center, center);

    position: relative;

    @include font(18, 24);
    letter-spacing: 0.02em;
    color: #f36c21;

    gap: 8px;

    /*  min-width: 200px; */
    /*   background-color: var(--title-and-btn-color); */
    cursor: pointer;
    user-select: none;
    /* 	--border-width: 0px;
	--vert-pad: 8px;
	--horiz-pad: 16px; */

    /* 	padding: Calc(Var(--vert-pad) - Var(--border-width)) Calc(Var(--horiz-pad) - Var(--border-width)); */

    /* border-radius: 16px; */

    z-index: 2;
    transition: 0.2s ease-in-out;

    &:after {
      content: "";

      width: 0;
      height: 1px;

      position: absolute;
      left: 0;
      bottom: 0;

      background-color: #f36c21;

      transition: width 0.2s ease-in-out;
    }

    &:hover {
      &:after {
        width: 100%;
      }

      /* box-shadow: inset 0 0 400px 110px rgba(0, 0, 0, .2); */
    }
/* 
    	&::before,
	&::after {
		transition: .2s ease-in-out;
	} */

    &.disabled {
      pointer-events: none;
      opacity: 0.45;
      filter: grayscale(1);
    }

    &.low-disabled {
      opacity: 0.45;
      filter: grayscale(1);
    }

    &.wide {
      min-width: 350px;
      max-width: 350px;
      width: 100%;

      @include mobile() {
        min-width: 100%;
        width: 100%;
        max-width: 100%;
      }
    }

    &.loading {
      pointer-events: none;

      &:before {
        content: "";

        width: 100%;
        height: 100%;

        position: absolute;
        @include setAbs();

        border-radius: inherit;
        background-color: inherit;

        z-index: 2;
      }

      &:after {
        content: "";

        position: absolute;
        top: 50%;
        left: 50%;

        color: inherit;

        background-color: transparent;
        border-radius: 50%;
        border: 1px solid currentColor;
        border-top-color: transparent;

        @keyframes absolute-spin {
          from {
            transform: translate(-50%, -50%) rotate(0);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }

        animation-name: absolute-spin;

        animation-duration: 0.3s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;

        z-index: 3;
      }
    }

    &.big {
      --vert-pad: 12px;
      --horiz-pad: 24px;

      border-radius: 24px;

      @include bigMobile() {
        --vert-pad: 8px;
        --horiz-pad: 16px;
      }
    }

    @mixin local-small-mob() {
      @include bigMobile() {
        --horiz-pad: 8px;
        --vert-pad: 4px;
        @include font(16, 16);
      }
    }

    &.small {
      @include font(14, 16);

      * {
        @include font(14, 16);
      }

      @include local-small-mob();
    }

    @include bigMobile() {
      --horiz-pad: 12px;
      @include font(16, 20);
    }

    &.small-mob {
      @include local-small-mob();
    }
  }

  &__img-w {
    max-width: 404px;
    width: 100%;
    height: 100%;

    --img-border-color: #f36c21;
    position: relative;

    display: flex;
    justify-content: center;

    z-index: 2;
    pointer-events: none;
    overflow: hidden;

    @include bigMobile() {
      //display: none;

      position: absolute;
      right: 0;
      top: 0;
      width: 100%;

      transform: translateX(40%) scale(1.4);
      opacity: 0.07;
    }

    img {
      position: relative;
      height: 100%;
      object-fit: contain;
    }

    &::before {
      content: "";
      position: absolute;
      @include setAbs(6px, 6px, 6px, 6px);

      border: 1px solid var(--img-border-color);
      transition: Calc(#{$local-anim-time} / 2) $anim-func;

      opacity: 0;
      z-index: -2;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: Calc(100% - 16px);
      padding-top: 120%;
      background-color: Var(--bg-color);

      opacity: 0;
      transition: $local-anim-time $anim-func;
      transform: translate(-50%, -50%) rotate(Calc(45deg - Var(--angle)));

      z-index: -1;
    }

    &.move {
      &::after {
        transition: 0s;
      }
    }

    &.active {
      &::before {
        transition: Calc(#{$local-anim-time} * 2) $anim-func;
      }

      &::before,
      &::after {
        opacity: 1;
      }
    }
  }

  &__arrows {
    @extend %width-main;

    position: absolute;
    @include setAbs();

    @include flex-container(row, space-between, center);

    padding: 16px;
    margin: auto;

    pointer-events: none;
    user-select: none;

    z-index: 5;

    @include bigMobile {
      
    }
  }

  &__nav {
    position: absolute;
    left: 0;
    bottom: 54px;

    width: 100%;

    @include flex-container(row, center, center);
    gap: 24px;

    pointer-events: none;
    user-select: none;
    z-index: 6;

    @include bigMobile {
      bottom: 32px;
    }
  }

  &__nav-item {
    width: 20px;
    height: 20px;

    position: relative;

    background-color: white;
    border-radius: 50%;

    pointer-events: auto;
    cursor: pointer;

    transform: rotate(45deg);
    transition: 0.2s ease-in-out;

    @include bigMobile {
      width: 12px;
      height: 12px;
    }

    &::before,
    &::after {
      transition: 0.2s ease-in-out;
    }

    &::before {
      content: "";
      position: absolute;
      @include setAbs(4px, 4px, 4px, 4px);

      min-height: 100%;
      min-width: 100%;
    }

    &.active {
      background-color: #f36c21;
      transform: rotate(45deg) scale(1.2);
    }
  }
}
</style>
