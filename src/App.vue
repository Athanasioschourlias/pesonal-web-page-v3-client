<template>
  <v-app class="">
    <nav-bar/>
    <v-main>
        <!--Here the main page and components will be rendered-->
        <RouterView/>
    </v-main>
    <ft/>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import navigationBar from "./components/navigationBar.vue"
import ft from "./components/ft.vue"


export default defineComponent({
	name: "App",
	components: {
		"nav-bar":navigationBar,
		"ft": ft
	},
})
</script>

<style></style>
