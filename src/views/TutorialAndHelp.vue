<script lang="ts">
export default {}
</script>
<template>
  <div class="tutorial-and-help-view">
    <div class="content-div">
      <div class="tutorial-div">
        <h2>Tutorial</h2><br />
          <h3>Using STAGETOOL</h3>
            Using STAGETOOL is easy:<br />
            To try out one of the sample images, simply click on one of the 6 images under the "TRY STAGETOOL" section.<br />
            <br />
            You can also upload your own images. Simply click on the "Browse" button in the "UPLOAD YOUR IMAGES" section. You can upload as many images as you like,<br />
            but make sure to follow the image requirements and supported file formats. If the file format of one or more images is not supported, the "Upload" button will not work.<br />
            <br />
            Then, simply click the "Upload" button. After all images have been processed, you will be presented with the results.<br />
            <br />
          <h3>Results</h3>
            Once all images have been processed, you will find a short explanation at the top of the page.<br />
            Under the "Input" section, you will see all uploaded input images.<br />
            Under the "Results" section, you will see all resulting images.<br />
            Below the result images, the Tubule Data for the first input image is shown.<br />
            To see the Tubule Data for another image, click on the corresponding image in the "Input" section. The Tubule Data has now changed.<br />
            To download all the Tubule Data as one JSON file, click on the link in the description at the top of the page.<br />
            To download a resulting image, simply click on it.<br />
            In case a image could not be processed, you will see the error in the "Results" section. Then, no Tubule Data for this image is shown as well.<br />
            <br />
            For more details, also have a look at the <a href="/what-is-stagetool">"What is StageTool?"</a> page.
      </div>
      <div class="help-div">
        <h2>Help</h2>
        If you need any help, feel free to send an email to <a href="mailto:stagetool@utu.fi">stagetool@utu.fi</a>.
      </div>
    </div>
  </div>
  
</template>
<style lang="scss">
div.tutorial-and-help-view {
  @apply my-24;
  @apply flex flex-col justify-center;

  div.content-div {
    @screen lg {
      @apply w-3/4 mx-auto;
    }

    p {
      @screen lg {
        @apply w-3/4 mx-auto;
      }
    }

    a {
      @apply text-slate-700;
    }

    h2 {
      @apply uppercase font-semibold tracking-widest text-2xl;
    }
    h3 {
      @apply uppercase font-semibold tracking-widest text-xl;
    }

    div.tutorial-div {
      @apply mt-12;
    }

    div.help-div {
      @apply mt-12;
      img {
        @apply mx-auto;
      }
      p {
        @apply text-sm;
      }
    }
  }
}
</style>
