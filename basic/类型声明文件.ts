/**
 * 类型声明文件以.d.ts为结尾
*/         

/**
 * 1. 自定义的类型声明文件
 * 设置baseUrl和paths: {"*": ["types/*"]}
 */
/**
 * 2. 第三方引入的类型声明文件
1. 根据配置文件的paths查找自定义的类型声明文件，如果无，向下
2. 查找node_modules/XXX/package.json中types字段，如果无，向下
3. 查找node_modules/XXX/index.d.ts
4. 查找node_modules/@types/XXX/index.d.ts
 */