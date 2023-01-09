<template>
  <nav class="availability">
    <ButtonStatus
      :status="status.buttonStatus"
      :changeView="changeView"
      :inactive="inactive"
    />
    <div class="availability__suggestions">
      <Delivery 
        :inactive="inactive" 
        :inactiveCard="status.delivery"
      />
      <Credit 
        :inactive="inactive"
        :inactiveCard="status.credit"
      />
    </div>
  </nav>
</template>

<script setup>
import Credit from "~/modules/home/components/regularSliders/card/UI/Credit.vue";
import Delivery from "~/modules/home/components/regularSliders/card/UI/Delivery.vue";
import ButtonStatus from "~/modules/home/components/regularSliders/card/UI/ButtonStatus.vue";

defineProps({
  status: { type: Object, status: true },
  changeView: { type: Boolean, status: false },
  inactive: { type: Boolean, status: true },
});
</script>

<style lang="scss" scoped>
.availability {
  @include flex-container(row, space-between, center);

  gap: 28px;

  @include bigMobile {
    gap: 0;
  }

  &__suggestions {
    @include flex-container(row, center, center);

    gap: 16px;

    @include bigMobile {
      gap: 8px;
    }
  }
}
</style>
    