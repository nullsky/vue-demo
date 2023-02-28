const RouterModuleName = {
  Root: 'Root',
  HomePage: 'HomePage',
  Knowledge: 'Knowledge',
  About: 'About',
  Forbidden: 'Forbidden', // 403
  NotFound: 'Notfound', // 404
  Error: 'Error', // 500
  Fallback: 'Fallback', // 兜底

  // knowledge
  ToolOnlineJSEditor: 'online-js-editor',
  ToolOnlineJSONFormatter: 'online-json-formatter',
};

const RouterModules = {
  Root: {
    name: 'Root',
    title: '根路径',
  },
  HomePage: {
    name: 'HomePage',
    title: '首页'
  },
  Knowledge: {
    name: 'Knowledge',
    title: '知识库',
  },
  About: {
    name: 'About',
    title: '关于',
  },
  ToolOnlineJSEditor: {
    name: 'online-js-editor',
    title: '在线JS编辑器'
  },
  ToolOnlineJSONFormatter: {
    name: 'online-json-formatter',
    title: '在线JSON格式化',
  },
};

export { RouterModuleName, RouterModules };