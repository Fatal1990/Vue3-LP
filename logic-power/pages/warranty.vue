<template>
  <section class="warranty">
    <div class="warranty__w">
      <h1 class="warranty__title">{{ _T('@Warranty') }}</h1>
      <div class="warranty__info">
        <h2 class="warranty__info-title">{{ _T('@General information') }}</h2>
        <p class="warranty__info-title-text">
          {{ _T('@Confirmation of right to free warranty service') }}
        </p>
      </div>
      <div class="warranty__info-b">
        <h4 class="warranty__info-subtitle">
          {{ _T('@Warranties do not apply to') }}
        </h4>
        <ul class="warranty__info-subtitle-list">
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Natural wear') }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Accidental damage') }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Damage from natural disasters') }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Damage caused by careless use') }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Damage by emergency rise or fall in network') }}
          </li>
        </ul>
      </div>
      <div class="warranty__info-b">
        <h4 class="warranty__info-subtitle">
          {{ _T('@Denial of warranty service') }}
        </h4>
        <ul class="warranty__info-subtitle-list">
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Denial of warranty service p1') }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Denial of warranty service p2') }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Denial of warranty service p3') }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Denial of warranty service p4') }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Denial of warranty service p5') }}
          </li>
          <li class="warranty__info-subtitle-list-item">
            {{ _T('@Denial of warranty service p6') }}
          </li>
        </ul>
      </div>
      <div class="warranty__info">
        <h2 class="warranty__info-title">
          {{ _T('@Warranty for buyers from Odessa') }}
        </h2>
        <p class="warranty__info-title-text">
          {{ _T('@For convenience of buyers from Odessa') }}
        </p>
        <ul class="warranty__info-title-list">
          <li class="warranty__info-title-list-item">
            {{ _T('@For convenience of buyers from Odessa p1') }}
          </li>
          <li class="warranty__info-title-list-item">
            {{ _T('@For convenience of buyers from Odessa p2') }}
          </li>
        </ul>
        <p class="warranty__info-title-text">
          {{ _T('@Return product for warranty service') }}
        </p>
      </div>
      <div class="warranty__info">
        <h2 class="warranty__info-title">
          {{ _T('@Warranty for buyers from other regions') }}
        </h2>
        <p class="warranty__info-title-text">
          {{ _T('@To repair goods from other regions') }}
        </p>
        <ul class="warranty__info-title-list-num">
          <li class="warranty__info-title-list-item">
            {{ _T('@To repair goods from other regions p1') }}
          </li>
          <li class="warranty__info-title-list-item">
            {{ _T('@To repair goods from other regions p2') }}
          </li>
          <li class="warranty__info-title-list-item">
            {{ _T('@To repair goods from other regions p3') }}
          </li>
          <div class="warranty__info-b">
            <p class="warranty__info-title-text">
              {{ _T('@NP office address') }}
            </p>
            <p class="warranty__info-title-text">
              {{ _T('@Recipient NP') }}
            </p>
            <p class="warranty__info-title-text">
              {{ _T('@Return money delivery') }}
            </p>
            <p class="warranty__info-title-text">
              {{ _T('@Insurance value') }}
            </p>
            <p class="warranty__info-title-text">
              {{ _T('@Warranty delivery payment form') }}
            </p>
          </div>
          <li class="warranty__info-title-list-item">
            {{ _T('@To repair goods from other regions p4') }}
          </li>
        </ul>
      </div>
      <div class="warranty__note">
        <span class="warranty__important">*{{ _T('@Pay attention') }}!</span>
        {{ _T('@Sent for repair at expense of company') }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguageFilterStore } from '~~/store/languageFilterStore';
import { storeToRefs } from 'pinia';

const { data } = await useFetch('/api/translations');

const lang = useLanguageFilterStore();
const { currentLanguage } = storeToRefs(lang);

const _T = (keyText) => {
  if (data.value[keyText] === undefined) return keyText;

  return data.value[keyText][currentLanguage.value];
};
</script>

<style lang="scss"></style>
