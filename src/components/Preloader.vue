<template>
  <div class="preLoadContainer">
    <div class="preLoadGroup">
      <div class="preLoadBlock"></div>
      <div class="preLoadBlock"></div>
      <div class="preLoadBlock"></div>
      <div class="preLoadBlock"></div>
      <div class="preLoadBlock"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preloader',
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
};
</script>

<style scoped>
/* PreLoader */
:root {
  --duration: 1.5s;
  --container-size: 250px;
  --box-size: 33px;
  --box-border-radius: 25%;
  --header-color: rgba(191,220,252,0.9);
  --spare-color: rgba(2,141,208,0.9);
  --inverted-header-color: black;
  --inverted-spare-color: rgba(0, 191, 221, 0.9);
  --header-text-color: rgba(161,71,143,1);
  --spare-text-color: rgba(255, 255, 255, 0.9);
  --focused-spare-color: rgba(161,71,143,1);
  --focused-spare-text-color: rgba(255,255,255,1);
  --inverted-header-text-color: rgba(255, 255, 255, 0.9);
  --inverted-spare-text-color: rgba(255,255,255,1);
  --shadow-color:rgba(141, 210, 240, 1);
  --content-color:rgba(191,220,252,0.9);
  --content-shadow-color:rgba(0,0,0,1);
}

.preLoadContainer {
  position:fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  z-index: 100;
}

.preLoadGroup {
  width: var(--container-size);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.preLoadBlock {
  width: var(--box-size);
  height: var(--box-size);
  position: relative;
  display: block;
  -webkit-transform-origin: -50% center;
  transform-origin: -50% center;
  border-radius: var(--box-border-radius);
}
.preLoadBlock:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: lightblue;
  border-radius: var(--box-border-radius);
  box-shadow: 0px 0px 10px 0px rgba(28, 159, 255, 0.4);
}
.preLoadBlock:nth-child(1) {
  -webkit-animation: slide var(--duration) ease-in-out infinite alternate;
  animation: slide var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(1):after {
  -webkit-animation: color-change var(--duration) ease-in-out infinite alternate;
  animation: color-change var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(2) {
  -webkit-animation: flip-1 var(--duration) ease-in-out infinite alternate;
  animation: flip-1 var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(2):after {
  -webkit-animation: squidge-1 var(--duration) ease-in-out infinite alternate;
  animation: squidge-1 var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(3) {
  -webkit-animation: flip-2 var(--duration) ease-in-out infinite alternate;
  animation: flip-2 var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(3):after {
  -webkit-animation: squidge-2 var(--duration) ease-in-out infinite alternate;
  animation: squidge-2 var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(4) {
  -webkit-animation: flip-3 var(--duration) ease-in-out infinite alternate;
  animation: flip-3 var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(4):after {
  -webkit-animation: squidge-3 var(--duration) ease-in-out infinite alternate;
  animation: squidge-3 var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(5) {
  -webkit-animation: flip-4 var(--duration) ease-in-out infinite alternate;
  animation: flip-4 var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(5):after {
  -webkit-animation: squidge-4 var(--duration) ease-in-out infinite alternate;
  animation: squidge-4 var(--duration) ease-in-out infinite alternate;
}
.preLoadBlock:nth-child(2):after {
  background-color: #1C9FFF;
}
.preLoadBlock:nth-child(3):after {
  background-color: #1FB1FD;
}
.preLoadBlock:nth-child(4):after {
  background-color: #22C7FB;
}
.preLoadBlock:nth-child(5):after {
  background-color: #23D3FB;
}

@-webkit-keyframes slide {
  0% {
    background-color: #1795FF;
    -webkit-transform: translatex(0vw);
    transform: translatex(0vw);
  }
  100% {
    background-color: #23D3FB;
    -webkit-transform: translatex(calc(var(--container-size) - (var(--box-size) * 1.25)));
    transform: translatex(calc(var(--container-size) - (var(--box-size) * 1.25)));
  }
}

@keyframes slide {
  0% {
    background-color: #1795FF;
    -webkit-transform: translatex(0vw);
    transform: translatex(0vw);
  }
  100% {
    background-color: #23D3FB;
    -webkit-transform: translatex(calc(var(--container-size) - (var(--box-size) * 1.25)));
    transform: translatex(calc(var(--container-size) - (var(--box-size) * 1.25)));
  }
}
@-webkit-keyframes color-change {
  0% {
    background-color: #1795FF;
  }
  100% {
    background-color: #23D3FB;
  }
}
@keyframes color-change {
  0% {
    background-color: #1795FF;
  }
  100% {
    background-color: #23D3FB;
  }
}
@-webkit-keyframes flip-1 {
  0%, 15% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  35%, 100% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
}
@keyframes flip-1 {
  0%, 15% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  35%, 100% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
}
@-webkit-keyframes squidge-1 {
  5% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  15% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
  25%, 20% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(0.8) scaley(1.4);
    transform: scalex(0.8) scaley(1.4);
  }
  55%, 100% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  40% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
}
@keyframes squidge-1 {
  5% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  15% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
  25%, 20% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(0.8) scaley(1.4);
    transform: scalex(0.8) scaley(1.4);
  }
  55%, 100% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  40% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
}
@-webkit-keyframes flip-2 {
  0%, 30% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  50%, 100% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
}
@keyframes flip-2 {
  0%, 30% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  50%, 100% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
}
@-webkit-keyframes squidge-2 {
  20% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  30% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
  40%, 35% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(0.8) scaley(1.4);
    transform: scalex(0.8) scaley(1.4);
  }
  70%, 100% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  55% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
}
@keyframes squidge-2 {
  20% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  30% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
  40%, 35% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(0.8) scaley(1.4);
    transform: scalex(0.8) scaley(1.4);
  }
  70%, 100% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  55% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
}
@-webkit-keyframes flip-3 {
  0%, 45% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  65%, 100% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
}
@keyframes flip-3 {
  0%, 45% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  65%, 100% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
}
@-webkit-keyframes squidge-3 {
  35% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  45% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
  55%, 50% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(0.8) scaley(1.4);
    transform: scalex(0.8) scaley(1.4);
  }
  85%, 100% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  70% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
}
@keyframes squidge-3 {
  35% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  45% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
  55%, 50% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(0.8) scaley(1.4);
    transform: scalex(0.8) scaley(1.4);
  }
  85%, 100% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  70% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
}
@-webkit-keyframes flip-4 {
  0%, 60% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  80%, 100% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
}
@keyframes flip-4 {
  0%, 60% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  80%, 100% {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
}
@-webkit-keyframes squidge-4 {
  50% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  60% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
  70%, 65% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(0.8) scaley(1.4);
    transform: scalex(0.8) scaley(1.4);
  }
  100%, 100% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  85% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
}
@keyframes squidge-4 {
  50% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  60% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
  70%, 65% {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: scalex(0.8) scaley(1.4);
    transform: scalex(0.8) scaley(1.4);
  }
  100%, 100% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1) scaley(1);
    transform: scalex(1) scaley(1);
  }
  85% {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scalex(1.3) scaley(0.7);
    transform: scalex(1.3) scaley(0.7);
  }
}
</style>
