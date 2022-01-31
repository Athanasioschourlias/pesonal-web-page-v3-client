<template>
  <div class="mx-auto my-10">
    <div class="flex flex-col items-center justify-center mb-10">
      <div class="w-24 h-0.5 bg-green-500 rounded-full my-2"/>
      <h1 class="text-4xl font-thin">{{articleTitle}}</h1>
    </div>

    <div class="flex flex-row my-6">
      <div class="w-1/2 h-auto">
        <img class="object-contain w-full h-104"
             :src="firstPhotoUrl"
             alt="raspberry pi and arduino connection schema!"/>
      </div>
      <div class="w-1/2">
        <img class="object-contain w-full h-96"
             :src="secondPhotoUrl"
             alt="raspberry pi and arduino connection schema!"/>
      </div>
    </div>

    <div class="flex flex-row w-full text-gray-500 justify-center items-center">
      <div class="w-1/2 flex flex-row mx-28">
        <h1>
          {{articleText}}
        </h1>
      </div>
      <div class="w-1/2 flex flex-row mx-10">
        <ul class="list-disc">
          <slot>Technical List</slot>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {ImageModuleObject} from "../types/image"

export default defineComponent({
	name: "DevelopmentArticles",
	props: {
		firstImgURL: String,
		secondImgUrl: String,
		articleTitle: String,
		articleText: String
	},
	data() {
		return {
			firstPhotoUrl: "",
			secondPhotoUrl: ""
		}
	},
	computed: {

	},
	created() {
		if(this.firstImgURL)
			this.getImageUrl(this.firstImgURL).then((url) => {
				this.firstPhotoUrl = url.default
			})

		if(this.secondImgUrl)
			this.getImageUrl(this.secondImgUrl).then((url) => {
				this.secondPhotoUrl = url.default
			})

	},
	methods: {
		async getImageUrl(imageUrl: string): Promise<ImageModuleObject> {
			return import("../../images/articlePhotos/" + imageUrl)
		},
	}
})

</script>

<style scoped>

</style>