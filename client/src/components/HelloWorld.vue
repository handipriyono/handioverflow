<template>
  <div class="hello">


    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Menu</p>
          <p class="subtitle">--</p>
          <div class="content">
            <a @click="asking" class="button is-link">ASK a Question on Handioverflow?</a>
               </div>
        </article>
      </div>

      <div class="tile is-parent is-8">
        <article class="tile is-child box">
          <p class="title">List Question</p>
          <p class="subtitle">With some question</p>
          <div  class="content">
          <table>
            <tr>
              <th>Question</th>

              <th>acts</th>
            </tr>
            <tr v-for="list in quest">

              <td> <router-link :to="`/questions/${list._id}`"> {{list.title}}</router-link></td>
             
              <td>asking by: {{list.userId.username}}</td>
            </tr>
          </table>
          </div>
        </article>
      </div>
    </div>


  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'HelloWorld',
  props: {
  msg: String
  },
  data:function(){
    return{
      quest:''
    }
  },
  created:function(){

    console.log('tessssss')
  axios({
    method:'get',
    url:'http://localhost:3000/question'
  })
    .then( (dataQuestion)=>{
      console.log(dataQuestion)
      this.quest = dataQuestion.data
    })
    .catch(function(err){
      console.log(err)
    })



  },
  methods:{
    asking(){
      console.log('asking')
      if(localStorage.getItem('token')){
console.log('ada files')
window.location = '/#/asking'


      } else {
        window.location = '#/register'
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
