<template>
  <div style="position: relative; margin-left: -120px; transform: scale(0.8)">
    <iframe
      src="http://localhost:8000/#!action=stream&udid=22301B41AD&player=mse&ws=ws%3A%2F%2Flocalhost%3A8000%2F%3Faction%3Dproxy-adb%26remote%3Dtcp%253A8886%26udid%3D22301B41AD"
      height="1280px"
      width="720px"
      style="
        border-radius: 10px;
        position: absolute;
        left: 140px;
        top: -160px;
        z-index: 22;
        transform: scale(0.47);
        border: none;
      "
    />
    <div
      style="
        background: url('./ct45remove.png') no-repeat;
        background-size: cover;
        position: absolute;
        height: 1000px;
        width: 1000px;
        left: 30px;
        transform: scaleY(0.96);
      "
    ></div>
  </div>
  <div style="margin-left: 600px">
    <!-- <iframe
      width="100%"
      src="http://localhost:8085/12500.pdf"
      style="width: 80%; height: 1000px"
    ></iframe> -->
    <embed
      width="100%"
      src="http://localhost:8085/FIN.pdf#toolbar=0&navpanes=0&scrollbar=0"
      style="width: 700px; height: 1000px"
      frameborder="0"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
