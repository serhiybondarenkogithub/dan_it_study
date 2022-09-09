/**
 * Написати функціонал для тултипів
 * 
 * Налаштування:
 * - текст
 * - позиціонування (зверху, справа, знизу, зліва), яке за замовчуванням зверху
 * - можливості відображення (при наведенні чи при кліку), за замовчуванням при наведенні
 *  
 */

class Tooltip {
    constructor(targetSelector, text, placement, trigger = "hover") {
        this.targetSelector = targetSelector;
        this.text = text;
        this.placement = placement;
        this.trigger = trigger;

        this.tooltip = null;
        this.target = document.querySelector(targetSelector);
        this.isShow = false;
        this.isEnable = true;
        this.attachListener();
        this.render();
    }

    attachListener() {
        switch (this.trigger) {
            case "click":
                this.target.addEventListener("click", () => {
                    if(this.isShow) {
                        this.hide();
                    } else {
                        this.show();
                    }
                });
                break;
            
            case "focus":
                this.target.addEventListener("focus", (evt) => {
                    this.show();
                }, true);
                this.target.addEventListener("blur", () => {
                    this.hide();
                }, true);
                break;
                
            default:
                this.target.addEventListener("mouseover", () => {
                    this.show();
                });
                this.target.addEventListener("mouseout", () => {
                    this.hide();
                });
                break;
        }
    }

    render() {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        
        switch(this.placement) {
            case "bottom":
                tooltip.classList.add("tooltip-down");
                break;
        
            case "left":
                tooltip.classList.add("tooltip-left");
                break;
            
            case "right":
                tooltip.classList.add("tooltip-right");
                break;

            default:
                tooltip.classList.add("tooltip-up");

        }

        const tooltipText = document.createElement("p");
        tooltipText.className = "tooltip-content";
        tooltipText.innerHTML = this.text;
        tooltip.append(tooltipText);

        tooltip.style.display = "none";

        this.target.append(tooltip);

        this.tooltip = tooltip;
    }

    show() {
        if(this.isEnable) {
            this.tooltip.style.display = "block";
            this.isShow = true;
        }
    }

    hide() {
        this.tooltip.style.display = "none";
        this.isShow = false;
    }

    enable() {
        this.isEnable = true;
    }

    disable() {
        this.isEnable = false;
    }

    changeText(text) {
        this.remove();
        this.text = text;
        this.render();
    }

    changePlacement(placement) {
        this.remove();
        this.placement = placement;
        this.render();
    }

    remove() {
        this.tooltip.remove();
        this.isShow = false;
    }
}

const firstTooltip = new Tooltip('#btn-1', 'It\'s first button');
const secondTooltip = new Tooltip('#btn-2', 'It\'s second button', "right");
const thirdTooltip = new Tooltip('#btn-3', 'It\'s third button', "left");
const fourthTooltip = new Tooltip('#btn-4', 'It\'s fouth button', "left", "click");

const tooltips = [firstTooltip, secondTooltip, thirdTooltip, fourthTooltip];

document.querySelector("#show-first").addEventListener("click", () => {
    firstTooltip.show();
});
document.querySelector("#hide-first").addEventListener("click", () => {
    firstTooltip.hide();
});

document.querySelector("#disable-third").addEventListener("click", () => {
    thirdTooltip.disable();
});
document.querySelector("#enable-third").addEventListener("click", () => {
    thirdTooltip.enable();
});

document.querySelector("#disable-all").addEventListener("click", () => {
    tooltips.forEach(tooltip => {
        tooltip.disable();
    });
});
document.querySelector("#enable-all").addEventListener("click", () => {
    tooltips.forEach(tooltip => {
        tooltip.enable();
    });
});

//ADVANCED
const inputTooltip = new Tooltip('#input', 'It\'s input button', "bottom", "focus");

document.querySelector("#apply-text").addEventListener("click", () => {
    secondTooltip.changeText(document.querySelector("#text-input").value);
});

document.querySelector("#apply-align").addEventListener("click", () => {
    fourthTooltip.changePlacement(document.querySelector("#align-input").value);
});