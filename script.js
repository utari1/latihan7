function tampil() {
    let error = false;
    let bulan = ["januari","februari","maret","april","mei","juni",
    "juli","agustus","september","oktober","november","desember"]
    if(!error) {
        console.log(bulan.join("\n"));
    }
    else{
        console.log("bulan tidak tampil");
    }
}