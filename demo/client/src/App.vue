<template>
  <div>
    <h2>上传图片进行 OCR 识别</h2>
    <input type="file" @change="handleFileChange" accept="image/*" />
    <button @click="uploadFile">开始识别</button>

    <!-- 卡片式展示 -->
    <div class="question-card" v-if="parsed.questionLines.length || parsed.optionLines.length || parsed.subtitleLines.length">
      <div class="question-header">识别到的题目</div>
      <div class="question-body">
        <!-- 题干部分 -->
        <div class="question-text" v-if="parsed.questionLines.length">
          <h3>题干</h3>
          <pre class="text-block">{{ parsed.questionLines.join('\n') }}</pre>
        </div>
        <!-- 选项部分 -->
        <div class="options" v-if="parsed.optionLines.length">
          <h3>选项</h3>
          <pre class="text-block">{{ parsed.optionLines.join('\n') }}</pre>
        </div>
        <!-- 小标题部分 -->
        <div class="subtitles" v-if="parsed.subtitleLines.length">
          <h3>小标题</h3>
          <pre class="text-block">{{ parsed.subtitleLines.join('\n') }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

// 存储用户选中的图片和 OCR 返回的原始文本
const selectedFile = ref(null)
const questionData = ref('')


const preprocessContent = (content) => {
  let modified = content
  modified = modified.replace(/([A-Z]\.)/g, '\n$1')      // 处理选项
  modified = modified.replace(/(\(\d+\))/g, '\n$1')       // 处理小标题
  return modified
}

const parseContent = (content) => {
  const modified = preprocessContent(content)
  const lines = modified.split('\n').map(l => l.trim()).filter(l => l !== '')
  
  return {
    questionLines: lines.filter(l => !/^([A-Z]\.|\(\d+\))/.test(l)),
    optionLines: lines.filter(l => /^[A-Z]\./.test(l)),
    subtitleLines: lines.filter(l => /^\(\d+\)/.test(l))
  }
}

const parsed = computed(() => {
  return content.value ? parseContent(content.value) : 
    { questionLines: [], optionLines: [], subtitleLines: [] }
})

// 修改原有的 formatOCRResult 方法
const formatOCRResult = (ocrData) => {
  if (!ocrData?.QuestionBlocks) return ''
  
  // 合并所有识别内容
  return ocrData.QuestionBlocks
    .map(block => block.Content)
    .join('\n')
}

/**
 * 预处理 OCR 文本，强制在选项或小标题前插入换行符
 * 如果 OCR 返回的内容没有换行，但包含 A. 或 (1) 等标识，则插入换行符。
 */
function preprocessContent(content) {
  let modified = content
  // 在选项标识前插入换行符：匹配大写字母后跟点（可能有空格）
  modified = modified.replace(/([A-Z]\.)/g, '\n$1')
  // 在小标题标识前插入换行符：匹配左括号+数字+右括号
  modified = modified.replace(/(\(\d+\))/g, '\n$1')
  return modified
}

/**
 * 将 OCR 返回的文本拆分为题干、选项和小标题
 */
function parseContent(content) {
  // 先预处理文本
  const modified = preprocessContent(content)
  // 按换行拆分；这里不过滤空行，以防有意保留
  const lines = modified.split('\n').map(l => l.trim()).filter(l => l !== '')
  const questionLines = []
  const optionLines = []
  const subtitleLines = []

  const optionRegex = /^[A-Z]\.\s*/  // 例如 "A. "、"B. "…
  const subtitleRegex = /^\(\d+\)/    // 例如 "(1)"、"(2)"…

  lines.forEach(line => {
    if (optionRegex.test(line)) {
      optionLines.push(line)
    } else if (subtitleRegex.test(line)) {
      subtitleLines.push(line)
    } else {
      questionLines.push(line)
    }
  })
  return { questionLines, optionLines, subtitleLines }
}

// 用 computed 包装解析后的内容
const parsed = computed(() => {
  if (!questionData.value) return { questionLines: [], optionLines: [], subtitleLines: [] }
  return parseContent(questionData.value)
})

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
      const parsedJson = JSON.parse(res.data.data.Data)
      // 假设 OCR 返回的 JSON 包含 content 字段
      questionData.value = parsedJson.content || ''
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
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  word-break: break-word;
  overflow-x: hidden; /* 防止水平滚动 */
}

.question-header {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 12px;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.question-body {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  white-space: pre-wrap; /* 保留换行 */
  word-wrap: break-word;
  overflow: visible;
}

.text-block {
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-bottom: 8px;
}
</style>
