<template>
  <div class="main-info" ref="mainInfo">
    <div class="main-info__wrapper">
      <ButtonBurger />
      <div class="main-info__catalog-menu">
        <ButtonCatalog
          class="main-info__button-catalog"
          @buttonCatalog="getButton"
        />
        <ModalCatalog
          class="main-info__catalog"
          @catalogModal="getModalCatalog"
          @heightContent="getHeightContent"
          :nullState="catalogState"
          :style="{ '--bottom': heightCatalog > bottomValue - heightHeader ? -(bottomValue - heightHeader) + 'px' : -heightCatalog + 'px'}"
        />
      </div>
      <Logo class="main-info__logo" />
      <SearchProduct />
      <ChangeLanguage class="main-info__language" />
      <NavigationMenu />
    </div>
  </div>
</template>

<script setup>
import { useHeaderlStore } from "~~/store/headerStore";
import ButtonBurger from "../UI/ButtonBurger.vue";
import ButtonCatalog from "../UI/ButtonCatalog.vue";
import Logo from "../UI/Logo.vue";
import SearchProduct from "../UI/SearchProduct.vue";
import ChangeLanguage from "../UI/ChangeLanguage.vue";
import NavigationMenu from "./NavigationMenu.vue";
import ModalCatalog from "./ModalCatalog.vue";

const header = useHeaderlStore();
const activeCatalog = header.activeCatalog;

const mainInfo = ref(null);
const buttonCatalog = ref(null);
const catalogModal = ref(null);

const heightCatalog = ref(0);
const bottomValue = ref(0);
const catalogState = ref(false);

const emits = defineEmits(["getPosition"]);

const props = defineProps({
  heightHeader: { type: Number, required: false },
});

function getPosition() {
  emits("getPosition", mainInfo.value.getBoundingClientRect().top);
  getPositionButton();
}

function getButton(item) {
  buttonCatalog.value = item;
}

function getModalCatalog(item) {
  catalogModal.value = item;
}

function closeModal(event) {
  const clickModal = event.composedPath().includes(catalogModal.value);
  const clickButton = event.composedPath().includes(buttonCatalog.value);

  if (!clickModal && !clickButton) {
    activeCatalog(false);
  }
}

function startStateCatalog(event) {
  const clickModal = event.composedPath().includes(catalogModal.value);

  catalogState.value = !clickModal ? true : false;
}

function getPositionButton() {
  bottomValue.value = document.documentElement.clientHeight;
}

function getHeightContent(value) {
  heightCatalog.value = value;
}

onMounted(() => {
  getPosition();
  window.addEventListener("resize", getPosition);

  window.addEventListener("click", function (event) {
    closeModal(event);
  });

  window.addEventListener("mouseover", function (event) {
    startStateCatalog(event);
  });
});
</script>

<style lang="scss" scoped>
.main-info {
  background-color: #393d38;

  &__wrapper {
    @extend %width-main;

    @include flex-container(row, flex-start, center);

    position: relative;

    padding: 4px 16px;
    margin: 0 auto;
    gap: 32px;

    @include bigMobile {
      @include flex-container(row, space-between, center);

      gap: 16px;
      padding: 8px 16px;
    }
  }

  &__catalog {
    --bottom: 0;

    position: absolute;
    top: 100%;
    bottom: var(--bottom);
    left: 0;
    z-index: 501;

    overflow: auto;
  }

  &__button-catalog,
  &__language {
    @include bigMobile {
      display: none;
    }
  }

  &__logo {
    margin-right: 4px;

    @include bigMobile {
      display: none;
    }
  }
}
</style>
    