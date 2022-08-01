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
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

@media (min-width: 1024px) {
  /* Estilos iconos  */

  i {
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  i:hover {
    background: var(--color-background-soft);
  }
}
</style>
