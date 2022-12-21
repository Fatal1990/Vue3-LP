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
