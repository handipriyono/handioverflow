<template>
  <div class="register">
    <h1>This is an register page</h1>
    <div class="field">Email:
  <p class="control has-icons-left has-icons-right">
    <input v-model="email" id="email" class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>

<div class="field">Username:
  <p class="control has-icons-left">
    <input v-model="username" id="username" class="input" type="text" placeholder="username">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>


<div class="field">Password:
  <p class="control has-icons-left">
    <input v-model="password" id="password" class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control">
    <button @click="register" class="button is-success">
      Register
    </button>
  </p>
</div>
 Have an account? Please LOGIN here  <a href="http://localhost:8080/#/login" class="button is-info is-rounded">LOGIN</a>

</div>


</template>

<script>
let axios = require('axios')

export default {
  name: 'register',

  data:function(){
    return {
      al:'sss',
      quest:"",
      email:'',
      username:'',
      password:''
    }
  }
  ,
  created:function(){

    if(localStorage.getItem('token')){
      window.location = '/'
    } else {

    }
},
methods:{
  register(){
    console.log('masuk nih regster')

    axios({
        method: 'post',
        url: `http://35.196.48.13/users/register`,
        data:{
          username:this.username,
          email:this.email,
          password:this.password
        }
          })
    .then( (data)=>{
      console.log(data, 'ini data')
      localStorage.setItem('token',data.data.token)
    // window.location = '/'
    })
    .catch(function(err){
      console.log(err)

    })

  }

}

}
</script>
<style scooped>





</style>
