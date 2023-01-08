<template>
  <div class="cooperation-slider">
    <div
      class="cooperation-slider__arrow-left"
      :class="{ disable: currentSlide <= 0 }"
      @click="prevSlide"
    >
      <SvgIconLocal
        class="cooperation-slider__arrow-left-img"
        name="mainNavArrowLeftIcon"
      />
    </div>
    <div class="cooperation-slider__w" ref="slideWrap">
      <div
        class="cooperation-slider__cont"
        ref="slideList"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :style="{
          '--translate-x': translateListX + 'px',
          '--gap': gapLength + 'px',
        }"
      >
        <div
          class="cooperation-slider__item"
          v-for="(item, index) in sliderData"
          :key="index"
          ref="slideListItem"
        >
          <SvgIconLocal class="cooperation-slider__img" :name="item.img" />
        </div>
      </div>
    </div>
    <div
      class="cooperation-slider__arrow-right"
      :class="{ disable: slideMaxCount === currentSlide }"
      @click="nextSlide"
    >
      <SvgIconLocal
        class="cooperation-slider__arrow-right-img"
        name="mainNavArrowRightIcon"
      />
    </div>
  </div>
</template>

<script setup>
import SvgIconLocal from '~/modules/shared/SvgIconLocal.vue';

const sliderData = [
  {
    id: 1,
    img: 'mainCooperationAtbIcon',
  },
  {
    id: 2,
    img: 'mainCooperationMoyoIcon',
  },
  {
    id: 3,
    img: 'mainCooperationPromIcon',
  },
  {
    id: 4,
    img: 'mainCooperationFIcon',
  },
  {
    id: 5,
    img: 'mainCooperationSilpoIcon',
  },
  {
    id: 6,
    img: 'mainCooperationRozetkaIcon',
  },
  {
    id: 7,
    img: 'mainCooperationRozetkaIcon',
  },
  {
    id: 8,
    img: 'mainCooperationRozetkaIcon',
  },
  {
    id: 9,
    img: 'mainCooperationRozetkaIcon',
  },
];

const slideWrap = ref(null);
const slideListItem = ref(null);
const slideList = ref(null);

let currentSlide = 0;
let gapLength = 0;
let translateListX = 0;
let slideMaxCount = 0;
let startX = 0;
let endX = 0;

const slideCount = sliderData.length;

const step = () => 100 / slideCount;

const translateX = () => {
  const slideItemRect =
    slideListItem.value[currentSlide].getBoundingClientRect();

  return -slideItemRect.width * currentSlide - gapLength * currentSlide;
};

const calcItemsLength = () => {
  const slideWrapRect = slideWrap.value.getBoundingClientRect();
  const slideItemRect =
    slideListItem.value[currentSlide].getBoundingClientRect();

  let slideItemsCount = Math.floor(slideWrapRect.width / slideItemRect.width);

  if (slideItemsCount >= slideCount) slideItemsCount = slideCount;

  gapLength =
    (slideWrapRect.width - slideItemsCount * slideItemRect.width) /
    (slideItemsCount - 1);

  const slideMaxWidth =
    (slideCount - slideItemsCount) * slideItemRect.width +
    gapLength * (slideCount - slideItemsCount);

  slideMaxCount = slideCount - slideItemsCount;

  if (-slideMaxWidth >= translateX()) {
    translateListX = -slideMaxWidth;
    currentSlide = slideMaxCount;
  } else
    translateListX =
      -slideItemRect.width * currentSlide - gapLength * currentSlide;
};

const nextSlide = () => {
  if (currentSlide + 1 >= slideCount) currentSlide = slideCount;
  else currentSlide += 1;

  calcItemsLength();
};

const prevSlide = () => {
  if (currentSlide - 1 < 0) currentSlide = 0;
  else currentSlide -= 1;

  calcItemsLength();
};

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  endX = 0;
}

function handleTouchMove(e) {
  endX = e.touches[0].clientX;
}

function handleTouchEnd() {
  const slideItemRect =
    slideListItem.value[currentSlide].getBoundingClientRect();
  const slideWrapRect = slideWrap.value.getBoundingClientRect();

  const mobMaxWidth = slideCount * slideItemRect.width;

  const mobGapStr = getComputedStyle(slideList.value).getPropertyValue(
    '--mob-gap',
  );
  const mobGap = parseFloat(mobGapStr);

  const mobWidthToShow =
    mobMaxWidth + mobGap * (slideCount - 1) - slideWrapRect.width;

  if (endX > 0 && endX < startX) translateListX -= slideWrapRect.width / 1.2;
  else if (endX > 0 && endX > startX)
    translateListX += slideWrapRect.width / 1.2;

  if (translateListX >= 0) translateListX = 0;
  else if (translateListX <= -mobWidthToShow) {
    translateListX = -mobWidthToShow;
  }
}

function onResize() {
  calcItemsLength();
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
.cooperation-slider {
  @extend %width-main;

  @include flex-container(row, space-between, center);
  gap: 56px;

  &__arrow-left {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s ease;

    @include mobile {
      display: none;
    }

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  &__arrow-left-img {
  }

  &__w {
    width: 1290px;
    overflow: hidden;
    overscroll-behavior: contain;
  }

  &__cont {
    --translate-x: 0;
    --gap: 0;
    --mob-gap: 8px;

    @include flex-container;
    gap: var(--gap);

    transform: translateX(var(--translate-x));
    transition: 0.3s ease-in-out;

    @include mobile {
      gap: var(--mob-gap);
      transition: 0.35s cubic-bezier(0.08, 0.66, 0.22, 1.06);
    }
  }

  &__item {
    min-width: 201px;

    @include mobile {
      min-width: 150px;
    }
  }

  &__img {
    height: 100%;
    object-fit: contain;
  }

  &__arrow-right {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    @include mobile {
      display: none;
    }

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  &__arrow-right-img {
  }
}
</style>
