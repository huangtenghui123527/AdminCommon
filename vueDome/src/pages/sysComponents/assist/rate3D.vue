<template>

   <div class="ui_base u_p3d">
	<div class="ball_c">懒人素材</div>
	<div class="base u_p3d">
		<div class="pan"></div>
		<div class="ball_base u_p3d ball_1">
			<div class="ball">JS代码</div>
		</div>
		<div class="ball_base u_p3d ball_2">
			<div class="ball">网站模板</div>
		</div>
		<div class="ball_base u_p3d ball_3">
			<div class="ball">网页特效</div>
		</div>
		<div class="ball_base u_p3d ball_4">
			<div class="ball">PHP+Mysql</div>
		</div>
		<div class="ball_base u_p3d ball_5">
			<div class="ball">在线客服</div>
		</div>
		<div class="ball_base u_p3d ball_6">
			<div class="ball">焦点图</div>
		</div>
	</div>
     <h2>{{msg}}</h2>
</div>
</template>
<script>
  export  default {
    name:"pageChild",
    data (){
      return {
        msg:'呵呵'
      }
    }
  }
</script>
<style lang="scss" scoped>
*{margin:0;padding:0;list-style:none;}
body{background:#d45a00;font-family:microsoft yahei;}
@-webkit-keyframes cir1 {
  0% {
    -webkit-transform: rotateY(0deg) rotateZ(10deg);
  }
  100% {
    -webkit-transform: rotateY(-360deg) rotateZ(10deg);
  }
}
@keyframes cir1 {
  0% {
    transform: rotateY(0deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-360deg) rotateZ(10deg);
  }
}
@-webkit-keyframes cir2 {
  0% {
    -webkit-transform: rotateY(-60deg) rotateZ(10deg);
  }
  100% {
    -webkit-transform: rotateY(-420deg) rotateZ(10deg);
  }
}
@keyframes cir2 {
  0% {
    transform: rotateY(-60deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-420deg) rotateZ(10deg);
  }
}
@-webkit-keyframes cir3 {
  0% {
    -webkit-transform: rotateY(-120deg) rotateZ(10deg);
  }
  100% {
    -webkit-transform: rotateY(-480deg) rotateZ(10deg);
  }
}
@keyframes cir3 {
  0% {
    transform: rotateY(-120deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-480deg) rotateZ(10deg);
  }
}
@-webkit-keyframes cir4 {
  0% {
    -webkit-transform: rotateY(-180deg) rotateZ(10deg);
  }
  100% {
    -webkit-transform: rotateY(-540deg) rotateZ(10deg);
  }
}
@keyframes cir4 {
  0% {
    transform: rotateY(-180deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-540deg) rotateZ(10deg);
  }
}
@-webkit-keyframes cir5 {
  0% {
    -webkit-transform: rotateY(-240deg) rotateZ(10deg);
  }
  100% {
    -webkit-transform: rotateY(-600deg) rotateZ(10deg);
  }
}
@keyframes cir5 {
  0% {
    transform: rotateY(-240deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-600deg) rotateZ(10deg);
  }
}
@-webkit-keyframes cir6 {
  0% {
    -webkit-transform: rotateY(-300deg) rotateZ(10deg);
  }
  100% {
    -webkit-transform: rotateY(-660deg) rotateZ(10deg);
  }
}
@keyframes cir6 {
  0% {
    transform: rotateY(-300deg) rotateZ(10deg);
  }
  100% {
    transform: rotateY(-660deg) rotateZ(10deg);
  }
}
@keyframes cir {
  0% {
    transform: rotateX(80deg) rotateY(-10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(80deg) rotateY(-10deg) rotateZ(-360deg);
  }
}
@keyframes cir_p {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}
@-webkit-keyframes cir {
  0% {
    -webkit-transform: rotateX(80deg) rotateY(-10deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(80deg) rotateY(-10deg) rotateZ(-360deg);
  }
}
@-webkit-keyframes cir_p {
  0% {
    -webkit-transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(-360deg);
  }
}

.u_p3d{
    -webkit-transform-style: preserve-3d !important;
    transform-style: preserve-3d !important;
}

.ui_base {
    position: relative;
    width: 400px;
    height: 0px;
    margin:100px auto;
    -webkit-perspective: 1000px;
    -webkit-perspective-origin: 50% 0%;
    perspective: 1000px;
    perspective-origin: 50% 0%;
}
.base{
	-webkit-transform: rotateX(80deg) rotateY(-10deg);
    transform: rotateX(80deg) rotateY(-10deg);
    position: relative;
    width: 350px;
    height: 350px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    animation: cir 10s linear 0s infinite;
}
.ball_base {
    -webkit-transform-origin: 225px 0px;
    transform-origin: 225px 0px;
    position: absolute;
    top: 175px;
    left: -50px;
    width: 225px;
    height: 127px;
}
.ball{
	-webkit-transition:all 2s ease-out 0ms;
	transition:all 2s ease-out 0ms;
	-webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
	position: absolute;
	width: 90px;
	height: 90px;
	line-height: 90px;
	text-align: center;
	background-image: url('../../../assets/img/ball_around.png');
	background-size: 100% 100%;
	left: 0px;
	top: 0px;
	color: rgba(255, 255, 255, 0);
	font-size: 12px;
	opacity: 1;
	overflow: hidden;
}
		
.ball_c {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    position: absolute;
    width: 157px;
    height: 157px;
    line-height: 157px;
    text-align: center;
    background-image: url(../../../assets/img/ball_center.png);
    left: 90px;
    top: 50px;
    color: #fff;
    font-size: 24px;
}

.pan {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/img/c.png");
    background-size: 100% 100%;
    -webkit-animation: cir_p 5s linear 0s infinite;
	animation: cir_p 5s linear 0s infinite;
}

.ball {
    color: #fff;
    opacity: 1;
}

.ball_1 .ball {
    transform: rotateY(10deg) rotateZ(10deg);
    animation: cir1 10s linear 0s infinite;
    -webkit-transition-delay: 1100ms !important;
	transition-delay: 1100ms !important;
}
.ball_2 .ball {
    -webkit-animation: cir2 10s linear 0s infinite;
		animation: cir2 10s linear 0s infinite;
		-webkit-transition-delay: 900ms !important;
	transition-delay: 900ms !important;
}
.ball_3 .ball {
    -webkit-animation: cir3 10s linear 0s infinite;
	animation: cir3 10s linear 0s infinite;
	-webkit-transition-delay: 700ms !important;
	transition-delay: 700ms !important;
}
.ball_4 .ball {
	-webkit-animation: cir4 10s linear 0s infinite;
	animation: cir4 10s linear 0s infinite;
	-webkit-transition-delay: 500ms !important;
	transition-delay: 500ms !important;
}
.ball_5 .ball {
	-webkit-animation: cir5 10s linear 0s infinite;
	animation: cir5 10s linear 0s infinite;
	-webkit-transition-delay: 300ms !important;
	transition-delay: 300ms !important;
}
.ball_6 .ball {
    -webkit-animation: cir6 10s linear 0s infinite;
	animation: cir6 10s linear 0s infinite;
	-webkit-transition-delay: 100ms !important;
		transition-delay: 100ms !important;
}

.ball_1 {
    -webkit-transform: rotateX(-90deg) rotateY(0deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(0deg) translateY(-70px);
}
.ball_2 {
    -webkit-transform: rotateX(-90deg) rotateY(60deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(60deg) translateY(-70px);
}
.ball_3 {
    -webkit-transform: rotateX(-90deg) rotateY(120deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(120deg) translateY(-70px);
}
.ball_4 {
    -webkit-transform: rotateX(-90deg) rotateY(180deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(180deg) translateY(-70px);
}
.ball_5 {
    -webkit-transform: rotateX(-90deg) rotateY(240deg) translateY(-70px);
	transform: rotateX(-90deg) rotateY(240deg) translateY(-70px);
}
.ball_6 {
	-webkit-transform: rotateX(-90deg) rotateY(300deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(300deg) translateY(-70px);
}
</style>
