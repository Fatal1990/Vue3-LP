<template>
  <button class="button-buy" :class="[state, { disabled: inactive }]">
<!--     <div class="button-buy__images">
      <img class="button-buy__image buy" src="/icons/card-buy.svg" alt="buy">
      <img class="button-buy__image report" src="/icons/card-report.svg" alt="report">
      <img class="button-buy__image pre-order" src="/icons/card-pre-order.svg" alt="pre order">
    </div> -->
    <div class="button-buy__titles">
      <span class="button-buy__title buy">Купить</span>
      <span class="button-buy__title report">Сообщить</span>
      <span class="button-buy__title pre-order">Предзаказ</span>
    </div>
  </button>
</template>

<script setup>
defineProps({
  state: { type: String, required: true },
  inactive: { type: Boolean, required: true },
});
</script>

<style lang="scss" scoped>
.button-buy {
  width: 100%;

  @include flex-container(row, center, center);

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  border-radius: 6px;

  padding: 8px;
  gap: 8px;

  &.buy {
    background-color: #f36c21;

    .button-buy__image.buy {
      display: block;
    }

    .button-buy__title.buy {
      display: block;
    }
  }

  &.report {
    background-color: #8a8a8a;

    .button-buy__image.report {
      display: block;
    }

    .button-buy__title.report {
      display: block;
    }
  }

  &.pre-order {
    background-color: #4490bb;

    .button-buy__image.pre-order {
      display: block;
    }

    .button-buy__title.pre-order {
      display: block;
    }
  }

  &.disabled {
    background-color: #8a8a8a;

    .button-buy__image.report {
      display: block;
    }

    .button-buy__title.report {
      display: block;
    }

    .button-buy__image.buy,
    .button-buy__image.pre-order {
      display: none;
    }

    .button-buy__title.buy,
    .button-buy__title.pre-order {
      display: none;
    }
  }

  &__image {
    width: 24px;
    height: 24px;

    display: none;

    color: white;

    @include bigMobile {
      width: 16px;
      height: 16px;
    }
  }

  &__title {
    display: none;

    @include font(18, 24, 400);
    letter-spacing: 0.02em;
    color: white;

    @include bigMobile {
      @include font(12, 16, 400);
    }
  }
}
</style>
    