<template>
  <div class="submitquestion">
<h1>make your Question and Ask to the world</h1>
<div class="boxbox">
<div class="tile is-child box">
   <p class="title">Fill in the blank </p>
    </div>

 <div class="field">
 <p class="control has-icons-left has-icons-right">
   <input id="title" v-model="title" class="input" type="text" placeholder="Title of question">

 </p>
 </div>
 <div class="field">
      <div class="control">
        <textarea id="question" v-model="question" class="textarea" placeholder="Explain how we can help you"></textarea>
      </div>
    </div>
 <div class="field">
 <p class="control">
   <button @click="asking" class="button is-success">
     Send Question
   </button>
 </p>
 </div>



</div>

  </div>
</template>

<script>
let axios = require('axios')

export default {
  name: 'submitquestion',

  data:function(){
    return {
      al:'sss',
      quest:"",
      title:'',
      question:''
    }
  }
  ,
created:function(){

},
methods:{

  asking(){
    console.log('masuk nih buat quest')
    console.log(this.title)
    console.log(this.question, 'ask')
    axios({
      method:'post',
      url:'http://localhost:3000/question/add',
      data:{
        title:this.title,
        question:this.question
      },
      headers:{
        token:localStorage.getItem('token')
      }
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


.boxbox{
  width:500px !important;
  margin:0px auto
}

</style>
