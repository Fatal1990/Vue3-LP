<template>
  <section class="catalog" :class="{ active: menuItems.active }" ref="modal">
    <div class="catalog__wrapper">
      <ul class="catalog__main-list" ref="content">
        <li
          class="catalog__main-item"
          v-for="(item, index) in menuItems.menu"
          :key="index"
          @mouseover="selectIndex(index)"
        >
          <div class="catalog__item-wrapper">
            <div class="catalog__image">
              <img
                :src="`/_nuxt/public/icons/${item.image}`"
                :alt="item.title"
              />
            </div>
            <span class="catalog__title">{{ item.title }}</span>
          </div>

          <div class="catalog__image-arrow">
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
      </ul>
      <section class="catalog__submenu" :class="{ active: counterMenu >= 1 }">
        <div
          class="catalog__submenu-item"
          :class="{ active: index === currentIndex }"
          v-for="(item, index) in menuItems.submenu"
          :key="index"
        >
          <ul class="catalog__submenu-list">
            <li
              class="catalog__category-item"
              v-for="(category, i) in item.category"
              :key="i"
              @mouseover="selectIndexSubmenu(i, category)"
            >
              <span class="catalog__title submenu">{{ category.item }}</span>
              <div v-if="category.submenu" class="catalog__image-arrow">
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
          </ul>
        </div>
      </section>
      <section
        class="catalog__submenu-deep"
        :class="{ active: counterMenu === 2 }"
      >
        <div
          class="catalog__submenu-item"
          :class="{ active: index === currentIndexSubmenu }"
          v-for="(item, index) in menuItems.submenuDeep"
          :key="index"
        >
          <ul class="catalog__submenu-list">
            <li
              class="catalog__category-item"
              v-for="(category, i) in item.category"
              :key="i"
            >
              <span class="catalog__title submenu">{{ category.item }}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { useHeaderlStore } from "~~/store/headerStore";

const header = useHeaderlStore();
const menuItems = header.getModalCatalog;
const activeCatalog = header.activeCatalog;

const counterMenu = ref(0);
const currentIndex = ref(null);
const currentIndexSubmenu = ref(null);

const modal = ref(null);
const content = ref(null);

let { nullState } = toRefs(props);

const props = defineProps({
  nullState: { type: Boolean, required: false },
});

const emits = defineEmits(["catalogModal", "heightContent"]);

watch(nullState, (currentState) => {
  if (currentState) {
    counterMenu.value = 0;
  }
});

function selectIndex(i) {
  currentIndex.value = i;
  counterMenu.value = 1;
}

function selectIndexSubmenu(i, category) {
  if (category.submenu) {
    currentIndexSubmenu.value = i;
    counterMenu.value = 2;
  } else {
    counterMenu.value = 1;
  }
}

function resizeCatalog() {
  if (window.innerWidth < 1024) {
    activeCatalog(false);
  }
}

function sendEmits() {
  emits("catalogModal", modal.value);
  emits("heightContent", content.value.scrollHeight);
}

onMounted(() => {
  sendEmits();

  window.addEventListener("resize", resizeCatalog);
});
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
