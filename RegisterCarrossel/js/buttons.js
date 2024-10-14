var control = {
    index : 0,

    select: function(){
        balloon.hide()

        switch(this.index){
            case 0:
                user.moveTo.center()
                pass.moveTo.right()
                conf.moveTo.right()
                prev.disable()
                break
            case 1:
                user.moveTo.left()
                pass.moveTo.center()
                conf.moveTo.center()
                prev.enable()
                break
            case 2:
                user.moveTo.left()
                pass.moveTo.left()
                conf.moveTo.left()
                prev.enable()
                break
        }
    }
};

var next = {
    element: document.getElementById("nextButton"),
    state  : false,
    onClick: function(){
        if (control.index < 3){
            control.index += 1
            control.select(control.index)
        }
    },

    enable : function(){
        this.element.disabled = false;
    },
    disable: function(){
        this.element.disabled = true;
    }
}

next.element.addEventListener("click", ()=>{
    next.onClick();
})

var prev = {
    element: document.getElementById("prevButton"),
    state  : false,
    onClick: function(){
        if (control.index > 0){
            control.index -= 1
            control.select(control.index)
        }
    },

    enable : function(){
        this.element.disabled = false;
    },
    disable: function(){
        this.element.disabled = true;
    }
}


prev.element.addEventListener("click", ()=>{
    prev.onClick();
})
