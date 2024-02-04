//DOMContentLoaded: sayfanını tamamı yüklendiğinde
document.addEventListener("DOMContentLoaded", function (){

// elementlere erişim
let gorevEkleInput=document.querySelector("#gorevEkleİnput")
let ekleBtn=document.querySelector("#ekleBtn")
let tamamlananGorevler=document.querySelector("#tamamlananGorevler")
let devamEdenGorevler=document.querySelector("#devamEdenGorevler")
let depoSil=document.querySelector("#depoSil")

function gorevEkle(){
    let gorevMetin= gorevEkleInput.value.trim()    
    //trim sağdaki ve soldaki boşlukları temizler. Value görevEkleInput içindeki değeri alır.
    if(gorevMetin!==""){
        let gorevItem=gorevItemOlustur(gorevMetin) // gorevItemOlustur fonksiyonunu çalıştıracak.
        devamEdenGorevler.appendChild(gorevItem) // Devam Eden Görevlere Eklenecek
        gorevEkleInput.value=""
        depoyaKaydet()

    }else{
        alert("Görev Yazmadınız..")
    }
}

ekleBtn.addEventListener("click",gorevEkle) // Ekle butonu tıklama Olayı...

function gorevItemOlustur(metin){
    let li = document.createElement("li")
    li.className="list-group-item d-flex justify-content-between align-items-center gap-3" 

    let div=document.createElement("div") // görevlerin ve butonların yerleştirileceği yer.
    div.className="ml-2 mr-auto" // soldan 2 margin boşluk ve sağ margin otomatik ayarlar.
    div.textContent=metin

    let btnDiv=document.createElement("div") // tamamlandı düzenle ve sil butonlarının ekleneceği yer.
    btnDiv.className="btn-group"

    let tamamlandıBtn=document.createElement("button") // tamamlandı butonu oluşturur.
    tamamlandıBtn.className="btn btn-success btn-sm" 
    tamamlandıBtn.textContent="Tamamlandı"

    tamamlandıBtn.addEventListener("click", function() {
        li.classList.toggle("list-group-item-success") // tamamlandı butonuna ikinci tıklandığında 
        tamamlandıBtn.textContent=li.classList.contains("list-group-item-success") ? "Devam Edenlere Gönder" : "Tamamlandı"
        //contains : li elementi yazılan sınıf ismini içeriyorsa anlamında kullanılır.
        // ? anlamı ise : if ile aynı anlamdadır. contains sonucu true dönerse Devam edenlere gönder değilse tamamlananalara gönder.
        if(li.classList.contains("list-group-item-success")){
            tamamlananGorevler.appendChild(li)
            tamamlandıBtn.className="btn btn-warning btn-sm"

        }else {
            devamEdenGorevler.appendChild(li)
            tamamlandıBtn.className="btn btn-success btn-sm"
        }
        depoyaKaydet()
    })

    let duzenleBtn=document.createElement("button")
    duzenleBtn.type="button"
    duzenleBtn.className="btn btn-primary btn-sm"
    duzenleBtn.textContent="Düzenle"

    duzenleBtn.addEventListener("click", function(){
        let yeni_metin=prompt("Yeni Görev Adını Giriniz: ")
        if(yeni_metin!==""){
            div.textContent=yeni_metin
            depoyaKaydet()
        }else{
            alert("Lütfen boş bırakmayın...")
        }
    })

    let silBtn=document.createElement("button")
    silBtn.type="button"
    silBtn.className="btn btn-danger btn-sm"
    silBtn.textContent="Sil"

    silBtn.addEventListener("click", function(){
        li.parentNode.removeChild(li)
        depoyaKaydet()
    }) 
    
    btnDiv.appendChild(tamamlandıBtn)
    btnDiv.appendChild(duzenleBtn)
    btnDiv.appendChild(silBtn)

    li.appendChild(div)
    li.appendChild(btnDiv)

    return li


}


// Depoya kaydetme fonksiyonu
function depoyaKaydet(){
    localStorage.setItem("tamamlananGorevler", tamamlananGorevler.innerHTML)
    localStorage.setItem("devamEdenGorevler", devamEdenGorevler.innerHTML)    
}

// kayıtlı görevleri yerel depolama alanınıdan yükle
function depoYukle(){
    tamamlananGorevler.innerHTML=localStorage.getItem("tamamlananGorevler") 
    devamEdenGorevler.innerHTML=localStorage.getItem("devamEdenGorevler") 
}

function yerelDepoSil(){
    localStorage.clear()
    alert("Tarayıcı deposu temizlendi")
}

depoSil.addEventListener("click",yerelDepoSil)

depoYukle()

})



