<template>
  <v-app-bar
      app
      elevate-on-scroll="true"
  >
    <v-img src="/public/icons/code.svg" height="32"></v-img>
    <v-toolbar-title>Word Align Tool</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/software">
      <v-btn
            text
            color="anchor"
            class="hover:bg-neutral-50">
          Software
      </v-btn>
    </router-link>
    <router-link to="/blog">
      <v-btn text
             color="anchor"
             class="hover:bg-neutral-50">
          Blog
      </v-btn>
    </router-link>
    <router-link to="/admin">
      <v-btn text
             color="anchor"
             class="hover:bg-neutral-50">
        Admin
      </v-btn>
    </router-link>

<!--    TODO- Feature idea, create a dark theme for the page-->
<!--    <v-btn class="p-4" @click="toggleTheme">Change Theme</v-btn>-->
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "NavigationBar",
	methods: {
		thanos: function () {
			console.log("thanos")
		}
	}
})
</script>

<style scoped></style>
