<template>
  <v-dialog
      activator="parent"
      width="auto"
  >
    <v-card
        width="400"
        :title="title"
        class="flex-column flex"
    >
      <v-card-actions class=" justify-center">
        <slot name="card_actions">

        </slot>
      </v-card-actions>
    </v-card>
<!--      <v-card-text>-->
<!--        -->
<!--        -->
<!--        -->
<!--      </v-card-text>-->
<!--      <v-card-actions>-->
<!--        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>-->
<!--      </v-card-actions>-->
  </v-dialog>
</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
	name: "DynamicModal",
	props: {
    title: String
	},
	data() {
		return {
    
		}
	},
	mounted() {
    
	},
	methods: {
    
	}

})

</script>

<style scoped></style>
