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

      <v-btn
          v-if="role === 'admin'"
          @click="toggleDel()"
      >
        <font-awesome-icon
            :icon='["fa", "trash"]'
            size="md"
            class="text-red-darken-4"/>
      </v-btn>
    </v-card-actions>

    <modal v-if="are_u_sure" :title="'Would you like to delete this article?'">
      <template #card_actions>
        <v-btn variant="outlined" @click="delete_article()">
          Yes
        </v-btn>
      </template>
    </modal>

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
import dynamic_modal from "./dynamic_modal.vue"
import {delete_article, get_article} from "../services/admin.service"

export default defineComponent({
	name: "BlogArticlesCards",
	components: {
		"modal": dynamic_modal
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
			role: "member",
			are_u_sure: false,
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

		toggleDel: function() {
			this.are_u_sure = !this.are_u_sure
		},
		delete_article: function() {

			get_article().then((article ) => {
				article.forEach((art) => {

					if(art.title == this.title && art._id) {

						delete_article(art._id, art.category).then(() => {
							console.log("The article was deleted successfully")

							this.reloadPage()
						})
					}
				})

			})
		},
		reloadPage() {
			window.location.reload()
		}
	}
})
</script>