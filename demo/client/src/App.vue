<template>
  <div>
    <h2>上传图片进行 OCR 识别</h2>
    <input type="file" @change="handleFileChange" accept="image/*" />
    <button @click="uploadFile">开始识别</button>

    <!-- 题目展示卡片 -->
    <div class="question-card" v-if="formattedContent.length">
      <div class="question-header">识别到的题目</div>
      <div class="question-body">
        <p v-for="(line, index) in formattedContent" :key="index">
          <!-- 数学公式用 v-html 渲染，普通文本直接显示 -->
          <span v-if="containsMath(line)" v-html="renderMath(line)"></span>
          <span v-else>{{ line }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// 存储用户选中的图片
const selectedFile = ref(null)
// 存储 OCR 解析后的文本
const questionData = ref('')

/**
 * 解析 OCR 返回的 JSON 数据，按行拆分
 */
const formattedContent = computed(() => {
  if (!questionData.value) return []
  return questionData.value.split('\n').map(line => line.trim()).filter(line => line)
})

/**
 * 判断文本是否包含数学公式
 * - `$...$` 行内公式
 * - `$$...$$` 块级公式
 * - `\begin{array}...\end{array}` 表示矩阵或多行公式
 */
function containsMath(text) {
  return /\$.*?\$/g.test(text) || /\$\$.*?\$\$/g.test(text) || /\\begin{array}/.test(text)
}

/**
 * 渲染数学公式
 */
function renderMath(text) {
  if (!containsMath(text)) return text
  try {
    return katex.renderToString(text, {
      throwOnError: false,
      displayMode: text.includes('\\begin{array}') // 矩阵、多行方程必须使用 displayMode
    })
  } catch (err) {
    console.error('数学公式渲染失败:', err)
    return text
  }
}

function handleFileChange(e) {
  selectedFile.value = e.target.files[0]
}

async function uploadFile() {
  if (!selectedFile.value) {
    alert('请先选择图片')
    return
  }

  const formData = new FormData()
  formData.append('file', selectedFile.value)

  try {
    const res = await axios.post('http://localhost:3000/api/ocr', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    console.log('完整响应数据:', res.data)

    if (res.data.code === 200 && res.data.data && typeof res.data.data.Data === 'string') {
      const parsed = JSON.parse(res.data.data.Data)
      questionData.value = parsed.content || ''
    } else {
      alert('返回数据结构不符合预期')
    }
  } catch (err) {
    console.error(err)
    alert('OCR 识别失败')
  }
}
</script>

<style scoped>
.question-card {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  word-break: break-word;
  overflow-x: hidden;
}

.question-header {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 12px;
  color: #333;
}

.question-body {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: visible;
}
</style>
