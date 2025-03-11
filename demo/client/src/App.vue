<template>
  <div>
    <h2>上传图片进行 OCR 识别</h2>
    <input type="file" @change="handleFileChange" accept="image/*" />
    <button @click="uploadFile">开始识别</button>

    <div v-if="ocrResult">
      <h3>识别结果：</h3>
      <pre>{{ ocrResult }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      selectedFile: null,
      ocrResult: null
    };
  },
  methods: {
    handleFileChange(e) {
      this.selectedFile = e.target.files[0];
    },
    async uploadFile() {
      if (!this.selectedFile) {
        alert('请先选择图片');
        return;
      }
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      try {
        const res = await axios.post('http://localhost:3000/api/ocr', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
        this.ocrResult = res.data.data;
      } catch (err) {
        console.error(err);
        alert('OCR 识别失败');
      }
    }
  }
};
</script>
