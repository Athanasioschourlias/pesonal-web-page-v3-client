<template>
  <header class="text-gray-600 body-font select-none bg-white sticky top-0 z-50">
    <div
        class="container mx-auto flex flex-wrap min-h-10v flex-col md:flex-row items-center"
    >
      <router-link to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"

      >
        <img src="/icons/code.svg" alt="" class="w-12 mx-6" />
        <span class="mx-3 text-5xl font-vibes">Thanos Chourlias</span>
      </router-link>
      <nav
          class="md:mr-auto
                  md:ml-4
                  md:py-1
                  md:pl-4
                  md:border-l
                  md:border-gray-400
                  flex
                  flex-wrap
                  items-center
                  text-xl
                  justify-center"
      >
        <router-link class="mx-5 hover:text-gray-900" to="/software">Software</router-link>
        <router-link class="mx-5 hover:text-gray-900" to="/dev">Development</router-link>
        <router-link class="mx-5 hover:text-gray-900" to="/admin">Admin Page</router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "NavigationBar",
	props: {},
	data() {
		return {}
	},
	methods: {
		thanos: function () {
			console.log("thanos")
		}
	}
})
</script>

<style scoped></style>
