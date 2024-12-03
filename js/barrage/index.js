let data = [
    {value:'爱你孤身走暗巷', time: 5, color : 'red', speed: 1, fontSize: 20},
    {value:'爱你不跪的模样', time: 10, color : 'blue', speed: 1, fontSize: 30},
    {value:'爱你dadadadada', time: 12}
]

let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $text = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')


//展示弹幕
class CanvasBarrage {
    constructor(canvas, video, options = {}) {
        if (!canvas || !video) return
        this.canvas = canvas
        this.video = video
        this.canvas.width = video.width
        this.canvas.height = video.height
        //创建画布
        this.ctx = canvas.getContext('2d')
        //设置默认参数
        let defOpts ={
            color: '#fff',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }
        Object.assign(this, defOpts, options)
        this.isPaused = true  //初始为暂停状态

        //读取所有的弹幕信息，将每一条弹幕将来的样式处理好
        this.barrages = this.data.map((item) => {
            return new Barrage(item, this)
        })
        //渲染所有的弹幕
        this.render()
    }

    render() {
        //往画布上绘制内容前，先清理画布
        this.clear()
        this.renderBarrage()
        if (!this.isPaused) {
            requestAnimationFrame(this.render().bind(this))  //在规定的时间到来会执行一遍
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    renderBarrage() {
        //读取到视频此时播放的时间
        let time = this.video.currentTime

        this.barrages.forEach(barrage => {
            if (!barrage.flag && time >= barrage.time) {
                
                //弹幕是否初始化过
                if (!barrage.isInit) {
                    barrage.init()
                    barrage.isInit = true
                }

                barrage.x -= barrage.speed
                barrage.render()

                //弹幕超出了画布左侧，则标记为已删除
                if (barrage.x < -barrage.width) {
                    barrage.flag = true
                }
            }
        })
    }

}

//初始化每一条弹幕对象
class Barrage {
    constructor(obj, ctx) {
      this.value = obj.value; // 弹幕的内容
      this.time = obj.time; // 弹幕的出现时间
      // 把obj和ctx都挂载到this上方便获取
      this.obj = obj
      this.context = ctx
    }
  
    // 初始化弹幕
    init() {
      // 如果数据里没有涉及到这4中参数，就直接取默认参数
      this.color = this.obj.color || this.context.color;
      this.speed = this.obj.speed || this.context.speed;
      this.opacity = this.obj.opacity || this.context.opacity;
      this.fontSize = this.obj.fontSize || this.context.fontSize;
  
      // 计算每一条弹幕的宽度
      let p = document.createElement('p')
      p.style.fontSize = this.fontSize + 'px'
      p.innerHTML = this.value
      document.body.appendChild(p)
  
      // 把p标签添加到body里，这样就可以拿到宽度
      // 设置弹幕的宽度
      this.width = p.clientWidth
      // 得到了弹幕的宽度后，就把p标签移除
      document.body.removeChild(p)
  
      // 设置弹幕出现的位置
      this.x = this.context.canvas.width
      this.y = this.context.canvas.height * Math.random()
  
      // 做一下超出范围的处理
      if (this.y < this.fontSize) {
        this.y = this.fontSize
      } else if (this.y > this.context.canvas.height - this.fontSize) {
        this.y = this.context.canvas.height - this.fontSize
      }
  
    }
  
    // 渲染每一条弹幕
    render() {
      // 设置画布文字的字体和字号
      this.context.ctx.font = `${this.fontSize}px Arial`
      // 设置一下画布的文字颜色
      this.context.ctx.fillStyle = this.color;
      // 绘制文字
      this.context.ctx.fillText(this.value, this.x, this.y)
    }
}

let canvasBarrage = new CanvasBarrage(canvas, video, {data});
video.addEventListener('play', () => {
    canvasBarrage.isPaused = false
    canvasBarrage.render() //所有弹幕开始渲染
})