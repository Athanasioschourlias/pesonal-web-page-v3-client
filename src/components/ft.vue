<template>
  <footer class="min-h-10v
                  bg-background-color
                  text-white
                  flex
                  flex-row
                  items-center
                  justify-start
                  px-24">

    <h4 class="flex-1-1-40 font-extralight">Athanasios Chourlias &copy; {{getDate}}</h4>

    <ul class="justify-around flex flex-1-1-40">
      <li>
        <a href="https://github.com/Athanasioschourlias">
          <font-awesome-icon :icon="['fab', 'github']"
                             size="2x"/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/thanos.chourlias/?hl=el">
          <font-awesome-icon
              :icon="['fab', 'instagram']"
              size="2x"/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/chourlias">
          <font-awesome-icon :icon="['fab', 'twitter']"
                             size="2x"/>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCJAClF_1zFojNKF_B22qmhA?view_as=subscriber">
          <font-awesome-icon :icon="['fab', 'youtube']"
                             size="2x"/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/athanasios-chourlias-6b8ba71b2/">
          <font-awesome-icon :icon="['fab', 'linkedin']"
                             size="2x"/>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "Ft",
	props: {},
	data() {
		return {
			date: Number
		}
	},
	computed:{
		getDate: function () {
			return new Date().getFullYear()
		}
	},
	methods: {

	}
})
</script>

<style scoped>

</style>