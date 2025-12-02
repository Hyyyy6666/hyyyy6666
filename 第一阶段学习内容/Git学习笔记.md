# Git学习笔记
## 记录人：黄语馨
## 内容摘要：通过网上学习资料及大数据模型学到的相关知识

### Git相关概念
1. 学习路径：[廖雪峰的官网](https://liaoxuefeng.com/books/git/introduction/index.html)
2. 学习内容：
简单了解Git起源，明白Git是一个分布式管理系统，可以免除手动管理系统的麻烦。

### Git安装、初始化和传文件（git-init-add-commit）
1. 学习路径：[廖雪峰的官网](https://liaoxuefeng.com/books/git/introduction/index.html)
2. 学习内容：学会用简单的Git指令对Git进行初始化和自报家门，并成功设置了一个初始化仓库。
  用于自报家门：
    'git config --global user.name'
    'git config --global user.email'
  用于创建仓库：
    'mkdir learngit'
    'cd learngit'
    'pwd'
  用于将文件传入仓库：
    'git add'
  用于文件提交说明：
    'git commit -m "wrote a readme file"'


### 时光穿梭机（git-stage）
1. 学习路径：[廖雪峰的官网](https://liaoxuefeng.com/books/git/introduction/index.html)
2. 学习内容：
  (1)学会用指令查看仓库状态和查看修改内容，最后再提交修改内容；理解**暂存区**概念
    用于查看仓库状态：
    'git status'
    用于查看修改内容：
    'git diff'
  (2)学会查看修改日志和回退
    用于查看修改日志：
    'git log'
    回退到某个版本，具体版本需标在hard后面：
    'git reset --hard'
  Ps：值得说明的是，回退到先前版本后，想要回到最新版本，需要先通过'git flog'来找回你的commit id。
  (3)工作区、暂存区概念：**暂存区相当于缓存了一个稳定可用的中间版本**(该文字摘自评论区)。我认为，对工作区文件进行修改保存后，修改内容会被暂时缓存到**stage**中，直到操作**commit**的指令之后，**stage**中的内容被提交至分支中，而自己本身内容记录则被搬空。
  (4)撤销修改操作：
    类型1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令'git checkout -- file'。
    类型2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令'git reset HEAD';第二步用命令'git checkout -- file'。
  (5)删除文件：
    使用指令'git rm'。
3. 注意点：要注意每一条git命令的语句中的**空格**，我曾在初始化阶段将-前的空格漏掉，多次弹出指令不存在的提示语句，最后才通过百度得知空格的存在与否十分重要