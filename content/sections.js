// 网站内容配置：板块与文章清单
// 扩容方式：加板块 = 在 SECTIONS 里加一段；加文章 = 在对应板块的 articles 里加一行。
// 字段：id title subtitle tag visibility
//       articles: [{slug, title, date(提交时间), tag(关键字), icon(图标key), desc(简介)}]
window.SECTIONS = [
  {
    id: 'ai',
    title: 'AI 札记',
    subtitle: 'AI 与技术教学的点滴沉淀，未必专业，重在使用。',
    tag: '公开',
    visibility: 'public',
    articles: [
      { slug: 'ai-design',     title: 'AI 工具策划设计指南',   date: '2026.07', tag: '指南', icon: 'ai-design',     desc: '梳理策划、设计环节里能落地的 AI 工具与用法，附实操路径。' },
      { slug: 'ai-agent',      title: 'AI-Agent 教学指南',    date: '2026.07', tag: '教学', icon: 'ai-agent',      desc: '面向零基础，讲清智能体的概念、搭建与教学示范。' },
      { slug: 'planning-ai',   title: '规划设计 AI 一页纸', date: '2026.06', tag: '笔记', icon: 'planning-ai',   desc: '规划设计业务里的 AI 技术要点，一页速览。' },
      { slug: 'coding',        title: '编程思维速成',      date: '2026.07', tag: '教学', icon: 'coding',        desc: '用最少的概念建立编程思维，适合入门与教学。' }
    ]
  },
  {
    id: 'work',
    title: '工作存档',
    subtitle: '需提交保存的城市规划成果，留档备查。',
    tag: '公开',
    visibility: 'public',
    articles: [
      { slug: 'city-health',   title: '城市体检 AI 生成指南',     date: '2026.07', tag: '指南', icon: 'city-health',   desc: '从框架到成稿，用 AI 高效产出城市体检报告。' },
      { slug: 'special-plan',  title: '城市更新专项规划 AI 编制指南',     date: '2026.07', tag: '指南', icon: 'special-plan',  desc: '专项规划编制全流程的 AI 辅助方法与模板。' },
      { slug: 'fund-apply',    title: '城市更新资金申报查询手册',        date: '2026.07', tag: '手册', icon: 'fund-apply',    desc: '资金申报口径与查询要点，便于随时备查。' },
      { slug: 'district-plan', title: '城市更新片区策划 AI 指南',       date: '2026.06', tag: '指南', icon: 'district-plan', desc: '片区策划报告的 AI 生成思路、结构与范例。' },
      { slug: '原拆原建',       title: '原拆原建：城市更新的第三条路径', date: '2026.07', tag: '研究', icon: 'yuanchai',     desc: '政策演进、实践模式与市县推进的城市更新研究。' }
    ]
  },
  {
    id: 'kids',
    title: '给孩子',
    subtitle: '为娃准备的内容，可分享链接。',
    tag: '公开',
    visibility: 'public',
    articles: [
      { slug: 'freshman',        title: '新生暑假指南',      date: '2026.07', tag: '指南', icon: 'freshman',        desc: '写给准大一新生的暑期安排与入学准备建议。' },
      { slug: 'yangziyu-summer', title: '杨子禺暑假计划表',   date: '2026.07', tag: '手作', icon: 'yangziyu-summer', desc: '为杨子禺定制的暑期学习安排与课程排期。' },
      { slug: 'food-drug-env',   title: '食药环侦查 AI 应用指南',   date: '2026.07', tag: '指南', icon: 'food-drug-env',   desc: '把 AI 用到食药环场景，给孩子讲清可复用的思路与模板。' },
      { slug: 'birthday-card',   title: '贺卡',               date: '2026.07', tag: '贺卡', icon: 'birthday-card',   desc: '可分享的电子贺卡，点开即见。' },
      { slug: 'birthday-game',   title: '休闲小游戏',         date: '2026.07', tag: '游戏', icon: 'birthday-game',   desc: '为孩子准备的小游戏，轻松一刻。' },
      { slug: 'prime-hunter',    title: '质数小游戏',         date: '2026.07', tag: '游戏', icon: 'prime-hunter',    desc: '在网格中找出质数，练眼力也练数感。' },
      { slug: 'daily-todo',      title: 'todolist',           date: '2026.07', tag: '自用', icon: 'daily-todo',     desc: '每日待办与节奏管理清单。' },
      { slug: 'summer-reading',  title: '字里行间 · 消暑纳凉（美文读书）', date: '2026.07', tag: '美文', icon: 'summer-reading', desc: '14 期消暑美文，配朗读音频，给孩子的一方清凉书房。' }
    ]
  },
  {
    id: 'private',
    title: '私人手记',
    subtitle: '不愿示人的字，仅直链可达。',
    tag: '仅直链',
    visibility: 'private',
    articles: [
      { slug: 'shanxi-travel', title: '山西旅行计划', date: '2026.07', tag: '游记', icon: 'shanxi-travel', desc: '一家四口的五台山还愿之旅，含行程与花销。' }
    ]
  },
  {
    id: 'policy',
    title: '政策周报',
    subtitle: '城市建设与更新领域的政策动态与解读，按周归档。',
    tag: '公开',
    visibility: 'public',
    articles: [
      { slug: '2026-07-27', title: '城建政策周报 · 2026-07-27', date: '2026.07.27', tag: '周报', icon: 'policy', desc: '本周城建政策梳理与要点研判。' },
      { slug: '2026-08-03', title: '城建政策周报 · 2026-08-03', date: '2026.08.03', tag: '周报', icon: 'policy', desc: '本周城建政策梳理与要点研判。' },
      { slug: '2026-08-10', title: '城建政策周报 · 2026-08-10', date: '2026.08.10', tag: '周报', icon: 'policy', desc: '本周城建政策梳理与要点研判。' },
      { slug: '深色版',       title: '城建政策周报 · 深色版', date: '2026.08', tag: '周报', icon: 'policy-dark', desc: '深色统一样式的城建政策梳理与研判。' }
    ]
  },
  {
    id: 'wechat',
    title: '微信公众号',
    subtitle: '已发布的公众号文章归档，便于随时取用。',
    tag: '公开',
    visibility: 'public',
    articles: [
      { slug: '开学季', title: '大学开学季：父母说1500够，孩子说3000不够', date: '2026.08', tag: '公众号', icon: 'wechat', desc: '生活费之争背后的代际认知差异，一篇写给父母也写给孩子的话。' },
      { slug: '长鑫',   title: '长鑫引爆万亿浮盈：政府股权投资的逻辑与误区', date: '2026.08', tag: '公众号', icon: 'changxin', desc: '从长鑫案例拆解政府股权投资的底层逻辑与常见误读。' }
    ]
  }
];
