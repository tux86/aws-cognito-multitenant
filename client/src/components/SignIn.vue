<template>
  <div>
    <b-form @reset="onReset" @submit.prevent="onSubmit">
      <b-card header="Login">
        <b-card-text>
          <b-form-group
              label="Client (Tenant)"
          >
            <b-form-select v-model="tenantId" :options="tenants" required></b-form-select>
          </b-form-group>
          <b-form-group
              label="Email address:"
          >
            <b-form-input
                v-model="email"
                placeholder="Enter email"
                required
                type="email"
            ></b-form-input>
          </b-form-group>


          <b-form-group
              label="Password:"
          >
            <b-form-input
                v-model="password"
                placeholder="Password"
                required
                type="password"
            ></b-form-input>
          </b-form-group>

          <b-alert v-if="success" show variant="success">Authentication success !</b-alert>
          <b-alert v-if="success" show>
            <strong>user attributes:</strong>
            {{ userData }}
          </b-alert>
          <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
          <b-button class="float-right" type="submit" variant="info">Submit</b-button>
          <b-button type="reset">Reset</b-button>

        </b-card-text>

      </b-card>
    </b-form>
  </div>
</template>
<script>
import Vue from "vue";

import {Auth} from "aws-amplify";
import UserNameGeneratorMixin from "@/mixins/UserNameGeneratorMixin";
import TenantMixin from "@/mixins/TenantMixin";
Vue.mixin(UserNameGeneratorMixin);
Vue.mixin(TenantMixin);

export default {
  data() {
    return {
      error: null,
      success: false,
      userData: null,
      tenantId: null,
      email: null,
      password: null,
    }
  },
  methods: {
    async onSubmit() {
      try {
        this.error = null;
        this.success = false;
        this.userData = null;
        const user = await Auth.signIn(this.username, this.password);
        console.log(user);
        this.userData = JSON.stringify(user.attributes);
        this.success = true;
      } catch (error) {
        console.error(error);
        this.error = error.message || 'Login failed !';
      }

    },
    async onReset() {
      this.error = null;
      this.success = false;
      this.tenantId = null;
      this.email = null;
      this.password = null;
    }
  }
}
</script>

