<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavItem from "./components/NavItem.vue";
import HomeIcon from "./components/icons/IconHome.vue";
import ShopIcon from "./components/icons/IconShop.vue";
import FavoriteIcon from "./components/icons/IconFavorite.vue";
import CartIcon from "./components/icons/IconCart.vue";
import SearchIcon from "./components/icons/IconSearch.vue";
import AddGameIcon from "./components/icons/IconAdd.vue";
import LoginIcon from "./components/icons/IconLogin.vue";
</script>

<template>
  <header>
    <div class="container-logo">
      <div class="logo">
        <span class="part-1">onlineGame</span>
        <span class="part-2">STORE</span>
      </div>
    </div>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          <NavItem>
            <template #icon>
              <HomeIcon />
            </template>
            <template #page>Home</template>
          </NavItem>
        </RouterLink>

        <RouterLink to="/shop">
          <NavItem>
            <template #icon>
              <ShopIcon />
            </template>
          </NavItem>
        </RouterLink>

        <RouterLink to="/">
          <NavItem>
            <template #icon>
              <FavoriteIcon />
            </template>
          </NavItem>
        </RouterLink>

        <RouterLink to="/">
          <NavItem>
            <template #icon>
              <CartIcon />
            </template>
          </NavItem>
        </RouterLink>

        <RouterLink to="/">
          <NavItem>
            <template #icon>
              <SearchIcon />
            </template>
          </NavItem>
        </RouterLink>

        <RouterLink to="/">
          <NavItem>
            <template #icon>
              <LoginIcon />
            </template>
          </NavItem>
        </RouterLink>

        <RouterLink to="/games/new">
          <NavItem>
            <template #icon>
              <AddGameIcon />
            </template>
          </NavItem>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  height: 100vh;
  display: grid;
  grid-template-rows: minmax(50px, 100px) 1fr;
}

.container-logo {
  width: 100%;
  height: 100%;
}

.logo {
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.part-1 {
  font-size: 15px;
  margin-bottom: -1rem;
}

.part-2 {
  font-size: 28px;
  font-weight: 600;
}

nav {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: flex;
}

@media (min-width: 1024px) {
  .container-logo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
  }

  .logo {
    text-align: center;
  }
  .part-1 {
    font-size: 15px;
    margin-bottom: -1rem;
  }

  .part-2 {
    font-size: 28px;
  }
}
</style>
