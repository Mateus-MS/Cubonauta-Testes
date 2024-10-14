var conf = {
    element : document.getElementById("confField"),
    erros   : new Map([
        [
            "noMatch", 
            `
            So strange... your user isn't dori and you already forgot your pass? 🤔
            `
        ],
        [
            "passChanged", 
            `
            You changed your password. but did'nt changed the confirmation.
            `
        ]
    ]),

    validate: function(data){
        if(data !== pass.element.children[1].value){
            balloon.open(this.erros.get("noMatch"), this.getBalloonPosition());
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
            let passTyped = conf.element.children[1].value;
            
            if(conf.validate(passTyped)){
                next.enable();
                return;
            }
        }
    },

    moveTo  : {
        left  : function(){
            conf.element.classList.add("left")
            conf.element.classList.remove("right")
        },
        center: function(){
            conf.element.classList.remove("left")
            conf.element.classList.remove("right")
        },
        right : function(){
            conf.element.classList.remove("left")
            conf.element.classList.add("right")
        }
    },

    show: function(){
        this.element.classList.remove("hidden")
    },
    hide: function(){
        this.element.classList.add("hidden")
    }
}

conf.element.addEventListener("focusin",  ()=>{
    conf.focus.in();
})

conf.element.addEventListener("focusout", ()=>{
    conf.focus.out();
})

conf.element.children[1].value = ""