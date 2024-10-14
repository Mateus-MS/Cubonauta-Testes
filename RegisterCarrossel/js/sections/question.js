var question = {
    element : document.getElementById("question"),

    moveTo  : {
        left  : function(){
            question.element.classList.add("left")
            question.element.classList.remove("right")
        },
        center: function(){
            question.element.classList.remove("left")
            question.element.classList.remove("right")
        },
        right : function(){
            question.element.classList.remove("left")
            question.element.classList.add("right")
        }
    },
}

// question.element.children[1].value = ""