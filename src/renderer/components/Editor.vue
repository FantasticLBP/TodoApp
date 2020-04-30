<template>   
    <div>
      <mavon-editor 
      v-model="todoContent" 
      :fullscreen="true" 
      style="position: absolute; height:100%;"
      @save="handleSaveEditor"
      @imgAdd="handlePostImage"
      @imgDel="handleDeleteImage"
      />
    </div>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return {
      todoContent: this.$route.params.content,
      todos: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      console.log(this.$route.params.content)
      let todo = localStorage.getItem('todoContent')
      if (Array.isArray(JSON.parse(todo))) {
        this.todos = JSON.parse(todo)
      } else {
        this.todos.push(JSON.parse(todo))
      }
    })
  },
  methods: {
    handleSaveEditor (value, render) {
      let todo = {
        time: String(new Date()).substring(0, 10),
        content: value
      }
      this.todos.push(todo)
      localStorage.setItem('todoContent', JSON.stringify(this.todos))
    },
    handlePostImage (filename, imgfile) {
      alert(`${filename}-${JSON.stringify(imgfile)}`)
    },
    handleDeleteImage (filename) {
      alert(`${filename}`)
    }
  }
}
</script>

<style lang="stylus">

</style>
