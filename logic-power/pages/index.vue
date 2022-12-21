<template>
  <section class="category-catalog">
    <h1 class="category-catalog__title">Продукция</h1>
    <div class="category-catalog__w">
      <div class="category-card" v-for="category in catalog" :key="category.id">
        <NuxtLink class="category-card__link" :to="`/${category.slug}`">
          <div class="category-card__img-cont">
            <img class="category-card__img" :src="category.img" :alt="category.slug" />
          </div>
        </NuxtLink>
        <div class="category-card__info">
          <h3 class="category-card__title">{{ category.name.ru }}</h3>
          <p class="category-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
            similique! Animi magni accusantium nemo voluptatibus voluptate laboriosam,
            molestiae vero nulla soluta exercitationem quae delectus, quidem, adipisci
            aperiam blanditiis incidunt distinctio.
          </p>
          <NuxtLink class="category-card__link" :to="`/${category.slug}`"
            >перейти</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="category-purpose">
      <div class="category-purpose__line"></div>
      <div class="category-purpose__w">
        <h2 class="category-purpose__title">цель компании logicpower</h2>
        <div class="category-purpose__info">
          <p class="category-purpose__info-text">
            Цель компании LogicPower - поставлять украинскому потребителю товары высокого
            качества по доступной цене! В разделах «Компьютерная периферия» и
            «Комплектующие для ПК» Вы найдете все для корректной и комфортной работы
            своего компьютера. В разделе «Электропитание» - товары, которые обеспечат Ваше
            оборудование качественным питанием и обезопасят его.
          </p>
          <ul class="category-purpose__info-list">
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li class="category-purpose__info-list-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
        <div class="category-purpose__goal">
          <h4 class="category-purpose__goal-title">Цель компании LogicPower</h4>
          <p class="category-purpose__goal-text">
            Цель компании LogicPower - поставлять украинскому потребителю товары высокого
            качества по доступной цене! В разделах «Компьютерная периферия» и
            «Комплектующие для ПК» Вы найдете все для корректной и комфортной работы
            своего компьютера. В разделе «Электропитание» - товары, которые обеспечат Ваше
            оборудование качественным питанием и обезопасят его.
          </p>
        </div>
        <div class="category-purpose__goal">
          <h4 class="category-purpose__goal-title">Цель компании LogicPower</h4>
          <p class="category-purpose__goal-text">
            Цель компании LogicPower - поставлять украинскому потребителю товары высокого
            качества по доступной цене! В разделах «Компьютерная периферия» и
            «Комплектующие для ПК» Вы найдете все для корректной и комфортной работы
            своего компьютера. В разделе «Электропитание» - товары, которые обеспечат Ваше
            оборудование качественным питанием и обезопасят его.
          </p>
        </div>
      </div>
      <div class="category-purpose__line"></div>
    </div>
  </section>
</template>

<script setup>
import { useCategoriesStore } from "~~/store/categoriesStore";

const catalogStore = useCategoriesStore();
const catalog = catalogStore.getCategories;
</script>

<style lang="scss" scoped>
.category-catalog {
  @include flex-container(column, center, center);
  gap: 48px;

  @extend %padding-wrp;
  padding-bottom: 80px;

  @include mobile {
    gap: 36px;
  }

  &__title {
    @include font(42, 50, 500);
    text-align: center;
    text-transform: uppercase;

    margin-bottom: 46px;

    @include mobile {
      @include font(24, 34, 500);
      letter-spacing: 0.02em;

      margin-bottom: 0;
    }
  }

  &__w {
    @extend %width-main;

    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 24px 16px;

    @include mobile {
      gap: 16px;
    }
  }
}

.category-card {
  --gap: 16px;

  @include flex-container(column, center, center);
  gap: 24px;

  background-color: #ffffff;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

  border-radius: 8px;

  @include set-item-count-in-row(4);

  @include smallScreen {
    @include set-item-count-in-row(3);
  }

  @include bigMobile {
    @include set-item-count-in-row(2);
  }

  @include mobile {
    gap: 16px;

    @include set-item-count-in-row(1);
  }

  &__img-cont {
    position: relative;
    width: 100%;

    padding-top: 100%;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    @include mobile {
      padding-top: 60%;
    }
  }

  &__img {
    position: absolute;
    @include setAbs;

    width: 100%;
    height: 100%;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    object-fit: cover;
    pointer-events: none;
  }

  &__info {
    height: 100%;

    @include flex-container(column, space-between, center);
    gap: 16px;

    padding: 0 10px 20px;

    @include mobile {
      gap: 46px;

      padding-bottom: 24px;
    }
  }

  &__title {
    @include font(20, 30, 600);
    text-transform: uppercase;
    text-align: center;

    @include mobile {
      @include font(18, 22, 600);
      letter-spacing: 0.02em;
    }
  }

  &__text {
    @include font;
    text-align: center;
    letter-spacing: 0.02em;

    color: #8a8a8a;

    @include lineClamp(4);

    @include mobile {
      display: none;
    }
  }

  &__link {
    width: 100%;

    @include font(18, 24);
    text-transform: capitalize;
    text-align: center;
    letter-spacing: 0.02em;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    color: var(--color-primary-base);

    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--color-primary-dark);
    }
  }
}

.category-purpose {
  width: 100%;

  @include flex-container(column, center, center);
  gap: 48px;

  &__w {
    @extend %width-content;
    @include flex-container(column, center, flex-start);
    gap: 48px;

    @include mobile {
      align-content: center;

      gap: 16px;
    }

    & div {
      @include flex-container(column, center);
      gap: 16px;
    }

    & h2 {
      @include font(42, 50, 700);
      text-transform: uppercase;

      @include mobile {
        @include font(20, 30);
        text-align: center;
      }
    }

    & h4 {
      @include font(32, 42, 600);
      letter-spacing: 0.02em;

      margin-bottom: 8px;

      @include mobile {
        @include font(20, 28);
        text-align: center;
      }
    }

    & ul {
      list-style: disc;

      padding-left: 18px;
    }

    & ol {
      list-style: decimal;

      padding-left: 24px;
    }

    & p,
    & li {
      @include font(20, 28);
      letter-spacing: 0.02em;

      @include mobile {
        @include font;
      }
    }
  }

  &__line {
    @extend %width-main;
    height: 1px;

    background-color: var(--color-primary-base);

    @include mobile {
      display: none;
    }
  }
}
</style>
