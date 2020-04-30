<template>   
    <div>
      <el-input
        placeholder="Type something to search"
        prefix-icon="el-icon-search"
        v-model="keywords"
        @input="handleSearch"
        style="padding:8px;">
      </el-input>
      <el-menu
        default-active="NewNote"
        class="el-menu-vertical-demo"
        background-color="#DEDFE0"
        text-color="#000000"
        active-text-color="#000000"
        style="height: 600px;"
        :router=true>
          <el-menu-item @click="profile = true">
            <i class="el-icon-user"></i>
            <span>Profile</span>
          </el-menu-item>
          <el-menu-item index="NewNote">
              <i class="el-icon-plus"></i>
              <span>New Note</span>
          </el-menu-item>
          <el-menu-item index="DatePicker">
              <i class="el-icon-time"></i>
              <span>Today</span>
          </el-menu-item>
          <el-menu-item index="DatePicker">
              <i class="el-icon-date"></i>
              <span>Calender</span>
          </el-menu-item>
          <el-menu-item index="TodoList">
              <i class="el-icon-document"></i>
              <span>TodoList</span>
          </el-menu-item>
          <el-drawer
            title="I have a nested table inside!"
            :visible.sync="profile"
            direction="rtl"
            size="50%"
            :with-header="false">
            <div class="drawPanel">
              <h1>Account</h1>
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              style="display: block !important; margin: 20px auto !important; width: 88px; height: 88px;"></el-avatar>
              <el-input placeholder="Please input" v-model="username" class="username-input"></el-input>
              <el-card shadow="hover" style="margin-top: 50px;">
                <el-menu
                  default-active="first"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-menu-item index="first">
                    <i class="el-icon-menu"></i>
                    <span>Navigator One</span>
                  </el-menu-item>
                  <el-menu-item index="second">
                    <i class="el-icon-menu"></i>
                    <span>Navigator Two</span>
                  </el-menu-item>
                  <el-menu-item index="third" disabled>
                    <i class="el-icon-document"></i>
                    <span>Navigator Three</span>
                  </el-menu-item>
                  <el-menu-item index="fourth">
                    <i class="el-icon-setting"></i>
                    <span>Navigator Four</span>
                  </el-menu-item>
                </el-menu>
              </el-card>
            </div>
          </el-drawer>
      </el-menu>
    </div>
</template>

<script>
  export default {
    name: 'Category',
    data () {
      return {
        keywords: '',
        profile: false,
        username: 'User'
      }
    },
    methods: {
      handleSearch () {
        alert(this.keywords)
      },
      handleTest () {
        console.log(123)
      }
    }
  }
</script>

<style>
.drawPanel {
  margin: 60px;
}

.username-input {
  width: 50% !important;
  margin-left: 25%;
}

.el-avator {
  display: block !important;
  margin: 20px auto !important;
}

.el-menu {
  border: none !important;
}
</style>
