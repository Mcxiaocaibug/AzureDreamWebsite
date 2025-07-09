# AzureDream Minecraft 服务器官网

[![Powered by DartNode](https://dartnode.com/branding/DN-Open-Source-sm.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")

**CDN acceleration and security protection for this project are sponsored by Tencent EdgeOne.**
**Just click on the image to visit EdgeOne**

[![Powered by EdgeOne](https://edgeone.ai/media/34fe3a45-492d-4ea4-ae5d-ea1087ca7b4b.png)](https://edgeone.ai/?from=github "Best Asian CDN, Edge, and Secure Solutions - Tencent EdgeOne")

这是一个现代化的 Minecraft 服务器官方网站，采用了最新的网页设计技术，包括动态着色器、毛玻璃效果和流畅的动画效果。

## 特点

- 响应式设计，适配所有设备
- 现代化 UI/UX 设计
- 动态 Shader 背景效果
- 毛玻璃效果和圆角设计
- 流畅的页面过渡动画
- 交互式卡片效果
- 多页面结构

## 技术栈

- HTML5
- CSS3 (使用现代特性如 backdrop-filter)
- JavaScript (原生)
- Three.js (用于 Shader 效果)
- Power Grotesk 字体

## 目录结构

```
AzureDream/
├── index.html          # 主页
├── about.html         # 服务器简介
├── join.html          # 加入方式
├── hall-of-fame.html  # 名人堂
├── staff.html         # 管理团队
├── css/
│   ├── style.css      # 全局样式
│   ├── nav.css        # 导航栏样式
│   ├── about.css      # 简介页样式
│   ├── join.css       # 加入页样式
│   ├── hall-of-fame.css # 名人堂页样式
│   └── staff.css      # 管理团队页样式
├── js/
│   ├── main.js        # 主要脚本
│   ├── shader.js      # Shader 效果
│   ├── hall-of-fame.js # 名人堂页面脚本
│   └── staff.js       # 管理团队页面脚本
└── images/            # 图片资源目录
    └── staff/         # 管理团队头像
```

## 部署说明

1. 克隆仓库：
   ```bash
   git clone https://github.com/Mcxiaocaibug/AzureDreamWebsite.git
   ```

2. 安装依赖：
   - 确保你的服务器支持 HTML5 和 JavaScript
   - 下载并引入 Three.js 库
   - 确保所有图片资源都已正确放置

3. 配置：
   - 修改 `js/main.js` 中的服务器地址
   - 更新管理团队信息
   - 添加实际的玩家信息

4. 部署到服务器：
   - 将所有文件上传到你的 Web 服务器
   - 确保文件权限正确设置
   - 配置服务器以支持 HTTPS（推荐）

## 自定义

### 修改颜色主题

在 `css/style.css` 中修改根变量：

```css
:root {
    --primary-color: #007AFF;
    --secondary-color: #5856D6;
    --accent-color: #64D2FF;
    --background-color: #000814;
    --text-color: #FFFFFF;
    --glass-background: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
}
```

### 修改 Shader 效果

在 `js/shader.js` 中修改 fragmentShader 代码来自定义背景效果。

### 添加新页面

1. 创建新的 HTML 文件
2. 在 `css/` 目录下创建对应的样式文件
3. 在 `js/` 目录下创建对应的脚本文件
4. 更新导航栏链接

## 维护

### 更新内容

- 定期更新玩家信息
- 更新服务器状态
- 添加新的服务器特性
- 更新管理团队信息

### 性能优化

- 压缩图片资源
- 使用 CDN 加速
- 启用浏览器缓存
- 定期检查并优化代码

## 贡献

欢迎提交 Pull Request 来改进网站。在提交之前，请确保：

1. 代码符合现有的代码风格
2. 所有更改都经过测试
3. 更新相关文档

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系：

- Email: your.email@example.com
- Discord: your_discord_server
- GitHub Issues
