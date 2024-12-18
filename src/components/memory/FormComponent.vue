<template>
  <div>
    <h1>FormComponent</h1>
    <v-btn @click="goToList">
      <v-icon>mdi-arrow-left</v-icon>
      목록돌아가기
    </v-btn>

    <v-sheet class="border1">
      <div ref="editorElement"></div>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import '@toast-ui/editor/dist/toastui-editor.css';
import Editor from '@toast-ui/editor';

const router = useRouter();
const content = ref('');
const editorElement = ref<HTMLElement | null>(null);
let editorInstance: Editor | null = null;

onMounted(() => {
  if (editorElement.value) {
    editorInstance = new Editor({
      el: editorElement.value,
      height: '500px',
      initialEditType: 'wysiwyg',
      previewStyle: 'vertical',
      toolbarItems: [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock']
      ]
    });

    editorInstance.on('change', () => {
      content.value = editorInstance?.getHTML() || '';
    });
  }
});

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.destroy();
  }
});

const goToList = () => {
  router.push({name:'memory-notes-main'});
};
</script>

<style scoped>
.border1{
  border: 1px solid black;
}
.border2{
  border: 1px solid red;
}
.border3{
  border: 1px solid blue;
}
.border4{
  border: 1px solid green;
}
</style>
