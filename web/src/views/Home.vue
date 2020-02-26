<template>
  <div>
    <swiper>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/b9905b35bb0afa9050d9ddbe04d82d29.jpeg"
          alt=""
        />
      </swiper-slide>
    </swiper>
    <div class="nav-icons bg-white mt-3 text-center pt-3">
      <div class="d-flex flex-wrap ">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-story"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex ai-center jc-center">
        <i class="sprite sprite-arrow mr-1"></i><span>收起</span>
      </div>
    </div>

    <!--end of nav icons -->

    <!-- <m-card icon="menu" title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span>|</span>
              <span>夏日新版本上线</span>
              <span>06/02</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>
    <m-card icon="menu" title="英雄列表">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span>|</span>
              <span>夏日新版本上线</span>
              <span>06/02</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card> -->

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(item, i) in category.newsList" :key="i">
          <span>{{ item.categoryName }}</span>
          <span>|</span>
          <span>{{ item.title }}</span>
          <span>{{ item.date }}</span>
        </div>
      </template>
    </m-list-card>
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(item, i) in category.newsList" :key="i">
          <span>{{ item.categoryName }}</span>
          <span>|</span>
          <span>{{ item.title }}</span>
          <span>{{ item.date }}</span>
        </div>
      </template>
    </m-list-card>
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(item, i) in category.newsList" :key="i">
          <span>{{ item.categoryName }}</span>
          <span>|</span>
          <span>{{ item.title }}</span>
          <span>{{ item.date }}</span>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "公告",
            title: "6月2日全服不停机更新公告",
            date: "06/01"
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "新闻",
            title: "6月2日全服不停机更新公告",
            date: "06/01"
          }))
        },
        {
          name: "公告",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "公告",
            title: "6月2日全服不停机更新公告",
            date: "06/01"
          }))
        },
        {
          name: "活动",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "公告",
            title: "6月2日全服不停机更新公告",
            date: "06/01"
          }))
        },
        {
          name: "赛事",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: "公告",
            title: "6月2日全服不停机更新公告",
            date: "06/01"
          }))
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.nav-icons {
  .nav-item {
    width: 25%;
    border-left: 1px solid #333333;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>
