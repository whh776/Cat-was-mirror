<template>
  <div class="login">
    <div class="login-from">
      <div class="login-wrap" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <input type="text" placeholder="请输入用户名" v-model="username" />
        <input type="password" placeholder="请输入密码" v-model="password" />
        <button v-on:click="login">登录</button>
        <span v-on:click="ToRegister">没有账号？马上注册</span>
      </div>

      <div class="register-wrap" v-show="showRegister">
        <h3>注册</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <input type="text" placeholder="请输入用户名" v-model="newUsername" />
        <input type="password" placeholder="请输入密码" v-model="newPassword" />
        <button v-on:click="register">注册</button>
        <span v-on:click="ToLogin">已有账号？马上登录</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: "",
      username: "",
      password: "",
      newUsername: "",
      newPassword: ""
    };
  },
  methods: {
    login() {
      console.log(1);
    },
    ToRegister() {
      console.log(1);
    },
    register() {
      console.log(1);
    },
    ToLogin() {
      console.log(1);
    }
  }
};
</script>
<style lang="less">
.login {
  width: 1536px;
  height: 720px;
  background-size: 100% 100%;
  background-image: url("../../pic/01.jpg");
  .login-from {
    width: 300px;
    height: 300px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    text-align: center;
    .login-wrap {
      input {
        display: block;
        width: 250px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        margin-bottom: 10px;
        outline: none;
        border: 1px solid #888;
        padding: 10px;
        box-sizing: border-box;
      }
      p {
        color: red;
      }
      button {
        display: block;
        width: 250px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        border: none;
        background-color: #41b883;
        color: #fff;
        font-size: 16px;
        margin-bottom: 5px;
      }
      span {
        cursor: pointer;
      }
      span:hover {
        color: #41b883;
      }
    }
  }
}
</style>