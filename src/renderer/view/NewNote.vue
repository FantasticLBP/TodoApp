<template>
   <el-row >
      <el-col :span="6">
        <Category></Category>
      </el-col>
      <el-col :span="18">
        <Editor />
      </el-col>
    </el-row>
</template>

<script>
import Category from '@/components/Category'
import Editor from '@/components/Editor'

export default {
  name: 'NewNote',
  components: {
    Category,
    Editor
  },
  data () {
    return {
      input2: '',
      currentIndex: 1
    }
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 40px;
    width: 100vw;
  }
</style>
