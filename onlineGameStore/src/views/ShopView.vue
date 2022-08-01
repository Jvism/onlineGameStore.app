<script>
import GameCard from "../components/GameCard.vue";
export default {
  data() {
    return {
      games: [
        {
          id: 1,
          name: "god of war",
          price: 5500,
          urlImage:
            "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-hub-thumbnail-gow-i-en-29jul21?$native$",
        },
        {
          id: 2,
          name: "Mario Party",
          price: 9500,
          urlImage:
            "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MarioPartySuperStars.jpg",
        },
      ],
    };
  },
  components: { GameCard },
};
</script>

<template>
  <div id="shop">
    <div class="container-card" v-for="(game, index) in games" :key="game.id">
      <GameCard
        :name="game.name"
        :urlImage="game.urlImage"
        :price="game.price"
        :index="index"
      />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  #shop {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
