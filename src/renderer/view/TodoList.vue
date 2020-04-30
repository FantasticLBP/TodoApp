<template>
   <el-row >
      <el-col :span="6">
        <div>
          <Category></Category>
        </div>
      </el-col>
      <el-col :span="18" style="padding: 50px;">
        <div class="block">
          <div class="radio" >
            <strong>Order:</strong>
            <el-radio-group v-model="reverse">
              <el-radio :label="true">descending</el-radio>
              <el-radio :label="false">ascending</el-radio>
            </el-radio-group>
          </div>

          <el-timeline :reverse="reverse" style="margin-top: 50px;" v-if="todos.length > 0">
            <el-timeline-item
              v-for="(activity, index) in todos"
              :key="index"
              :timestamp="activity ? activity.time: ''"
              @mousedown="handleClickTodoItem(index)">
              <a @click="handleClickTodoItem(index)" style="cursor: pointer;">
                任务{{index + 1}}
              </a>
            </el-timeline-item>
          </el-timeline>
          <el-alert
            style="margin-top: 50px;"
            title="Oops, there is no todo lists."
            type="warning"
            v-else>
          </el-alert>
        </div>
      </el-col>
    </el-row>
</template>

<script>
import Category from '@/components/Category'

export default {
  name: 'TodoList',
  components: {
    Category
  },
  data () {
    return {
      reverse: true,
      todos: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      let todo = localStorage.getItem('todoContent')
      let todos = JSON.parse(todo)
      if (Array.isArray(todos)) {
        this.todos = todos
      } else {
        if (todos) {
          this.todos.push(todos)
        }
      }
      if (this.todos.length === 0) {
        this.$notify({
          title: 'Oops',
          message: 'This is no todo lists',
          type: 'warning'
        })
      }
    })
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    handleClickTodoItem (index) {
      let todo = this.todos[index]
      this.$router.push({ name: 'NewNote', params: {content: todo.content} })
    }
  }
}
</script>
