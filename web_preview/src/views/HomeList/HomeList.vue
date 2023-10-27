<script setup>
import { getArticlesList } from '@/api/article'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
const currentRef = ref(1);
const pageSizeRef = ref(10);
const listContent = ref([]);
const router = useRouter();
onMounted(() => {
  getList();
})

const checkArticle = (articleId) => {
  router.push({ path: 'article', query: { articleId } })
}

const getList = async () => {
  const result = await getArticlesList({
    current: currentRef.value,
    pageSize: pageSizeRef.value,
  })

  if (result.success) {
    listContent.value = result.article;
  }
}
</script>

<template>
  <div class="container">
    <div class="list" v-for="item in listContent" :key="item.id">
      <div class="listItem" @click="checkArticle(item.id)">
        <div class="itemCover">
          <el-image style="width: 100px; height: 60px;" :src="item.cover" fit="fill" />
        </div>
        <div class="itemInfo">
          <div class="itemTitle">{{ item.title }}</div>
          <div class="itemSubInfo">
            <div class="itemBasicInfo">
              {{ item.updateTime }}
            </div>
            <div class="itemAuthor">{{ item.author.username }}</div>
          </div>
        </div>
      </div>
      <el-divider style="margin: 8px 0;"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  padding: 16px;
  // background-color: skyblue;

  .list {

    .listItem {
      background-color: #fff;
      height: 60px;
      display: flex;
      align-items: center;
      cursor: pointer;

      .itemCover {
        height: 60px;
        width: 100px;
        margin-right: 16px;
      }
    }
  }
}
</style>
