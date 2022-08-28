<template>
  <div id="app">
    <PdfViewer></PdfViewer>
  </div>
</template>
<script>
import PdfViewer from './components/PdfViewer';

export default {
  name: '',
  components: {
    PdfViewer: PdfViewer,
  },
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #ccc;
}
</style>
