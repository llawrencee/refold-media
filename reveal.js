class ImageReveal {
    constructor(element_container, element_mask) {
        this.container = element_container
        this.mask = element_mask
        this.state = {
            clicked: false
        }
        this.listeners = {
            mousemove: e => {
                this.mask.style.opacity = 1
                const rect = this.container.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top

                this.mask.style.setProperty("--_x", `${x}px`)
                this.mask.style.setProperty("--_y", `${y}px`)
            },
            mouseclick: e => {
                if (!this.state.clicked) {
                    this.mask.style.transition = "clip-path 900ms ease-in-out"
                    this.mask.style.setProperty("--_radius", "150%")
                    this.state.clicked = true
                }
                else {
                    this.mask.style.setProperty("--_radius", "25%")
                    setTimeout(() => {
                        this.mask.style.transition = ""
                    }, 900)
                    this.state.clicked = false
                }
            },
            mouseout: e => {
                if (!this.state.clicked) {
                    this.mask.style.opacity = 0
                }
            }
        }

        this.container.onmousemove = e => this.listeners.mousemove(e)
        this.container.onmouseout = e => this.listeners.mouseout(e)
        this.container.onclick = e => this.listeners.mouseclick(e)
    }
}