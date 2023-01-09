<template>
  <section 
    class="card-product"
    :class="[
      {'filter': changeView},
      {'inactive': values.inactive}
    ]"
  >
    <div class="card-product__wrapper">
        <HeaderNav 
          class="card-product__header-nav" 
          :inactive="values.inactive"
          :status="values.suggestions"
        />
        <div class="card-product__section header">
            <a class="card-product__image-wrapper" href="#">
              <img class="card-product__image" :src="`/img/${values.image}-catalog.png`" :alt="values.image">
            </a>
<!--           <Rating 
            class="card-product__rating" 
            :inactive="values.inactive"
            :reviews="values.rating.reviews"
            :points="values.rating.points"
          /> -->
        </div>
        <div class="card-product__section footer">
          <div class="card-product__main-info">
            <NavAvailability 
              :status="values.statusValues" 
              :changeView="changeView"
              :inactive="values.inactive"
            />
            <div class="card-product__identification">
              <a href="#" class="card-product__name-product">{{ values.nameProduct }}</a>
              <p class="card-product__code">Код: {{ values.code }}</p>
            </div>
          </div>
          <CardFooter 
            :status="values.prices.button" 
            :price="values.prices.price"
            :inactive="values.inactive"
          />
        </div>
    </div>
  </section> 
</template>
    
<script setup>
import HeaderNav from "~/modules/home/components/regularSliders/card/sections/HeaderNav.vue";
import Rating from "~/modules/home/components/regularSliders/card/sections/Rating.vue";
import NavAvailability from "~/modules/home/components/regularSliders/card/sections/NavAvailability.vue";
import CardFooter from "~/modules/home/components/regularSliders/card/sections/CardFooter.vue";

defineProps({
  changeView: { type: Boolean, required: false},
  values: { type: Object, required: false},
});

const inactiveCard = ref(false);

</script>
    
<style lang="scss" scoped>
.card-product {
 /*  --gap: 8px; */
  flex: 0 0 263px;
  /* width: 263px; */

  background-color: white;

  border: 1px solid #E9E9E9;
  border-radius: 8px;

  @include bigMobile {
    flex: 0 0 164px;
     /* width: 164px; */
  }

  /*  @include set-item-count-in-row(4); */
/*
  @include smallestScreen {
    @include set-item-count-in-row(3);
  }
  
  @include bigMobile { 
    @include set-item-count-in-row(4);
  }
*/
/*   @include mobile { 
    @include set-item-count-in-row(2);
  }  */

  &.inactive {
    .card-product__image {
      filter:grayscale(1);
    }
  }
  &.filter {
    @include bigMobile { 
      // max-width: 343px;
      /* @include set-item-count-in-row(2); */

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
        @include flex-container(column-reverse, flex-start, );
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
      border-bottom: 1px solid #F3F3F3;

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

  &__image-wrapper {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

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
    color: #2B2B2B;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    @include bigMobile { 
      @include font(12, 16, 400);
    }
  }

  &__code {
    @include font(12, 16, 400);
    letter-spacing: 0.02em;
    color: #8A8A8A;
  }
}

</style>
        