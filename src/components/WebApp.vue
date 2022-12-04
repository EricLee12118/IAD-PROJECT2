<template>
    <div id="app1">
        <div class="upload">  
            <input type="file" class="updata" accept="image/*" @change="change($event)" ref="updata">
        </div>
        <ul class="view">
            <li>
                <img :src="imageUrl ? imageUrl : baseImg" alt="" class="img">
            </li>
            <li>
                <img :src="imageUrl ? imageUrl : baseImg" alt="" class="desaturate">
            </li>
        </ul>
    </div>
</template>

<script >
export default{
    data() {
      return {
        imageUrl: '',
        baseImg: ''
      }
   },
   methods: {
     change(e) {
      console.log(e.target.files[0].name);
      // 判断是不是规定格式
      let file = e.target.files[0]
      var reader = new FileReader()
      var that = this 
      reader.readAsDataURL(file)
      reader.onload = e => {
        console.log('Read successful');
        that.imageUrl = e.target.result
      }

     }
   },
   created() {
     this.baseImg = require('../assets/bg.jpg')
   },
}
</script>

<style>
#app1{
    width: 80%;
    background-color: rgb(241, 241, 241);
    margin: 50px auto;
}


.upload{
    width: 80px;
    height: 20px;
    background-color: rgba(135, 206, 235,0.2);
    border: 1px dashed black;
    border-radius: 5px;
    position: relative;
}

.upload:hover{
    background-color: rgba(135, 206, 235,1);
}

.upload::before{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: 'Upload ';
    font-size: 16px;
    text-align: center;
    font-family: 'Poppins';
    line-height: 20px;
    user-select: none;
}


.updata {
    display: block;
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
}

.img {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 150px;
}

.view{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: space-around;
}
.view > li{
    width: 400px;
    height: 300px;
    background-color: rgba(54, 194, 35,0.1);
    list-style: none;
    margin: 20px;
    position: relative;
}
.view > li > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.desaturate{
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 150px;
    filter: grayscale(100%); 
}
</style>


  