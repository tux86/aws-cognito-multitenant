<template>
  <div class="m-5">
    <b-container>
      <b-row>
        <h1 class="text-center mb-5" style="width: 100%">Multi-tenant Cognito Demo App</h1>
      </b-row>
      <b-row>
        <b-col cols="6">
          <SignUp></SignUp>
        </b-col>
        <b-col cols="6">
          <SignIn></SignIn>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

export default {
  components: {
    SignUp,
    SignIn
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

