<script>
export default {
  props: ["game"],
};
</script>

<template>
  <div id="filter">
    <div class="filter_section">
      <h3>Precio</h3>
    </div>
    <div class="filter_section">
      <h3>Categoria</h3>
    </div>
    <div class="filter_section">
      <h3>Plataforma</h3>
    </div>
  </div>
</template>

<style>
#filter {
  width: 350px;
  height: 80vh;
  padding: 20px 50px;
  background-color: #18181a;
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.5);
}

.filter_section {
  margin: 17px;
}
</style>
