<template>
    <div class="pageTool">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'pageTool',
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
    *{
margin: 0;
padding: 0;
list-style: none;
}
ul{
width: 600px;
height: 600px;
margin: 100px auto;
background: rgba(0,0,0,0.5);
position: relative;
}
li{
width: 100%;
height: 100%;
border-radius: 50%;
border:1px solid #fff;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
}

li:before{
content: "";
position: absolute;
width: 10px;
height: 10px;
border-radius: 50%;
background: pink;
box-shadow: 0 0 2px 1px rgba(255,255,255,0.8);
left: 100px;
top: 100px;
}

li:nth-child(1):before{
top: 66px;
}
li:nth-child(2):before{
top: -1px;
left: 214px;
}




li:nth-child(1){
animation: rotates 2s ease-in-out .2s infinite;
}
li:nth-child(2){
animation: rotates 1.5s ease  infinite;
}
li:nth-child(3){
animation: rotates .5s ease-in-out .4s infinite;
}
li:nth-child(4){
animation: rotates 3.6s ease-in .7s infinite;
}
li:nth-child(5){
animation: rotates 1.4s ease-out .24s infinite;
}
li:nth-child(6){
animation: rotates 2s ease-in-out .2s infinite;
}
li:nth-child(2){
width: 90%;
height: 90%;
}
li:nth-child(3){
width: 80%;
height: 80%;
}
li:nth-child(4){
width: 70%;
height: 70%;
}
li:nth-child(5){
width: 60%;
height: 60%;
}
li:nth-child(6){
width: 50%;
height: 50%;
}
li:nth-child(7){
width: 40%;
height: 40%;
}
li:nth-child(8){
width: 30%;
height: 30%;
}
li:nth-child(9){
width: 20%;
height: 20%;
}

@keyframes rotates{
from{
transform:translate(-50%,-50%) rotate(0deg);
}
to{
transform:translate(-50%,-50%) rotate(360deg);
}
}
</style>
