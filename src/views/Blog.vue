<template>
  <v-container fluid class="min-h-80v pa-0 flex flex-row justify-center">

    <section class="w-full h-52 flex items-center overflow-hidden justify-center">
      <img class="object-cover" src="/public/images/Development/coding_dev.png"/>
      <h1 class="text-white
                  text-xl
                  sm:text-4xl
                  md:text-6xl
                  lg:text-7xl
                  absolute
                  font-thin">Development</h1>
    </section>

  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
	name: "Blog",
	components: {
    
	},
})
</script>