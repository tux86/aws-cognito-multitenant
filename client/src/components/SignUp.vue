<template>
  <div>
    <b-form @reset="onReset" @submit.prevent="onSubmit">
      <b-card header="Create an account">
        <b-card-text>
          <b-form-group
              label="Client (Tenant)"
          >
            <b-form-select v-model="tenantId" :options="tenants" required></b-form-select>
          </b-form-group>
          <b-form-group
              label="First name:"
          >
            <b-form-input
                v-model="given_name"
                placeholder="First name"
                required
                type="text"
            ></b-form-input>
          </b-form-group>

          <b-form-group
              label="Last name:"
          >
            <b-form-input
                v-model="family_name"
                placeholder="Last name"
                required
                type="text"
            ></b-form-input>
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
              label="Define a password:"
          >
            <b-form-input
                v-model="password"
                placeholder="Define a password"
                required
                type="password"
            ></b-form-input>
          </b-form-group>
          <b-alert v-if="success" show variant="success">Account created successfully !</b-alert>

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
      tenantId: null,
      given_name: null,
      family_name: null,
      email: null,
      password: null,
    }
  },
  methods: {
    async onSubmit() {

      try {
        this.error = null;
        const payload = {
          username: this.username,
          password: this.password,
          attributes: {
            email: this.email,
            given_name: this.given_name,
            family_name: this.family_name,
            "custom:tenant_id": this.tenantId
          },
          validationData: []
        };

        const user = await Auth.signUp(payload);
        console.log(user);
        this.success = true;

      } catch (error) {
        console.error(error);
        this.error = error.message || 'Signup failed !';
      }

    },
    async onReset() {
      this.error = null;
      this.success = false;
      this.tenantId = null;
      this.email = null;
      this.password = null;
      this.given_name = null;
      this.family_name = null;
    }
  }
}
</script>

