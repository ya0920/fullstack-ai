export default {
  mounted(el, binding) {
    el.style.cursor = 'move'
    el.style.position = 'relative'

    el.onmousedown = function(e) {
      let disx = e.pageX - el.offsetLeft
      let disy = e.pageY - el.offsetTop
      
      document.onmousemove = function(e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX = document.body.clientWidth - el.offsetWidth
        let maxY = document.body.clientHeight - el.offsetHeight
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }

      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }

    }
  }
}