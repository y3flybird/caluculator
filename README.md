# Calculator

一个使用 TDD 方法开发的计算器模块，完整的 CI/CD 流程演示。

[![CI/CD](https://github.com/y3flybird/caluculator/actions/workflows/ci.yml/badge.svg)](https://github.com/y3flybird/caluculator/actions/workflows/ci.yml)
[![Codecov](https://codecov.io/gh/y3flybird/caluculator/branch/main/graph/badge.svg)](https://codecov.io/gh/y3flybird/caluculator)

## 功能

- **加法** `add(a, b)` - 两数相加
- **减法** `subtract(a, b)` - 两数相减
- **乘法** `multiply(a, b)` - 两数相乘
- **除法** `divide(a, b)` - 两数相除（含除零检查）

## 安装

```bash
npm install
```

## 使用

```javascript
const { add, subtract, multiply, divide } = require('./src/calculator');

// 基本运算
add(5, 3);        // 8
subtract(10, 4);  // 6
multiply(6, 7);   // 42
divide(20, 4);    // 5

// 错误处理
divide(10, 0);    // Error: Division by zero is not allowed
```

## 测试

```bash
# 运行测试
npm test

# 查看覆盖率
npm run coverage
```

## CI/CD 流程

本项目采用 TDD + CI/CD 开发流程：

1. **RED** - 编写失败的测试
2. **GREEN** - 实现最小代码使测试通过
3. **REFACTOR** - 重构代码提高质量
4. **Coverage** - 覆盖率检查 (目标 ≥80%)

## 项目结构

```
├── src/
│   └── calculator.js      # 计算器实现
├── tests/
│   └── calculator.test.js # 测试用例 (30个)
├── .github/
│   └── workflows/
│       └── ci.yml         # CI/CD 配置
└── package.json
```

## License

ISC
