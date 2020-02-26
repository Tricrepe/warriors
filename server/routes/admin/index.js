module.exports = app => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true
  });
  const jwt = require("jsonwebtoken");
  const AdminUser = require("../../models/AdminUser");
  const assert = require("http-assert");
  //资源列表
  router.get("/", async (req, res) => {
    const queryOptions = {};
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent";
    }
    const items = await req.Model.find().setOptions(queryOptions);
    res.send(items);
  });

  // 创建资源
  router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model);
  });
  //资源详情
  router.get("/:id", async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model);
  });
  //更改资源
  router.put("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });
  //删除资源
  router.delete("/:id", async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true
    });
  });
  //登陆校验中间件
  const authMiddleware = require("../../middleware/auth");
  const resourceMiddleware = require("../../middleware/resource");

  app.use(
    "/admin/api/crud/:resource",
    authMiddleware(),
    resourceMiddleware(),
    router
  );
  const multer = require("multer");
  const upload = multer({ dest: __dirname + "/../../uploads" });
  app.post(
    "/admin/api/upload",
    authMiddleware(),
    upload.single("file"),
    async (req, res) => {
      const file = req.file;
      file.url = `http://localhost:3000/uploads/${file.filename}`;
      res.send(file);
    }
  );
  app.post("/admin/api/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await AdminUser.findOne({
      username
    }).select("+password");
    assert(user, 422, {
      message: "用户不存在，我就草了"
    });
    const isValid = require("bcryptjs").compareSync(password, user.password);
    assert(isValid, 422, {
      message: "密码错误，我就草了"
    });
    const token = jwt.sign(
      {
        id: user._id
      },
      app.get("secret")
    );
    res.send(token);
  });
  //错误处理

  app.use(async (err, req, res, next) => {
    // console.log(err);
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  });
};
