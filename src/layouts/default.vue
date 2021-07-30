<template>
  <h1>{{ t("mainTitle") }}</h1>
  <router-view />
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
