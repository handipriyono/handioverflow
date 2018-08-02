<template>
  <div class="question">

   
asking by: <b>{{name}}</b>
<hr/>
    <div class="columns is-mobile is-centered">
      <div class="column is-half">

        <p class="bd-notification is-primary">
<h3 class="title is-3">{{quest.title}}</h3>
        </p>
        <p>{{quest.question}}</p>
      </div>





    </div>
<hr/>
 Help -  <b>{{name}}</b> by answering his/her question
    <article class="media tanya">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea v-model="answer" id="answer" class="textarea" placeholder="Add an answer..."></textarea>
          </p>
        </div>
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <a @click="answering"  class="button is-info">Submit</a>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">

            </div>
          </div>
        </nav>
      </div>
    </article>
    <div id="ss" @click="getAnswer">ssss</div>
  </div>
</template>

<script>
let axios = require('axios')

export default {
  name: 'question',

  data:function(){
    return {
      al:'sss',
      quest:"",
      answer:'',
      name:''
    }
  }
  ,
  created:function(){
console.log(this.$route.params.id)

axios({
    method: 'get',
    url: `http://35.196.48.13/question/${this.$route.params.id}`
      })
.then( (dataQuestion)=>{
  console.log(dataQuestion)
  this.quest = dataQuestion.data
  this.name = dataQuestion.data.userId.username
})
.catch(function(err){
  console.log(err)
})

},
methods:{
answering(){
  console.log('masuk answer')
  axios({
    method:'post',
    url:'http://35.196.48.13/answer/add',
    data:{
      answer:this.answer,
      questionId:this.$route.params.id
    },
    headers:{
      token:localStorage.getItem('token')
    }
  })
  .then((data)=>{
    console.log(data)
  })
  .catch(function(err){
    console.log(err)
  })
},
getAnswer(){
  // /question/:id
  axios({
    method:'get',
    url:`http://35.196.48.13/question/${this.$route.params.id}`
  })
  .then(function(data){
    console.log(data)
  })
  .catch(function(err){
    console.log(err)
  })



}

}

}
</script>
<style scooped>


.tanya{
  width:500px !important;
  margin:0px auto
}



</style>
