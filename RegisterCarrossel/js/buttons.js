var control = {
    index : 0,

    select: function(){
        balloon.hide()

        switch(this.index){
            case 0:
                user.moveTo.center()
                pass.moveTo.right()
                conf.moveTo.right()
                question.moveTo.right()
                prev.disable()

                next.changeText("Next step");
                break
            case 1:
                user.moveTo.left()
                pass.moveTo.center()
                conf.moveTo.center()
                question.moveTo.right()
                prev.enable()

                next.changeText("Next step");
                break
            case 2:
                user.moveTo.left()
                pass.moveTo.left()
                conf.moveTo.left()
                question.moveTo.center()
                prev.enable()

                next.changeText("Register!");
                break
        }
    }
};

var next = {
    element: document.getElementById("nextButton"),
    state  : false,
    onClick: function(){
        if (control.index < 2){
            control.index += 1
            control.select(control.index)
        }
    },

    changeText(newText){
        this.element.innerText = newText;
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
