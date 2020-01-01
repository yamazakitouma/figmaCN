var data = [
  ['Back to Files', '回到文件'],
  ['File', '文件'],
  ['Edit', '编辑'],
  ['View', '视图'],
  ['Object', '对象'],
  ['Vector', '矢量'],
  ['Text', '文本'],
  ['Arrange', '排列'],
  ['Plugins', '插件'],
  ['Integrations', '集成'],
  ['Preferences', '偏好设置'],
  ['Libraries', '库'],
  ['Open in Desktop App', '打开桌面应用'],
  ['Help and Account', '帮助和账户'],
  //////////// File //////////////////
  ['New', '新建'],
  [`New from Sketch File...`, '从 Sketch 文件新建'],
  ['Place Image', '替换图片'],
  [`Save as .fig...`, '另存为 .fig 文件'],
  [`Save to Version History...`, '保存至历史版本'],
  ['Show Version History', '查看历史版本'],
  [`Export...`, '导出'],
  [`Export Frames to PDF...`, '导出框架为 PDF'],
  //////////// Edit //////////////////
  [`Undo`, '撤销'],
  [`Redo`, '恢复'],
  [`Copy as`, '复制为'],
  [`Copy as Text`, '复制为文本'],
  [`Copy as CSS`, '复制为 CSS'],
  [`Copy as SVG`, '复制为 SVG'],
  [`Paste Over Selection`, '粘贴至选中位置'],
  [`Duplicate`, '复制为副本'],
  [`Delete`, '删除'],
  [`Set Default Properties`, '设置默认属性'],
  [`Copy Properties`, '复制属性'],
  [`Paste Properties`, '粘贴属性'],
  [`Pick Color`, '选择颜色'],
  [`Select All`, '全选'],
  [`Select None`, '取消选择'],
  [`Select Inverse`, '反选'],
  [`Select All with Same Properties`, '选择全部相同属性'],
  [`Select All with Same Fill`, '选择全部相同填充颜色'],
  [`Select All with Same Stroke`, '选择全部相同边框'],
  [`Select All with Same Effect`, '选择全部相同效果'],
  [`Select All with Same Text Properties`, '选择全部相同文本属性'],
  [`Select All with Same Font`, '选择全部相同字体'],
  [`Select All with Same Instance`, '选择全部相同组件实例'],
  //////////// View //////////////////
  [`Pixel Grid`, '像素网格'],
  [`Layout Grids`, '布局网格'],
  [`Mask Outlines`, '蒙版轮廓'],
  [`Frame Outlines`, '框架轮廓'],
  [`Resource Use`, '资源使用'],
  [`Rulers`, '标尺'],
  [`Outlines`, '轮廓'],
  [`Show/Hide UI`, '显示/隐藏界面'],
  [`Layers Panel`, '图层面板'],
  [`Show Multiplayer Cursors`, '显示多用户鼠标指针'],
  [`Pixel Preview`, '像素预览'],
  [`Zoom In`, '放大'],
  [`Zoom Out`, '缩小'],
  [`Zoom to 100%`, '缩放至 100%'],
  [`Zoom to Fit`, '缩放至适合大小'],
  [`Zoom to Selection`, '缩放至选中范围'],
  [`Previous Page`, '上一页'],
  [`Next Page`, '下一页'],
  [`Zoom to Previous Frame`, '缩放至上一个框架'],
  [`Zoom to Next Frame`, '缩放至下一个框架'],
  [`Find Previous Frame`, '查看上一个框架'],
  [`Find Next Frame`, '查看下一个框架'],
  //////////// Object //////////////////
  [`Group Selection`, '编组'],
  [`Frame Selection`, '添加框架'],
  [`Ungroup Selection`, '取消编组'],
  [`Use as Mask`, '设为蒙版'],
  [`Restore Default Thumbnail`, '恢复默认缩略图'],
  [`Add Auto Layout`, '增加自动布局'],
  [`Create Component`, '创建组件'],
  [`Reset Instance`, '重置组件实例'],
  [`Detach Instance`, '分离组件实例'],
  [`Master Component`, '主组件'],
  [`Go to Master Component`, '转到主组件'],
  [`Push Overrides to Master`, '覆盖主组件'],
  [`Restore Master Component`, '恢复主组件'],
  [`Bring to Front`, '到最前'],
  [`Bring Forward`, '向前'],
  [`Send Backward`, '向后'],
  [`Send to Back`, '到最后'],
  [`Flip Horizontal`, '水平翻转'],
  [`Flip Vertical`, '垂直翻转'],
  [`Rotate 180B0`, '旋转 180°'],
  ['Rotate 90B0 Left', '向左旋转 90°'],
  [`Rotate 90° Right`, '向右旋转 90°'],
  [`Flatten Selection`, '拼合选中项'],
  [`Outline Stroke`, '边框轮廓化'],
  [`Boolean Groups`, '布尔组合'],
  [`Union Selection`, '连集'],
  [`Subtract Selection`, '减去顶层'],
  [`Intersect Selection`, '交集'],
  [`Exclude Selection`, '差集'],
  [`Rasterize Selection`, '像素化'],
  [`Collapse Layers`, '折叠图层'],
  [`Show/Hide Selection`, '显示/隐藏'],
  [`Lock/Unlock Selection`, '锁定/解锁'],
  [`Hide Other Layers`, '隐藏其余图层'],
  [`Remove Fill`, '移除填充'],
  [`Remove Stroke`, '移除边框'],
  [`Swap Fill and Stroke`, '互换填充和边框'],
  //////////// Vector //////////////////
  [`Join Selection`, '连接'],
  [`Smooth Join Selection`, '平滑连接'],
  [`Delete and Heal Selection`, '删除和修复'],
  //////////// Text //////////////////
  [`Bold`, '加粗'],
  [`Italic`, '斜体'],
  [`Underline`, '下划线'],
  [`Strikethrough`, '删除线'],
  [`Original Case`, '恢复初始状态'],
  [`Upper Case`, '大写'],
  [`Lower Case`, '小写'],
  [`Increase Font Size`, '增大字号'],
  [`Decrease Font Size`, '缩小字号'],
  [`Increase Line Height`, '增加行高'],
  [`Decrease Line Height`, '减少行高'],
  [`Increase Letter Spacing`, '增大字间距'],
  [`Decrease Letter Spacing`, '减少行高'],
  [`Align`, '对齐'],
  [`Text Align Left`, '左对齐'],
  [`Text Align Center`, '居中对齐'],
  [`Text Align Right`, '右对齐'],
  [`Text Align Justified`, '两端对齐'],
  [`Text Align Top`, '顶层'],
  [`Text Align Middle`, '居中'],
  [`Text Align Bottom`, '底部'],
  //////////// Arrange //////////////////
  [`Round to Pixel`, '像素整数化'],
  [`Align Left`, '左对齐'],
  [`Align Horizontal Centers`, '水平居中'],
  [`Align Right`, '右对齐'],
  [`Align Top`, '顶部对齐'],
  [`Align Vertical Centers`, '垂直居中'],
  [`Align Bottom`, '底部对齐'],
  [`Tidy Up`, '整理'],
  [`Pack Horizontal`, '水平贴合'],
  [`Pack Vertical`, '垂直贴合'],
  [`Distribute Horizontal Spacing`, '水平均分'],
  [`Distribute Vertical Spacing`, '垂直均分'],
  [`Distribute Left`, '向左均分'],
  [`Distribute Horizontal Centers`, '向水平中心均分'],
  [`Distribute Right`, '向右均分'],
  [`Distribute Top`, '向上均分'],
  [`Distribute Vertical Centers`, '向垂直中心均分'],
  [`Distribute Bottom`, '向下均分'],
  //////////// Preferences //////////////////
  [`Snap to Geometry`, '对齐到几何'],
  [`Snap to Objects`, '对齐到对象'],
  [`Snap to Pixel Grid`, '对齐到像素'],
  [`Keep Tool Selected after Use`, '使用后保持工具选择'],
  [`Highlight Layers on Hover`, '突出显示悬停图层'],
  [`Rename Duplicated Layers`, '重命名副本图层'],
  [`Show Dimensions on Objects`, '在对象上显示尺寸'],
  [`Hide Canvas UI During Changes`, '在更改期间隐藏画布 UI'],
  [`Keyboard Zooms into Selection`, '键盘控制缩放'],
  [`Substitute Smart Quotes`, '智能引号替换'],
  [`Show Google Fonts`, '显示谷歌字体'],
  [`Flip Objects While Resizing`, '调整大小时翻转对象'],
  [`Invert Zoom Direction`, '反转缩放方向'],
  [`Use Number Keys for Opacity`, '使用数字控制透明度'],
  [`Open Links in Desktop App`, '从桌面应用打开'],
  [`Nudge Amount...`, '单位微调'],
  //////////// Help and Account //////////////////
  [`Help Page`, '帮助页面'],
  [`Keyboard Shortcuts`, '键盘快捷键'],
  [`Community Forum`, '论坛'],
  [`Video Tutorials`, '视频教程'],
  [`Release Notes`, '版本记录'],
  [`Open Font Settings`, '打开字体设置'],
  [`Legal Summary`, '法律文件'],
  [`Account Settings`, '账号设置'],
  [`Log Out`, '退出'],
  //////////// right-click panel //////////////////
  [`Copy/Paste`, '复制/粘贴'],
  [`Search...`, '搜索'],
  [`Select Layer`, '选择图层'],
  [`Ungroup`, '解组'],
  [`Flatten`, '拼合'],
  [`Show/Hide`, '显示/隐藏'],
  [`Lock/Unlock`, '锁定/解锁'],
  [`Move to Page`, '移到页面'],
  [`Copy Link`, '复制链接'],
  [`Set as Thumbnail`, '设置为缩略图'],
  [`Rename`, '重命名'],
]

var actionOptionData = [
  [`Move`, '移动'],
  [`Scale`, '缩放'],
  [`Frame`, '框架'],
  [`Slice`, '切片'],
  [`Rectangle`, '矩形'],
  [`Line`, '线'],
  [`Arrow`, '箭头'],
  [`Ellipse`, '椭圆'],
  [`Polygon`, '多边形'],
  [`Star`, '星心'],
  [`Pen`, '钢笔'],
  [`Pencil`, '铅笔'],
]


var panelTitles = [
  ['Background', '背景'],
  ['Local Styles', '本地样式'],
  ['Stroke', '边框'],
  ['Effects', '效果'],
  ['Constraints', '约束'],
  ['Export', '导出'],
  ['Fill', '填充'],
  ['Layer', '图层'],
  ['Auto Layout', '自动布局'],
  ['Layout Grid', '布局网格'],
  ['Instance', '组件实例'],
]

var panelTabs = [
  ['Layers', '图层'],
  ['Assets', '资源'],
  ['design', '设计'],
  ['prototype', '原型'],
  ['code', '代码'],
]

var selectOptionTextData = [
  //////////// Overlay mode //////////////////
  ['Pass Through', '穿透'],
  ['Normal', '正常'],
  ['Darken', '变暗'],
  ['Multiply', '正片叠底'],
  ['Color Burn', '颜色加深'],
  ['Lighten', '变亮'],
  ['Screen', '滤色'],
  ['Color Dodge', '颜色减淡'],
  ['Overlay', '叠加'],
  ['Soft Light', '柔光'],
  ['Hard Light', '强光'],
  ['Difference', '差集'],
  ['Exclusion', '排除'],
  ['Hue', '色相'],
  ['Saturation', '饱和度'],
  ['Color', '颜色'],
  ['Luminosity', '明度'],
  //////////// selectOptionInputText //////////////////
  ['Left', '左侧'],
  ['Right', '右侧'],
  ['Left & Right', '左侧 & 右侧'],
  ['Center', '居中'],
  ['Top', '顶部'],
  ['Bottom', '底部'],
  ['Top & Bottom', '顶部 & 底部'],
  //////////// Stroke //////////////////
  ['Inside', '内部'],
  ['Outside', '外部'],
  //////////// Effects //////////////////
  ['Inner Shadow', '内阴影'],
  ['Drop Shadow', '阴影'],
  ['Layer Blur', '图层模糊'],
  ['Background Blur', '背景模糊'],
  //////////// Fill Panel //////////////////
  ['Solid', '纯色'],
  ['Linear', '线性渐变'],
  ['Radial', '径向渐变'],
  ['Angular', '角度渐变'],
  ['Diamond', '菱形渐变'],
  ['Image', '图像'],
  ['Exposure', '曝光'],
  ['Contrast', '对比度'],
  ['Saturation', '饱和度'],
  ['Temperature', '白平衡'],
  ['Tint', '着色'],
  ['Highlights', '高光'],
  ['Shadows', '阴影'],
  ['Fit', '适合'],
  ['Crop', '裁切'],
  ['Tile', '平铺'],
  ////////////autolayout //////////////////
  ['Horizontal', '水平'],
  ['Vertical', '垂直'],
  ////////////grid //////////////////
  ['Grid', '网格'],
  ['Columns', '列'],
  ['Rows', '行'],
  ['Stretch', '伸展'],

]

var checkboxLabelData = [
  ['Fix position when scrolling', '滚动时保持固定'],
  ['Clip content', '剪切内容'],
  ['Contents Only', '仅内容'],
  ['Show in exports', '在导出中显示'],
]

var toolBarDropDownData = [
  ['Publish Styles & Components', '发布样式和组件'],
  [`Move to Project...`, '移动到项目...'],
  [`Show in Files`, '在文件中显示'],
  [`Open`, '打开'],
  [`Open in New Tab`, '从新标签打开'],
  [`Share`, '分享'],
  [`Show in Project`, '在项目中显示'],
  [`Remove from Recent`, '从最近中移除'],
  // [`can edit`, '可以编辑'],
  // [`can view`, '可以浏览'],
]

var inputPlaceholderData = [
  [`Invite someone...`, '邀请某人'],
  [`Suffix`, '后缀'],
  [`Search`, '搜索'],
]

var allLabelData = [
  [`Size`, '尺寸'],
  [`Color`, '颜色'],
  [`Count`, '数量'],
  [`Type`, '类型'],
  [`Width`, '宽'],
  [`Height`, '高'],
  [`Margin`, '边距'],
  [`Gutter`, '间距'],
  [`Offset`, '偏置'],
]

var spanSidebarToolbarData = [
  [`Recent`, '最近'],
  [`Plugins`, '插件'],
  [`Drafts`, '草稿'],
  [`Recently viewed`, '最近浏览'],
  [`Deleted`, '已删除'],
  [`Add a project to your favorites to see it here.`, '将项目添加到收藏夹以在此处显示。'],
  [`New Team...`, '新团队...'],
]
