<template>
  <div>
    <h3 class="header">
      <slot name="header" />
    </h3>
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  background-color: antiquewhite;
}
</style>
