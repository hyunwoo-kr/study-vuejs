<template>
  <div id="app">
    <div class="app-header">
      <template v-if="isLoading">
        Loading...
      </template>

      <template v-else>
        <span v-if="showAllPages">
          {{ pageCount }} page(s)
        </span>

        <span v-else>
          <button :disabled="page <= 1" @click="page--">❮</button>
          {{ page }} / {{ pageCount }}
          <button :disabled="page >= pageCount" @click="page++">❯</button>
        </span>

        <label class="right">
          <input v-model="showAllPages" type="checkbox">
          Show all pages
        </label>
      </template>
    </div>

    <div class="app-content">
      <vue-pdf-embed ref="pdfRef"
        :source="pdfSource"
        :page="page"
        @rendered="handleDocumentRender" />
    </div>
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed';

export default {
  name: '',
  components: {
    VuePdfEmbed: VuePdfEmbed
  },
  data() {
    return {
      isLoading: true,
      page: null,
      pageCount: 1,
      pdfSource: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
      showAllPages: true,
    }
  },
  watch: {
    showAllPages() {
      // 처음에 Page 전체를 보이게 하기
      this.page = this.showAllPages ? null : 1;
    },
  },
  methods: {
    handleDocumentRender() {
      this.isLoading = false
      this.pageCount = this.$refs.pdfRef.pageCount
    },
    handlePasswordRequest(callback, retry) {
      callback(prompt(retry
        ? 'Enter password again'
        : 'Enter password'
      ))
    },
  },
  created() {
    this.pdfSource =
      'data:application/pdf;base64,' +
      'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxv' +
      'ZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFn' +
      'ZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBb' +
      'IDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFy' +
      'ZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQg' +
      'MCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBv' +
      'YmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAv' +
      'VGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAog' +
      'IC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8s' +
      'IHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAw' +
      'MCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAK' +
      'MDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAg' +
      'MDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFy' +
      'dHhyZWYKNDkyCiUlRU9G';
  }
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #ccc;
}
.vue-pdf-embed>div {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #555;
  color: #ddd;
}

.app-content {
  padding: 24px 16px;
}

.right {
  float: right;
}
</style>
