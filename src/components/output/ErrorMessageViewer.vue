<script setup lang="ts">
</script>

<script lang="ts">
export default {
  name: 'ErrorMessageViewer'
}
</script>

<template>
  <div class="errormessage-viewer-component" style="display: inline-block">
    One or more input files did not meet the requirements and could therefore not be processed.<br/>
    Please make sure that the input files are correct and try again.
  </div>
</template>
<style lang="scss">
div.errormessage-viewer-component {
    @apply my-24;

    div.content-div {
        @screen lg {
        @apply w-3/4 mx-auto;
        }

        h1,
        h2 {
        @apply uppercase tracking-widest font-semibold text-2xl;
        }

        ul.troubleshooting-list {
        li {
            list-style-type: square;
            margin-left: 1.5rem;
        }
        }
    }
}
</style>