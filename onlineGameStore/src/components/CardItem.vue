<template>
  <i>
    <slot name="icon"></slot>
  </i>
</template>

<style scoped>
/* Estilos de iconos */

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 25px;
  height: 25px;
  padding: 0;
  border: none;

  color: var(--color-text);
}

@media (min-width: 1024px) {
  /* Estilos iconos  */

  i {
    background: #27262b;
  }

  i:hover {
    background: var(--color-background);
  }
}
</style>
