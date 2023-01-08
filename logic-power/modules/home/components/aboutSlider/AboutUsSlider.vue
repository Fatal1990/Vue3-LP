<template>
  <div class="slider-about" ref="sliderWidth">
    <div class="slider" ref="sliderWindow">
      <div class="slider__arrows">
        <div class="slider__arrow-left" @click="prevSlide">
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3L3 11L11 19"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="slider__arrow-right" @click="nextSlide">
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3L11 11L3 19"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <ul
        class="slider__list"
        :style="{ '--list-translateX': translateX + 'px' }"
        ref="slideList"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <AboutSliderItem
          v-for="(slide_, index) of sliderData"
          :key="index"
          :class="{ active: index === currentSlide }"
          :style="{ '--item-width': slideWidth + 'px' }"
          :aboutCard="slide_"
          :isMobile="isMobile"
          ref="slide"
        />
      </ul>
    </div>
    <div class="pagination">
      <div
        class="pagination__line"
        :style="{ '--line-width': lineMobWidth + 'px' }"
        ref="paginationLine"
      ></div>
      <div
        class="pagination__line-colored"
        :style="{ '--width-line': lineWidth + 'px' }"
      ></div>
      <div
        class="pagination__item"
        v-for="(slide, index) of sliderData"
        :key="index"
        ref="paginationItem"
      >
        <div class="pagination__title-w">
          <span
            class="pagination__title"
            :class="{
              active: index === currentSlide,
            }"
            >{{ slide.title }}
          </span>
          <div class="pagination__dot-w">
            <div
              class="pagination__dot"
              :class="{
                active: index === currentSlide,
                colored: paginationColoredDot(index),
              }"
              @click="goToSlide(index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutSliderItem from './AboutSliderItem.vue';

const slide = ref(null);
const slideList = ref(null);
const sliderWindow = ref(null);
const paginationLine = ref(null);
const paginationItem = ref(null);
const sliderWidth = ref(null);

const sliderData = [
  {
    img: 'mainAboutUsImg',
    title: '2007 @Year',
    text: '@Brand registration',
  },
  {
    img: 'mainAboutUsImg',
    title: '2009 @Year',
    text: '@Company wins tenders',
  },
  {
    img: 'mainAboutUsImg',
    title: '2012-2013 @Year',
    text: '@Company reaches UAH 1 million',
  },
  {
    img: 'mainAboutUsImg',
    title: '2014 @Year',
    text: '@Revolution in energy independence',
  },
  {
    img: 'mainAboutUsImg',
    title: '2015-2016 @Year',
    text: '@Brand actively developing alternative energy',
  },
  {
    img: 'mainAboutUsImg',
    title: '2017 @Year',
    text: '@LP commodity items in TOP sales',
  },
  {
    img: 'mainAboutUsImg',
    title: '2018 @Year',
    text: '@Company received certificate ISO 9001',
  },
  {
    img: 'mainAboutUsImg',
    title: '2019 @Year',
    text: '@Brand in Vybir roku',
  },
  {
    img: 'mainAboutUsImg',
    title: '2020-2021 @Year',
    text: '@Company wins tender again',
  },
  {
    img: 'mainAboutUsImg',
    title: '@Today',
    text: '@LP develop and test new types of equipment',
  },
];

let currentSlide = 0;
let translateX = 0;
let lineWidth = 0;
let slideWidth = 0;
let startX = 0;
let endX = 0;
let lineMobWidth = 0;
let isMobile = false;

const slideCount = sliderData.length;

const paginationColoredLineWidth = () => {
  const paginationItemRect =
    paginationItem.value[currentSlide].getBoundingClientRect();
  const lineIndent = paginationItemRect.width / 2;

  lineWidth = paginationItemRect.width * currentSlide + lineIndent;
};

const paginationLineMobWidthCalc = () => {
  const paginationItemRect =
    paginationItem.value[currentSlide].getBoundingClientRect();

  lineMobWidth = paginationItemRect.width * slideCount;
};

const paginationColoredDot = (index) => index <= currentSlide;

const adaptiveSliderWidth = () => {
  const sliderWindowRect = sliderWindow.value.getBoundingClientRect();

  slideWidth = (sliderWindowRect.width / 100) * 78;
};

const translateXWidthTimeOut = () => {
  console.log('slide', slide);
  /*setTimeout(() => {
    const slideRect = slide.value[currentSlide].getBoundingClientRect();
    const slideListRect = slideList.scrollWidth;
    const sliderWindowRect = sliderWindow.value.getBoundingClientRect();

    if (window.innerWidth <= 1024) {
      translateX =
        currentSlide *
        (-slideRect.width -
          (slideListRect - slideRect.width * slideCount) / (slideCount - 1));
    } else {
      translateX =
        currentSlide *
          (-slideRect.width -
            (slideListRect - slideRect.width * slideCount) / (slideCount - 1)) +
        (sliderWindowRect.width - slideRect.width) / 2;
    }
  }, 700);*/
};

const translateXWidth = () => {
  /*const slideRect = slide.value[currentSlide].getBoundingClientRect();

  const slideListRect = slideList.scrollWidth;
  const sliderWindowRect = sliderWindow.value.getBoundingClientRect();

  if (window.innerWidth <= 1024) {
    translateX =
      currentSlide *
      (-slideRect.width -
        (slideListRect - slideRect.width * slideCount) / (slideCount - 1));
  } else {
    translateX =
      currentSlide *
        (-slideRect.width -
          (slideListRect - slideRect.width * slideCount) / (slideCount - 1)) +
      (sliderWindowRect.width - slideRect.width) / 2;
  }*/
};

const calcIsMobile = () => {
  const mobWidth = getComputedStyle(sliderWidth.value).getPropertyValue(
    '--mobile-width',
  );
  isMobile = window.innerWidth <= parseInt(mobWidth);
};

const nextSlide = () => {
  if (currentSlide + 1 >= slideCount) currentSlide = 0;
  else currentSlide += 1;

  translateXWidth();
  paginationColoredLineWidth();
};

const prevSlide = () => {
  if (currentSlide - 1 < 0) currentSlide = slideCount - 1;
  else currentSlide -= 1;

  translateXWidth();
  paginationColoredLineWidth();
};

const goToSlide = (index) => {
  currentSlide = index;

  translateXWidth();
  paginationColoredLineWidth();
};

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  endX = 0;
}

function handleTouchMove(e) {
  endX = e.touches[0].clientX;
}

function handleTouchEnd() {
  const diffX = endX - startX;

  if (endX > 0 && endX < startX && diffX < -50) {
    if (currentSlide + 1 >= slideCount) {
      currentSlide = slideCount - 1;
    } else {
      currentSlide += 1;
    }
  } else if (endX > startX && diffX > 50) {
    if (currentSlide - 1 < 0) currentSlide = 0;
    else {
      currentSlide -= 1;
    }
  }

  translateXWidth();
  paginationColoredLineWidth();
}

function onResize() {
  adaptiveSliderWidth();
  translateXWidthTimeOut();
  paginationColoredLineWidth();
  paginationLineMobWidthCalc();
  calcIsMobile();
}

onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style lang="scss" scoped>
.slider-about {
  --mobile-width: #{$mobile-big-width};

  width: 100%;
  height: 836px;

  /*@extend %flex-column;*/
  align-items: center;
  gap: 48px;

  background-color: #d8d8d8;

  padding: 48px 16px;

  @include bigMobile {
    height: auto;

    gap: 24px;

    padding: 16px;
  }
}

.slider {
  width: 100%;
  max-width: 1920px;
  height: 620px;

  display: flex;

  position: relative;

  overflow: hidden;

  @include bigMobile {
    height: auto;
  }

  &__arrows {
    width: 100%;

    position: absolute;
    @include setAbs;

    @include flex-container(row, space-between, center);

    padding: 0 62px;

    z-index: 3;

    @include bigMobile {
      display: none;
    }
  }

  &__arrow-left {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    /*background-color: $color-main;*/
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      /*background-color: $color-main-dark;*/
    }
  }

  &__arrow-right {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    /*background-color: $color-main;*/
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      /*background-color: $color-main-dark;*/
    }
  }

  &__list {
    --list-translateX: 0;
    width: 100%;

    position: relative;

    @include flex-container;
    align-items: center;
    gap: 48px;

    transform: translateX(var(--list-translateX));
    transition: 0.7s cubic-bezier(0.18, 0.17, 0.74, 0.76);
  }
}

.pagination {
  @extend %width-main;

  position: relative;

  @include flex-container(row, space-between, center);

  @include bigMobile {
    max-width: none;

    padding-bottom: 16px;

    &::-webkit-scrollbar {
      width: 0;
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #8a8a8a;
    }

    &::-webkit-scrollbar-thumb {
      /*background-color: $color-main;*/
    }

    overflow-y: scroll;
  }

  &__item {
    width: 100%;
    min-height: 75px;
    max-height: 75px;

    position: relative;

    @include flex-container(row, space-between);

    @include bigMobile {
      min-height: 54px;
      max-height: 54px;

      min-width: 114px;
    }
  }

  &__line {
    --line-width: 0;
    height: 4px;
    width: 100%;

    position: absolute;
    bottom: 13px;
    left: 0;

    background-color: #a0a0a0;
    border-radius: 2px;

    transition: 0.7s ease;
    z-index: 5;

    @include bigMobile {
      width: var(--line-width);
      bottom: 22px;
    }
  }

  &__line-colored {
    --width-line: 0;

    height: 4px;
    width: var(--width-line);

    position: absolute;
    bottom: 13px;
    left: 0;

    /*background-color: $color-main;*/
    border-radius: 2px;

    transition: 0.7s ease;
    z-index: 6;

    @include bigMobile {
      bottom: 22px;
    }
  }

  &__title-w {
    width: 100%;

    position: relative;

    /*@extend %flex-column;*/
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    z-index: 7;
  }

  &__title {
    /*@include fontUnify(24, 34);*/
    color: #a0a0a0;

    overflow: auto;

    transition: 0.7s ease;

    @include bigMobile {
      /*@include fontUnify;*/
    }

    &.active {
      /*@include fontUnify(24, 34, 700);
      color: $color-text-dark;*/

      @include bigMobile {
        /*@include fontUnify;*/
      }
    }
  }

  &__dot-w {
    width: 56px;
    min-height: 30px;

    @include flex-container(row, center, center);

    background-color: #d8d8d8;

    @include bigMobile {
      width: 24px;
      min-height: 16px;
    }
  }

  &__dot {
    width: 16px;
    height: 16px;

    background-color: #a0a0a0;

    border-radius: 50%;

    transition: 0.7s ease;

    cursor: pointer;

    @include bigMobile {
      width: 12px;
      height: 12px;
    }

    &.active {
      width: 30px;
      height: 30px;
      border-radius: 50%;

      @include bigMobile {
        width: 16px;
        height: 16px;
      }
    }

    &.colored {
      /*background-color: $color-main;*/
    }
  }
}
</style>
