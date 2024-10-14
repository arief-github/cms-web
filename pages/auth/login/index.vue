<template>
  <div class="card card-outline card-info">
    <div class="card-header text-center">
      <nuxt-link to="/" class="h1 font-weight-bold text-dark">CMS</nuxt-link>

      <p> <i>Content Management System</i> </p>
    </div>

    <div class="card-body">
      <div v-if="validation.message" class="mt-2">
        <b-alert show variant="danger">{{ validation.message }}</b-alert>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label class="font-weight-bold text-uppercase">Email Address</label>
          <input type="email" v-model="user.email" class="form-control" :class="{'is-invalid': validation.email}"  placeholder="Masukkan Alamat Email">
        </div>
        <div v-if="validation.email" class="mt-2">
          <b-alert show variant="danger">{{ validation.email[0] }}</b-alert>
        </div>
        <div class="form-group">
          <label class="font-weight-bold text-uppercase">Password</label>
          <input type="password" v-model="user.password" class="form-control" :class="{'is-invalid': validation.password}"  placeholder="Masukkan Password">
        </div>
        <div v-if="validation.password" class="mt-2">
          <b-alert show variant="danger">{{ validation.password[0] }}</b-alert>
        </div>

        <button type="submit" class="btn btn-info btn-block text-uppercase">
          login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  head() {
    return {
      title: 'Login - CMS Web App - Learn Any Programming Languanges FREE!'
    }
  },
  data() {
    return {
      user : {
        email: '',
        password: '',
      },
      validation: []
    }
  },
  methods: {
    async login() {
      await this.$auth.loginWith('local', {
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(() => {
          // redirect to admin-dashboard page when login success
          this.$router.push({
            name: 'admin-dashboard'
          });
        })
        .catch(error => {
          this.validation = error.response.data
        })
    }
  }
}
</script>

<style scoped>

</style>
