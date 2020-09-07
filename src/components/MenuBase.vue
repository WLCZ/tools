<template>
  <ul class="nav justify-content-center fixed-bottom bg-primary">
    <li class="nav-item">
      <router-link class="nav-link text-white" to="/">
        <div
          class="rounded-circle d-flex align-items-center justify-content-center"
        >
          <i class="fa fa-home"></i>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
.rounded-circle {
  width: 2rem;
  height: 2rem;
  border: none;
  transition: 0.4s;
  &:hover {
    background-color: #3393fa;
  }
}
</style>
