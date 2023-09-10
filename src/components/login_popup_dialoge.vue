<template>
  <v-dialog class="flex flex-column">
    <v-card width="auto">
      <v-sheet class="bg-deep-purple pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-form
              v-model="form"
              @submit.prevent="onSubmit"
          >
            <v-text-field
                v-model="username"
                :readonly="loading"
                :rules="[required]"
                label="Username"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :readonly="loading"
                :rules="[required]"
                label="Password"
                placeholder="Enter your password"
            ></v-text-field>

            <br>

            <v-btn
                :disabled="!form"
                :loading="loading"
                block
                color="success"
                size="large"
                type="submit"
                variant="elevated"
            >
              Sign In
            </v-btn>
          </v-form>
        </v-card>
      </v-sheet>
      <v-card-actions>
        <v-btn color="primary" block
               @click="$emit('updateProp', false)">
          Close Dialog
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script lang="ts">
import {logInUser} from "../services/authorization.service"
import {defineComponent} from "vue"
import {login_resp} from "../types/auth.types"

export default defineComponent({
	name: "AdminPage",
	props: {
		dialog: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			form: false,
			username: "",
			password: "",
			loading: false,
			wrong_pass: false
		}
	},
	methods: {
		onSubmit () {
			if(!this.form) return

			this.loading = true

			this.login()

			setTimeout(() => (this.loading = false), 2000)

			this.$emit("updateProp", false)
		},
		required (v: any) {
			return !!v || "Field is required"
		},
    
		login() {

			logInUser(this.username, this.password).then((user_token: login_resp) => {
				if(!user_token) {
					console.log("The username or password was incorrect")
					this.wrong_pass = true
				}
				else {
					this.wrong_pass = false
					this.$emit("updateProp", false)

					//Storing the token and role to local storage
					localStorage.setItem("token", JSON.stringify({ token: user_token.token }))
					localStorage.setItem("role", JSON.stringify({ role: user_token.user.role }))

					console.log(localStorage.getItem("role"))
				}
				this.reloadPage()
			})
		},
		reloadPage() {
			window.location.reload()
		}
	}

})

</script>

<style scoped></style>
