class GestureController {

    constructor() {

        this.touchStartX = 0;
        this.touchStartY = 0;

        this.touchEndX = 0;
        this.touchEndY = 0;

        this.minimumDistance = 80;

    }

    touchStart(event) {

        const touch = event.touches[0];

        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;

    }

    touchMove(event) {

        const touch = event.touches[0];

        this.touchEndX = touch.clientX;
        this.touchEndY = touch.clientY;

    }

    touchEnd(callbacks = {}) {

        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {

            if (deltaX > this.minimumDistance) {

                callbacks.right?.();

            } else if (deltaX < -this.minimumDistance) {

                callbacks.left?.();

            }

        } else {

            if (deltaY > this.minimumDistance) {

                callbacks.down?.();

            } else if (deltaY < -this.minimumDistance) {

                callbacks.up?.();

            }

        }

    }

}

export default new GestureController();
