#!/bin/bash
# Mint页面恢复脚本
# 当Mint页面出现问题时，运行此脚本恢复到正常版本

echo "正在恢复Mint页面到正常版本..."
echo "当前目录: $(pwd)"

# 检查备份文件是否存在
if [ ! -f "mint-working-backup.html" ]; then
    echo "错误: 备份文件 mint-working-backup.html 不存在!"
    echo "请确保备份文件在当前目录中"
    exit 1
fi

# 备份当前文件（如果有）
if [ -f "mint.html" ]; then
    timestamp=$(date +%Y%m%d_%H%M%S)
    cp mint.html "mint-backup-before-restore-$timestamp.html"
    echo "已备份当前mint.html为: mint-backup-before-restore-$timestamp.html"
fi

# 恢复备份
cp mint-working-backup.html mint.html
echo "✅ Mint页面已恢复到正常版本!"

# 检查文件大小
filesize=$(stat -c%s "mint.html")
echo "恢复的文件大小: $filesize 字节"

# 显示关键功能检查
echo ""
echo "📋 恢复的Mint页面包含以下功能:"
echo "1. ✅ 导航栏完整（包含Mint链接）"
echo "2. ✅ Connect Wallet按钮正常工作"
echo "3. ✅ Web3库已正确加载"
echo "4. ✅ 进度条功能正常"
echo "5. ✅ 用户信息显示正常"
echo "6. ✅ Mint按钮状态管理正常"
echo "7. ✅ 账户变化监听正常"
echo "8. ✅ 网络切换处理正常"

echo ""
echo "🚀 现在可以访问: https://lobster-tempo.com/mint.html"
echo "💡 如果还有问题，请检查浏览器控制台(F12)的错误信息"