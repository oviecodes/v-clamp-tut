<template>
  <div class="home">
    <h1>All Posts</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="homeContainer">
      <div v-for="(post, i) of articles" :key="i" class="articles">
        <img class="thumbnail" :src="`${post.photo}`" alt="" />
        <div class="text-content">
          <h3>{{ post.description }}</h3>
          <!-- <p>{{ post.content }}</p> -->

          <v-clamp
            autoresize
            :max-lines="max_lines"
            ellipsis="..."
            location="end"
          >
            {{ post.content }}
            <template v-if="post.featured" #before>
              <button class="tags">Featured</button>
            </template>
            <template #after="{ toggle, clamped }">
              <button @click="toggle">
                {{ clamped == true ? "see more" : "see less" }}
              </button>
            </template>
          </v-clamp>
          <router-link :to="`/post/${post.id}`">
            <button class="button">Read</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.homeContainer {
  width: 60%;
  margin: 0px auto;
  /* border: 1px solid black; */
}

.articles {
  display: flex;
  flex-direction: row;
  margin: 2em;
  align-items: center;
}

.thumbnail {
  width: 100px;
  height: 100px;
  display: inline;
}

.text-content {
  text-align: left;
  margin: 0 0 0 1em;
}

.button {
  padding: 0.5em;
}

.tags {
  background-color: rgb(33, 33, 180);
  border-radius: 50px;
  border: 0px;
  color: white;
  padding: 0.5em;
  margin-right: 2px;
}
</style>

<script>
import VClamp from "vue-clamp";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { posts } from "../store/articles.js";

export default {
  name: "PostView",
  components: {
    // HelloWorld,
    VClamp,
  },
  data: function () {
    return {
      articles: posts,
      // expanded: false,
      btn_text: "see more",
      max_lines: 2,
      // tobeExpanded: "",
    };
  },

  methods: {
    // setExpanded(clamped) {
    //   //console.log(e.target);
    //   // this.tobeExpanded = i;
    //   //console.log(i);
    //   // this.expanded = !this.expanded;
    //   //this.max_lines += 1
    //   this.btn_text = clamped === true ? "see more" : "see less";
    //   return;
    // },
  },

  computed: {},
};
</script>
