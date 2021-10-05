<template>
  <HelloWorld :msg="t('aboutTitle')" />
</template>

<script lang="ts" setup>
const { t } = useI18n();
</script>
