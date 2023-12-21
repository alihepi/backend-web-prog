var mongoose = require('mongoose');

var dbURLM = "mongodb+srv://ali:mekan32bul@mekanbul.slhd4ok.mongodb.net/?retryWrites=true&w=majority";
var dbURL = "mongodb://127.0.0.1:3000";

mongoose.connect(dbURL);

mongoose.connection.on("connected", function(){
    console.log(dbURL + " Adresine Bağlandı");
});

mongoose.connection.on("error", function(){
    console.log(dbURL + " Adresine Bağlantı Başarısız");
});

mongoose.connection.on("disconnected", function(){
    console.log(dbURL + " Adresi ile Bağlantı Kesildi");
});

//Ctrl+C kesmesiyle programı ve bağlantıyı sonlandırmak için
process.on("SIGINT", function(){
    console.log("Uygulama Kapatıldı");

    mongoose.connection.close();
    process.exit(0);
});

require("./venue");