<template>
  <v-app-bar
      app
      elevate-on-scroll="true"
  >
    <v-img src="/public/icons/code.svg" height="32"></v-img>
    <v-toolbar-title>Word Align Tool</v-toolbar-title>
    <v-spacer></v-spacer>
    <login_popup v-model="dialog" :dialog="dialog" @updateProp="updateDialogValue"/>
    <router-link to="/">
      <v-btn
          text
          color="anchor"
          class="hover:bg-neutral-50">
        Home
      </v-btn>
    </router-link>
    <router-link to="/software">
      <v-btn
            text
            color="anchor"
            class="hover:bg-neutral-50">
          Software
      </v-btn>
    </router-link>
    <router-link v-if="role === 'member' || role === 'admin'" to="/blog">
      <v-btn text
             color="anchor"
             class="hover:bg-neutral-50">
          Blog
      </v-btn>
    </router-link>
    <router-link v-if="role === 'admin'" to="/admin">
      <v-btn text
             color="anchor"
             class="hover:bg-neutral-50">
        Admin
      </v-btn>
    </router-link>
    <v-btn
        v-if="role === 'guest'"
        color="anchor"
        class="hover:bg-neutral-50"
        @click="dialog = true"
    >
      LogIn
    </v-btn>
    <v-btn
        v-if="role === 'member' || role === 'admin'"
        color="anchor"
        class="hover:bg-neutral-50"
        @click="logout()"
    >
      LogOut
    </v-btn>
<!--    TODO- Feature idea, create a dark theme for the page-->
<!--    <v-btn class="p-4" @click="toggleTheme">Change Theme</v-btn>-->
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import login_popup_dialoge from "./login_popup_dialoge.vue"
import {ro} from "vuetify/locale"

export default defineComponent({
	name: "NavigationBar",
	components: {
		"login_popup": login_popup_dialoge
	},
	data() {
		return {
			dialog: false,
			role: "guest"
		}
	},
	computed: {
		ro() {
			return ro
		}
	},
	mounted() {
		// Retrieve an item from localStorage
		const storedData = localStorage.getItem("role")

		// Check if the item exists in localStorage
		if(storedData !== null) {
			// The item exists, you can use it
			const parsedData = JSON.parse(storedData)
			this.role = parsedData.role
		}
	},
	methods: {
		logout() {
			localStorage.clear()

			this.$router.push({ path: "/" })

			this.$router.go(0)
		},

		updateDialogValue(newDialogValue: boolean) {
			this.dialog = newDialogValue
		},
	}
})
</script>

<style scoped></style>
