<script>
import CardItem from "./CardItem.vue";
import AddIcon from "././icons/IconAdd.vue";
import FavoriteIcon from "././icons/IconFavorite.vue";
import RemoveIcon from "././icons/IconRemove.vue";
import EditIcon from "././icons/IconEdit.vue";

export default {
  props: ["name", "price", "urlImage", "index"],
  components: { CardItem, AddIcon, FavoriteIcon, RemoveIcon, EditIcon },
};
</script>

<template>
  <div class="card">
    <img :src="urlImage" alt="" />
    <div class="details">
      <div class="container-price-buttons">
        <h3 class="price">$ {{ price }}</h3>

        <div class="buttons">
          <CardItem>
            <template #icon>
              <AddIcon />
            </template>
          </CardItem>
          <CardItem>
            <template #icon>
              <FavoriteIcon />
            </template>
          </CardItem>
          <CardItem>
            <template #icon>
              <RemoveIcon />
            </template>
          </CardItem>
          <CardItem>
            <template #icon>
              <EditIcon />
            </template>
          </CardItem>
        </div>
      </div>
      <div class="container-name">
        <h2 class="name">{{ name }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 400px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  background: #27262b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  margin: 15px;
}
.card img {
  width: 100%;
  height: 290px;
  object-fit: cover;
  object-position: top;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.details {
  width: 100%;
  height: 110px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
}

.name {
  width: 100%;
  text-transform: capitalize;
  font-size: 30px;
  font-weight: 500;
  text-align: right;
  margin-top: 24px;
  padding-right: 20px;
  line-height: 30px;
  color: whitesmoke;
}

.container-price-buttons {
  max-height: 110px;
  padding-left: 20px;
}

.price {
  width: 100%;
  text-transform: capitalize;
  font-size: 30px;
  font-weight: 500;
  text-align: left;
  margin-top: 30px;
  line-height: 18px;
  color: var(--color-primary);
}
.buttons {
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 18px;
}
</style>
