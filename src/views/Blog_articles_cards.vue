<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
    ></v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ articleText.substr(0, 20) + "....." }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          color="success"
          variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
          @click="arrowDir = !arrowDir"
      >
        <font-awesome-icon
            :icon=arrowDirection
            size="md"
            :class="{'text-black':arrowDir, 'text-gray-500':!arrowDir}"/>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="arrowDir">
        <v-divider></v-divider>

        <v-card-text>
          {{ articleText }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
	name: "BlogArticlesCards",
	components: {

	},
	props: {
		title: {
			type: String,
			default: "No Title :("
		},
		articleText: {
			type: String,
			default: "Seems we could not found a text?!? :( Let's refresh the page and check again!"
		},
	},
	data() {
		return {
			arrowDown: ["fa", "chevron-down"],
			arrowUp: ["fa", "chevron-up"],
			arrowDir: false
		}
	},
	computed: {
		arrowDirection: function() {
			return this.arrowDir ? this.arrowUp : this.arrowDown
		}
	},

	methods: {
    
	}
})
</script>