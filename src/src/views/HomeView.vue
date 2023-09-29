<script setup lang="ts"></script>

<template>
  <div class='home-view'>
    <input type="file" accept="image/tiff" />
    <div class="info-div">
      <p>
        <span class="font-semibold">Image requirements</span>

        <ul>
          <li>1024 * 1024</li>
          <li>400x magnification</li>
          <li>DAPI or related chromatin staining</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
  div.home-view {
    @apply h-full;
    @apply flex flex-col justify-center;

    div.info-div {
      @apply mt-6;

      ul {
        list-style-type: square;
        @apply ml-6;
      }
    }
  }
</style>
