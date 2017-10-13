Express-build
===================
a simple application imitating the impulse interface

### 基础
1. 入口: loading, 方式: get
2. 示例参数: mcode=a1b2c3d4; opid=b1n2m3z2x2c3v4b5n5; customerclien=weixin

### 要求 
1. 需要将参数隐藏.
2. 存储opid会员卡号, 用数据库存储会员资料.(购买记录 , 金额, 余额, 会员名, 会员来源, 会员卡号.)
3. 登录后的界面(也即展示给用户的界面) : 模仿现有的脉冲应用(使用grid布局), 但不能直接复制.
4. url应看不到mcode, opid这些敏感信息.(mcode是机器使用的,opid是用户自己的)

只做微信即可!加油!

### 过程
1. 用户扫码进入网址后, 识别是使用什么扫码的,(支付宝,微信,普通应用扫码)
2. 进入相关的登录确认(支付包权限, 微信权限)
3. 登录微信账号后, 会被分配一个服务器ID(也即opid), 支付宝另说.
4. 数据路由数据库,同时加载显示页面.
