

  const PI2 = Math.PI * 2
  let random = (min, max) => Math.random() * (max - min + 1) + min | 0

  class Merica {
    constructor() {
      this.resize()

      this.fireworks = []
      this.counter = 0

    }
    resize() {
      this.width = canvas.width = window.innerWidth
      let center = this.width / 2 | 0
      this.spawnA = center - center / 4 | 0
      this.spawnB = center + center / 4 | 0

      this.height = canvas.height = window.innerHeight
      this.spawnC = this.height * .1
      this.spawnD = this.height * .5

    }
    onClick(evt) {
      let x = evt.clientX || evt.touches && evt.touches[0].pageX
      let y = evt.clientY || evt.touches && evt.touches[0].pageY

      let count = random(3, 5)
      for (let i = 0; i < count; i++) this.fireworks.push(new Firework(
        random(this.spawnA, this.spawnB),
        this.height,
        x,
        y,
        random(300, 400),
        random(30, 100)))

      this.counter = -30

    }
    update() {
      ctx.globalCompositeOperation = 'hard-light'
      ctx.fillStyle = 'rgba(20,20,20,0.15)'
      ctx.fillRect(0, 0, this.width, this.height)

      ctx.globalCompositeOperation = 'lighter'
      for (let firework of this.fireworks) firework.update()

      if (++this.counter === 15) {
        this.fireworks.push(new Firework(
          random(this.spawnA, this.spawnB),
          this.height,
          random(0, this.width),
          random(this.spawnC, this.spawnD),
          random(300, 450),
          random(30, 110)))
        this.counter = 0
      }

      if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter((firework) => !firework.dead)

    }
  }

  class Firework {
    constructor(x, y, targetX, targetY, shade, offsprings) {
      this.dead = false
      this.offsprings = offsprings

      this.x = x
      this.y = y
      this.targetX = targetX
      this.targetY = targetY

      this.shade = shade
      this.history = []
    }
    update() {
      if (this.dead) return;

      let xDiff = this.targetX - this.x
      let yDiff = this.targetY - this.y
      if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) {
        this.x += xDiff / 20
        this.y += yDiff / 20

        this.history.push({
          x: this.x,
          y: this.y
        })

        if (this.history.length > 20) this.history.shift()

      } else {
        if (this.offsprings && !this.madeChilds) {

          let start = this.offsprings / 2;
          for (let i = 0; i < start; i++) {
            let targetX = this.x + this.offsprings * Math.cos(PI2 * i / start) | 0
            let targetY = this.y + this.offsprings * Math.sin(PI2 * i / start) | 0

            usa.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

          }

        }
        this.madeChilds = true
        this.history.shift()
      }

      if (this.history.length === 0) this.dead = true
      else if (this.offsprings)
        for (let i = 0; this.history.length > i; i++) {
          let point = this.history[i]
          ctx.beginPath()
          ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
          ctx.arc(point.x, point.y, 1, 0, PI2, false)
          ctx.fill()
        }
      else {
        ctx.beginPath()
        ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
        ctx.arc(this.x, this.y, 1, 0, PI2, false)
        ctx.fill()
      }

    }
  }

  let canvas = document.getElementById('usa')
  let ctx = canvas.getContext('2d')

  let usa = new Merica
  window.onresize = () => usa.resize()
  document.onclick = (evt) => usa.onClick(evt)
  document.ontouchstart = (evt) => usa.onClick(evt)

  ;
  (function update() {
    requestAnimationFrame(update)
    usa.update()

  }())