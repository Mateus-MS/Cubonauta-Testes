var pass = {
    element : document.getElementById("passField"),
    erros   : new Map([
        [
            "tooShort", 
            `
            How bigger, the better! 😏 <br> 
            <u>At least 8 characters long</u>.
            `
        ],
        [
            "noSpecialCharacter", 
            `
            I know what is missing... <br> 
            something especial! 😍 <br>
            Try use some <u>especial character</u>.
            `
        ],
        [
            "noNumber", 
            `
            Numbers can be scarier 👻. <br>
            But here they just help to keep you more secure.
            `
        ],
        [
            "noCaptalized", 
            `
            Try use at least <u>capitalized letter</u>. 💸
            `
        ]
    ]),

    validate: function(data){
        if(data.length < 8){
            balloon.open(this.erros.get("tooShort"), this.getBalloonPosition());
            return false;
        }

        if(!/[!@#\$%\^\&*\)\(+=._-]+/.test(data)){
            balloon.open(this.erros.get("noSpecialCharacter"), this.getBalloonPosition());
            return false;
        }

        if(!/\d+/.test(data)){
            balloon.open(this.erros.get("noNumber"), this.getBalloonPosition());
            return false;
        }

        if(!/[A-Z]/.test(data)){
            balloon.open(this.erros.get("noCaptalized"), this.getBalloonPosition());
            return false;
        }


        if(conf.element.children[1].value !== "" && conf.element.children[1].value !== data){
            balloon.open(conf.erros.get("passChanged"), conf.getBalloonPosition());
            return false;   
        }


        return true;
    },

    getBalloonPosition: function(){
        return this.element.getBoundingClientRect().bottom + "px";
    },

    focus   : {
        in : function(){
            balloon.hide();
        },

        out: function(){
            let passTyped = pass.element.children[1].value;
            
            if(pass.validate(passTyped)){
                next.enable();
                conf.show()
                return;
            }
        }
    },

    moveTo  : {
        left  : function(){
            pass.element.classList.add("left")
            pass.element.classList.remove("right")
        },
        center: function(){
            pass.element.classList.remove("left")
            pass.element.classList.remove("right")
        },
        right : function(){
            pass.element.classList.remove("left")
            pass.element.classList.add("right")
        }
    }
}

function hidePass(input, icon){
    if(input.getAttribute("type") === "text"){
        input.setAttribute("type", "password")
        icon.classList.add("hidden")
    } else {
        input.setAttribute("type", "text")
        icon.classList.remove("hidden")
    }
}

pass.element.addEventListener("focusin",  ()=>{
    pass.focus.in();
})

pass.element.addEventListener("focusout", ()=>{
    pass.focus.out();
})

pass.element.children[1].value = ""