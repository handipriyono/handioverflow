<template>
  <div class="register">
    <h1>This is LOGIN page</h1>

<div class="Regreg">
    <div class="field">
     <label class="label">email</label>
     <div class="control">
       <input v-model="email" class="input" type="text" placeholder="e.g handi">
     </div>
   </div>

   <div class="field">
     <label class="label">password</label>
     <div class="control">
       <input v-model="password" class="input" type="password" >
     </div>
   </div>
   <div class="control">
  <button @click="login" class="button is-primary">Submit</button>
</div>

Dont' Have an account? Please register here  <a href="http://localhost:8080/#/register" class="button is-info is-rounded">REGISTER</a>
</div>


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
  login(){
    console.log('masuk nih login')

    axios({
        method: 'post',
        url: `http://localhost:3000/users/login`,
        data:{
          email:this.email,
          password:this.password
        }
          })
    .then( (data)=>{
      console.log(data)
  localStorage.setItem('token',data.data.token )
  console.log(data.data.token)
  window.location = '/'
    })
    .catch(function(err){
      console.log(err)

    })

  }

}

}
</script>
<style scooped>

.field:{
  width:400px !important
}
.Regreg:{
  width:400px !important
}


</style>
