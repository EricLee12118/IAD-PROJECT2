<template lang="html">
  <body class="gradient">
    <form>
      <h3>Login Here</h3>

      <label for="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" v-model="username">

      <label for="password">Password</label>
      <input type="password" placeholder="Password" id="password" v-model="password">

      <button @click=get()>Log In</button>
      <div class="social">
        <div class="gb">WeChat</div>
        <div class =fb><router-link active-class="active" to="/map">Google</router-link></div>
      </div>
    </form>
  </body>
</template>

<script>
import axios from "axios"
export default {
  data () {
    return {
      username:"",
      password:""
    };
  },

  methods: {
    get(){
      if(this.username != '' && this.password != ''){
        axios.get('http://127.0.0.1/user', {
          params: {
            username: this.username,
            password: this.password
          }
        }).then(res=>{
          if(res.data.status == 200) {
            this.$router.push({
              path: '/map',
              query: {
                name: this.username
              }
            })
          }else{
            this.$alert('Password or username error', 'Login Fail', {
              confirmButtonText: 'Confirm',
              callback: action => {
                this.username = '',
                this.password = ''
              }
            });
          }
        }).catch(err=>{
            console.log("Login fail" + err);
        })
      }
    }
  }
}
</script>


<style>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
form {
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}
form * {
  font-family: "Poppins", sans-serif;
  color: #000000;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

@media (prefers-color-scheme: dark) {
  form * {
    color: #ffffff;
  }
}

form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

::placeholder {
  color: #1b1b1b;
}

@media (prefers-color-scheme: dark) {
  ::placeholder {
    color: #e5e5e5;
  }
}

button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  opacity: 0.3;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
.social {
  margin-top: 30px;
  display: flex;
}
.social div {
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #150f03;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .social div {
    color: #eaf0fb;
  }

  body {
    background: #000;
  }
}

.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);
}
.social .fb {
  margin-left: 25px;
}
.social i {
  margin-right: 4px;
}

.gradient {
    width: 100%;
    height: 800px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 600% 600%;
    animation: gradientBG 5s ease infinite;
  }

  /* 动画，控制背景 background-position */
  @keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
</style>