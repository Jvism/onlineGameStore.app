<script>
export default {
  data() {
    return {
      url: "http://localhost:3000/games",
      gameData: {
        name: "",
        platform: "",
        quantity: 0,
        price: 0,
        discount: 0,
        description: "",
        urlImage: "",
        categories: [],
      },
    };
  },
  created() {
    fetch(`${this.url}/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.gameData.name = data[0].name;
        this.gameData.platform = data[0].platform;
        this.gameData.quantity = data[0].quantity;
        this.gameData.price = data[0].price;
        this.gameData.discount = data[0].discount;
        this.gameData.description = data[0].description;
        this.gameData.urlImage = data[0].url_image;
      });
  },
  methods: {
    updateGame() {
      fetch(`${this.url}/${this.$route.params.id}`, {
        method: "PUT",
        body: JSON.stringify(this.gameData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .catch((error) => console.log(error))
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
  },
};
</script>

<template>
  <div id="game">
    <div class="gameForm">
      <div class="formItem">
        <label for="name"> Nombre </label>
        <input type="text" id="name" name="name" v-model="gameData.name" />
      </div>

      <div class="formItem">
        <label for="platform"> Plataforma </label>
        <input
          type="text"
          id="platform"
          name="platform"
          v-model="gameData.platform"
        />
      </div>

      <div class="numbers">
        <div class="formItem">
          <label for="quantity">Cantidad</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            v-model="gameData.quantity"
          />
        </div>
        <div class="formItem">
          <label for="price">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            min="1"
            v-model="gameData.price"
          />
        </div>
        <div class="formItem">
          <label for="discount">Descuento</label>
          <input
            type="number"
            id="discount"
            name="discount"
            min="0"
            v-model="gameData.discount"
          />
        </div>
      </div>

      <div class="formItem">
        <label for="description">Descripcion</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          v-model="gameData.description"
        ></textarea>
      </div>

      <div class="formItem">
        <label for="image">Imagen</label>
        <input
          type="url"
          id="image"
          name="image"
          min="1"
          v-model="gameData.urlImage"
        />
      </div>

      <button v-on:click="updateGame">Actualizar</button>
    </div>
  </div>
</template>

<style scoped>
#game {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gameForm {
  width: 750px;
  height: 80vh;
  display: flex;
  flex-direction: column;

  background-color: #18181a;
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px 50px;
}

.formItem {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.numbers {
  display: flex;
  justify-content: space-between;
}

input,
textarea,
button {
  background: var(--color-background-soft);
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  padding: 10px;
  color: whitesmoke;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
}
</style>
