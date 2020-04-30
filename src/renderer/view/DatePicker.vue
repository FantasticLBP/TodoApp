<template>
   <el-row >
      <el-col :span="6">
        <Category></Category>
      </el-col>
      <el-col :span="18" style="padding: 40px 20px;">
        <h1>Calender</h1>
        <el-calendar>
            <template
                slot="dateCell"
                slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                </p>
            </template>
        </el-calendar>
      </el-col>
    </el-row>
</template>

<script>
import Category from '@/components/Category'
import Editor from '@/components/Editor'

export default {
  name: 'DatePicker',
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
.is-selected {
    color: #1989FA;
}
</style>
