<template>
  <section
    class="card-product"
    :class="[{ filter: changeView }, { inactive: inactiveCard }]"
  >
    <div class="card-product__wrapper">
      <HeaderNav class="card-product__header-nav" :inactive="inactiveCard" />
      <div class="card-product__section header">
        <div class="card-product__image-wrapper">
          <img
            class="card-product__image"
            src="/img/logo-short.png"
            alt="product name"
          />
        </div>
      </div>
      <div class="card-product__section footer">
        <div class="card-product__main-info">
          <NavAvailability
            :status="availabilityState"
            :changeView="changeView"
            :inactive="inactiveCard"
          />
          <div class="card-product__identification">
            <p class="card-product__name-product">
              {{ product.name.ru }}
            </p>
            <p class="card-product__code">{{ parseInt(product.code) }}</p>
          </div>
        </div>
        <CardFooter
          :status="footerValues"
          :price="footerValues.price"
          :inactive="inactiveCard"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderNav from './sections/HeaderNav.vue';
import NavAvailability from './sections/NavAvailability.vue';
import CardFooter from './sections/CardFooter.vue';

const { changeView, product } = defineProps(['changeView', 'product']);

const availabilityState = {
  buttonStatus: {
    inStock: 'in-stock',
    notAvailable: 'not-available',
    ends: 'ends',
    preOrder: 'pre-order',
  },
};

const footerValues = {
  buttonState: {
    buy: 'buy',
    report: 'report',
    preOrder: 'pre-order',
  },
  price: {
    discount: '',
    total: '500 ₴',
  },
};

const inactiveCard = useState('inactiveCard', () => false);
</script>

<style lang="scss" scoped>
.card-product {
  --gap: 8px;

  background-color: white;

  border: 1px solid #e9e9e9;
  border-radius: 8px;

  @include set-item-count-in-row(4);

  @include smallestScreen {
    @include set-item-count-in-row(3);
  }

  @include bigMobile {
    @include set-item-count-in-row(4);
  }

  @include mobile {
    @include set-item-count-in-row(2);
  }

  &.inactive {
    .card-product__image {
      filter: grayscale(1);
    }
  }
  &.filter {
    @include bigMobile {
      // max-width: 343px;
      @include set-item-count-in-row(2);

      .card-product__header-nav {
        left: 0;
      }

      .card-product__wrapper {
        @include flex-container(row, flex-start);

        padding: 8px;
        gap: 8px;
      }

      .card-product__image {
        width: 125px;
        height: 125px;
      }

      .card-product__section.header {
        @include flex-container(column, flex-start);
        flex: 0 0 auto;

        border: none;

        margin: 0;
        padding-top: 24px;
      }

      .card-product__section.footer {
        width: 100%;

        @include flex-container(column, space-between);

        padding: 0;
      }

      .card-product__rating {
        @include flex-container(column, flex-start, flex-start);

        gap: 8px;
        padding: 0;
      }

      .card-product__main-info {
        @include flex-container(column-reverse, flex-start);
      }

      .card-product__identification {
        max-width: 140px;
      }

      .card-product__name-product {
        display: -webkit-box;

        @include font(14, 18, 400);

        text-overflow: ellipsis;
        overflow: hidden;

        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    @include mobile {
      @include set-item-count-in-row(1);
    }
  }

  &:hover {
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  }

  &__wrapper {
    height: 100%;
    width: 100%;

    @include flex-container(column, space-between);

    position: relative;

    padding: 16px 0;

    @include bigMobile {
      padding: 8px 0;
    }
  }

  &__header-nav {
    width: 100%;

    position: absolute;
    top: 16px;

    z-index: 100;

    @include bigMobile {
      top: 8px;
    }
  }

  &__section {
    &.header {
      border-bottom: 1px solid #f3f3f3;

      margin-bottom: 16px;

      @include bigMobile {
        margin-bottom: 8px;
      }
    }

    &.footer {
      @include flex-container(column, center);

      padding: 0 16px;
      gap: 34px;

      @include bigMobile {
        padding: 0 8px;
        gap: 28px;
      }
    }
  }

  &__image-wrappe {
    @include bigMobile {
      max-width: 164px;
    }
  }

  &__image {
    margin: 0 auto;
  }

  &__rating {
    margin: 0;
    padding-bottom: 16px;

    @include bigMobile {
      padding: 0 4px 8px 4px;
    }
  }

  &__main-info {
    @include flex-container(column, center);

    gap: 8px;
  }

  &__identification {
    @include flex-container(column, center, flex-start);

    gap: 8px;
  }

  &__name-product {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    @include bigMobile {
      @include font(12, 16, 400);
    }
  }

  &__code {
    @include font(12, 16, 400);
    letter-spacing: 0.02em;
    color: #8a8a8a;
  }
}
</style>