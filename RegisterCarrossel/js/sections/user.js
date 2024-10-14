var user = {
    element : document.getElementById("userField"),
    erros   : new Map([
        [
            "tooShort", 
            `
            I swear that is for your safety. ✨✨<br>
            Your username <u>shold be atleast 8 characters long</u>. 🤨
            `
        ],
        [
            "whiteSpace", 
            `
            I know this is anoying, but you <u>can't put white spaces</u>. 🏳️
            `
        ],
        [
            "alreadyRegistered", 
            `
            Oops, seems like you late. ⏰ <br>
            This <strong>user</strong> has <u>already been taken</u>.
            `
        ]
    ]),

    validate: function(data){
        if(data.length < 8){
            balloon.open(this.erros.get("tooShort"), this.getBalloonPosition());
            return false;
        }

        if(/ /.test(data)){
            balloon.open(this.erros.get("whiteSpace"), this.getBalloonPosition());
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
            let userTyped = user.element.children[1].value;
            
            if(user.validate(userTyped)){
                next.enable();
                return;
            }
        }
    },

    moveTo  : {
        left  : function(){
            user.element.classList.add("left")
            user.element.classList.remove("right")
        },
        center: function(){
            user.element.classList.remove("left")
            user.element.classList.remove("right")
        },
        right : function(){
            user.element.classList.remove("left")
            user.element.classList.add("right")
        }
    }
}

balloon.setHeightPosition(user.getBalloonPosition());

user.element.addEventListener("focusin",  ()=>{
    user.focus.in();
})

user.element.addEventListener("focusout", ()=>{
    user.focus.out();
})

user.element.children[1].value = ""