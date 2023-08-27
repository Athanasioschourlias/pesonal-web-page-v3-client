<template>
  <div class="max-w-sm rounded-lg overflow-hidden shadow-2xl m-6">
    <img class="w-full" :src="imgUrl"
         alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{title}}</div>
      <p class="text-gray-700 text-base">
        {{articleText}}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span v-for="item in hastags" :key="item" class="inline-block
                           bg-gray-200
                           rounded-full
                           px-3
                           py-1
                           text-sm
                           font-semibold
                           text-gray-700
                           mr-2
                           mb-2">
              #{{item}}
            </span>
      </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import development_articles from "./development_articles.vue"

export default defineComponent({
	name: "SoftwarePageInfoCards",

	props: {
		title: String,
		imgUrl: String,
		articleText: String,
		hastags: [] as any
	},
	data(){
		return {

		}
	},
	computed: {

	}


})
</script>
