class pass{
    constructor (inp, btn){
        this.inp = document.getElementById('password');
        this.btn = document.getElementById('show')
    }
    show(){
        switch (canISeeIt) {
            case true:
                this.inp.type = "text";

                canISeeIt = false;
                break;
        
            case false:
                this.inp.type = "password";

                canISeeIt = true;
                break;
        }
    }
}

class login{
    constructor (btn, close, alert, failed, email, passInp){
        this.alert = document.getElementById('alert');
        this.failed = document.getElementById('failed')
        
        this.close = document.getElementById('close');
        this.close2 = document.getElementById('close2');
        this.btn = document.getElementById('login');

        this.email = document.getElementById('email');
        this.passInp = document.getElementById('password');
    }

    loginFun(){
        if (this.passInp.value != '' && this.email.value != ''){
            this.alert.style.display = 'block';
        }
        else{
            this.failed.style.display = 'block';}
    }

    Close(){
        this.alert.style.display = 'none';
    }

    Close2(){
        this.failed.style.display = 'none';
    }
}

var canISeeIt = true;

const passwordObj = new pass(),
loginObj = new login();

passwordObj.btn.onclick = function (){passwordObj.show();};

loginObj.btn.onclick = function (){loginObj.loginFun();};
loginObj.close.onclick = function (){loginObj.Close();};
loginObj.close2.onclick = function (){loginObj.Close2();};