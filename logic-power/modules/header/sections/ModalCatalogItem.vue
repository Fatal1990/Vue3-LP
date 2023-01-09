<template>
  <li
    class="catalog__main-item"
    v-for="(item, index) in categories"
    :key="item.id"
    @mouseover="selectIndex(index)"
  >
    <ModalCatalogItem v-if="item.children" :categories="item.children" />
    <div v-else class="catalog__item-wrapper">
      <div class="catalog__image">
        <SvgIconRemote
          v-if="item.img"
          :url="item.img"
          width="28px"
          height="28px"
        />
      </div>
      <span class="catalog__title">{{ item.name[lang] }}</span>
    </div>

    <div v-if="item.children" class="catalog__image-arrow">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </li>
</template>

<script setup>
import SvgIconRemote from '~/modules/shared/SvgIconRemote.vue';

const { urlLang } = useRoute().params;
const { categories } = defineProps(['categories']);

const lang = urlLang ? urlLang : 'ru';

const counterMenu = ref(0);
const currentIndex = ref(null);

function selectIndex(i) {
  currentIndex.value = i;
  counterMenu.value = 1;
}
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;

  opacity: 0;
  visibility: hidden;

  &.active {
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);

    opacity: 1;
    visibility: visible;

    @include bigMobile {
      display: none;
    }

    .catalog__blur {
      visibility: visible;
      opacity: 1;
    }
  }

  &__wrapper {
    width: 100%;

    display: flex;
  }

  &__main-list {
    max-width: 334px;
    width: 100%;

    @include flex-container(column, flex-start);

    background-color: white;

    gap: 8px;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &__main-item {
    min-height: 44px;

    @include flex-container(row, space-between, center);

    padding: 0 16px;

    cursor: pointer;

    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: #efefef;
    }
  }

  &__item-wrapper {
    @include flex-container(row, flex-start, center);

    gap: 16px;
  }

  &__image {
    flex: 1 0 auto;

    font-size: 0;
  }

  &__image-arrow {
    font-size: 0;
  }

  &__category-title {
    max-width: 270px;
    width: 100%;

    @include font(14, 22, 400);
    color: var(--color-primary-base);
    letter-spacing: 0.02em;
  }

  &__title {
    max-width: 270px;
    width: 100%;

    @include font(14, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;

    &.submenu {
      white-space: nowrap;
    }
  }

  &__submenu {
    width: 0;

    background-color: white;

    overflow: hidden;

    transition: width 0.4s ease-in-out;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    &.active {
      width: 334px;

      box-shadow: -16px 0px 7px -16px rgba(0, 0, 0, 0.25);
    }
  }

  &__submenu-item {
    display: none;

    &.active {
      display: block;
    }
  }

  &__submenu-list {
    @include flex-container(column, flex-start);

    gap: 8px;
  }

  &__category-item {
    min-height: 44px;

    @include flex-container(row, space-between, center);

    padding: 0 16px;

    cursor: pointer;

    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: #efefef;
    }
  }

  &__submenu-deep {
    width: 0;

    background-color: white;

    transition: width 0.4s ease-in-out;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    &.active {
      width: 334px;

      box-shadow: -16px 0px 7px -16px rgba(0, 0, 0, 0.25);
    }
  }

  &__blur {
    display: flex;

    position: fixed;
    @include setAbs(0, 0, 0, 0);

    background-color: rgba(217, 217, 217, 0.4);
    backdrop-filter: blur(3px);

    z-index: 510;
    visibility: hidden;
    opacity: 0;

    transition: all 0.3s ease-in-out;
  }
}
</style>
