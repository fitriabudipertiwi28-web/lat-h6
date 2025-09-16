const user = {
    nama : 'Budi',
    sayHi : function(){
        console.log(`Halo, nama saya ${this.nama}`);
        //Arrow function ini mewarisi 'this' dari 'sayHi'
        setTimeout(() =>{
            //Disini, 'this' tetap merujuk ke objek 'user'
            console.log(`Setelah 1 detik, nama saya${this.nama}`);
        }, 1000);
        }
    };
user.sayHi();
//