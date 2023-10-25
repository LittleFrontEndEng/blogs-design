<script setup>
import { getArticleDetail } from '@/api/article'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
const article = ref({
  title: '',
  content: '',
});
const author = ref({});
const route = useRoute();
onMounted(() => {
  getDetail();
})
const getDetail = async () => {
  const { articleId = null } = route.query;
  const result = await getArticleDetail(articleId)

  if (result. success) {
    article.value = result.article;
    author.value = result.article.author;
  }
}
</script>

<template>
  <div class="container">
    <h2>{{ article.title }}</h2>
    <el-divider />
    <div class="content">
      <div v-html="article.content"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 16px;
}
</style>
