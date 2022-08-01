<script>
import GameCard from "../components/GameCard.vue";
import GameFilters from "../components/GameFilters.vue";
export default {
  data() {
    return {
      games: [],
      url: "http://localhost:3000/games",
    };
  },
  components: { GameCard, GameFilters },
  created() {
    fetch("http://localhost:3000/games")
      .then((res) => res.json())
      .then((data) => (this.games = data));
  },
};
</script>

<template>
  <div id="shop">
    <div class="container-cards">
      <div class="container-card" v-for="game in games" :key="game.id">
        <GameCard
          :id="game.id"
          :name="game.name"
          :urlImage="game.url_image"
          :price="game.price"
        />
      </div>
    </div>
    <div class="filters">
      <GameFilters />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  #shop {
    display: flex;
    justify-content: space-around;
  }
  .container-cards {
    max-width: 1305px;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: scroll;
  }
  .container-cards::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .container-cards::-webkit-scrollbar:vertical {
    width: 15px;
  }

  .filters {
    width: 350px;
    padding: 0 30px 0 0;
    margin: auto 0;
  }
}
</style>
