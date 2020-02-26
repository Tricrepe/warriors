<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}分类{{ id }}</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in categoryParents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      categoryParents: []
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`crud/categories/${this.id}`, this.model);
      } else {
        await this.$http.post("crud/categories", this.model);
      }

      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`crud/categories/${this.id}`);
      this.model = res.data;
    },
    async fetchCategoryParents() {
      const res = await this.$http.get(`crud/categories`);
      this.categoryParents = res.data;
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchCategoryParents();
  }
};
</script>
