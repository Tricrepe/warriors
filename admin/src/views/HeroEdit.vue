<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}英雄{{ id }}</h1>
    <el-form @submit.native.prevent="save">
      <el-tabs type="border-card" value="skills">
        <el-tab-pane label="基础信息">
          <el-form-item label="名称">
            <el-input v-model="model.name" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-form-item label="类型">
              <el-select v-model="model.categories" multiple>
                <el-option
                  v-for="item of categories"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="难度">
              <el-rate
                style="margin-top:0.6rem"
                :max="9"
                show-score
                v-model="model.scores.difficult"
              ></el-rate>
            </el-form-item>
            <el-form-item label="技能">
              <el-rate
                style="margin-top:0.6rem"
                :max="9"
                show-score
                v-model="model.scores.skills"
              ></el-rate>
            </el-form-item>
            <el-form-item label="攻击">
              <el-rate
                style="margin-top:0.6rem"
                :max="9"
                show-score
                v-model="model.scores.attack"
              ></el-rate>
            </el-form-item>
            <el-form-item label="生存">
              <el-rate
                style="margin-top:0.6rem"
                :max="9"
                show-score
                v-model="model.scores.survive"
              ></el-rate>
            </el-form-item>
            <el-form-item label="顺风出装">
              <el-select v-model="model.items1" multiple>
                <el-option
                  v-for="item of items"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="逆风出装">
              <el-select v-model="model.items2" multiple>
                <el-option
                  v-for="item of items"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="使用技巧">
              <el-input type="textarea" v-model="model.usageTips"></el-input>
            </el-form-item>
            <el-form-item label="对抗技巧">
              <el-input type="textarea" v-model="model.battleTips"></el-input>
            </el-form-item>
            <el-form-item label="团战思路">
              <el-input type="textarea" v-model="model.teamTips"></el-input>
            </el-form-item>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button type="text" @click="model.skills.push({})">
            <i class="el-icon-plus">添加技能</i></el-button
          >
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(skill, i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input v-model="skill.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :show-file-list="false"
                  :on-success="res => $set(skill, 'icon', res.url)"
                >
                  <img v-if="skill.icon" :src="skill.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input
                  v-model="skill.description"
                  type="textarea"
                ></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="skill.tips" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="danger"
                  size="small"
                  @click="model.skills.splice(i, 1)"
                  >删除</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-button style="margin-top:2rem" type="primary" native-type="submit"
        >保存</el-button
      >
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
      categories: [],
      items: [],
      model: {
        name: "",
        avatar: "",
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        }
      }
    };
  },
  methods: {
    afterUpload() {},
    async save() {
      if (this.id) {
        await this.$http.put(`crud/heros/${this.id}`, this.model);
      } else {
        await this.$http.post("crud/heros", this.model);
      }

      this.$router.push("/heros/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`crud/heros/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchCategories() {
      const res = await this.$http.get(`crud/categories`);
      this.categories = res.data;
    },
    async fetchItems() {
      const res = await this.$http.get(`crud/items`);
      this.items = res.data;
    }
  },
  created() {
    this.fetchItems();
    this.fetchCategories();
    this.id && this.fetch();
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: flex;
}
</style>
