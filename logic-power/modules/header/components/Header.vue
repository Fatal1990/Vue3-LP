<template>
  <div>
    <header class="header" ref="header">
      <div class="header__wrapper">
        <AdditionalInfo class="header__additional" />
        <MainInfo
          class="header__main-info"
          :class="{ active: activeScroll }"
          @getPosition="getPosition"
          :heightHeader="heightHeader"
        />
        <ModalMenu />
      </div>
    </header>
  </div>
</template>

<script setup>
import AdditionalInfo from '~/modules/header/sections/AdditionalInfo.vue';
import MainInfo from '~/modules/header/sections/MainInfo.vue';
import ModalMenu from '~/modules/header/sections/ModalMenu.vue';
import ModalCatalog from '~/modules/header/sections/ModalCatalog.vue';

const headerPosition = ref(0);
const heightHeader = ref(0);
const activeScroll = ref(false);

const header = ref(null);

function getPosition(position) {
  headerPosition.value = Math.round(position);
}

function getHeightHeader() {
  heightHeader.value = header.value.offsetHeight;
}

function stateHeader() {
  if (window.scrollY >= headerPosition.value) {
    activeScroll.value = true;
  } else {
    activeScroll.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', stateHeader);

  getHeightHeader();
  window.addEventListener('resize', getHeightHeader);
  window.addEventListener('scroll', getHeightHeader);
});
</script>
