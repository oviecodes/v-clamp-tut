<template>
  <div class="home">
    <div class="homeContainer">
      <h1>{{ post.description }}</h1>
      <img alt="Vue logo" :src="`${post.photo}`" />
      <div class="text-content">
        <v-clamp autoresize :max-lines="max_lines" @clampchange="changed">
          {{ post.content }}
          <template #after="{ toggle, clamped, expanded }">
            <button v-if="clamped == true || expanded == true" @click="toggle">
              {{ clamped == true ? "see more" : "see less" }}
            </button>
          </template>
        </v-clamp>
      </div>
      <hr />
    </div>
  </div>
</template>

<style>
.homeContainer {
  width: 60%;
  margin: 0px auto;
  /* border: 1px solid black; */
}

.text-content {
  text-align: left;
  margin: 2em 0 0 1em;
}

.button {
  padding: 0.5em;
}
</style>

<script>
import VClamp from "vue-clamp";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { posts } from "../store/articles.js";

export default {
  name: "SinglePost",
  components: {
    //HelloWorld,
    VClamp,
  },
  data: () => {
    return {
      max_lines: 3,
      btn_text: "see more",
    };
  },
  methods: {
    // setExpanded() {
    //   this.expanded = !this.expanded;
    //   //this.max_lines += 1
    //   this.btn_text = this.expanded === true ? "see less" : "see more";
    //   return;
    // },

    changed(clamped) {
      console.log("clamped", clamped);
      console.log("clamped/expanded");
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.post = posts.find((el) => el.id == this.id);
  },
};
</script>
