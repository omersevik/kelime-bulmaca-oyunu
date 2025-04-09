var kelimeler = ["elma", "armut", "masa", "sandalye", "bilgisayar", "klavye", "telefon", "gözlük", "kitap", "defter",
    "kalem", "silgi", "radyo", "televizyon", "kanepe", "halı", "perde", "buzdolabı", "fırın", "çamaşır", 
    "bulaşık", "mutfak", "salon", "yatak", "yorgan", "battaniye", "ayna", "kapı", "pencere", "bahçe", 
    "çit", "çimen", "çiçek", "ağaç", "deniz", "göl", "nehir", "dağ", "tepe", "ova", "vadi", 
    "şehir", "köy", "kasaba", "bina", "ev", "apartman", "otobüs", "araba", "uçak", "gemi", "tren", 
    "bisiklet", "motosiklet", "yol", "kavşak", "trafik", "lamba", "ışık", "güneş", "ay", "yıldız", 
    "bulut", "yağmur", "kar", "rüzgar", "fırtına", "şimşek", "gökkuşağı", "balık", "kuş", "kedi", 
    "köpek", "fare", "kaplumbağa", "yılan", "ördek", "tavuk", "inek", "koyun", "keçi", "at", 
    "zebra", "aslan", "kaplan", "ayı", "fil", "zürafa", "timsah", "kurbağa", "yengeç", "örümcek", 
    "karınca", "arı", "kelebek", "sinek", "akrep", "solucan", "böcek", "yunus", "balina", "köpekbalığı"
]; 

var puan = 0;
var rastgeleKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
var harfSayisi = rastgeleKelime.length;
var container = document.getElementById("kelimeAlani");

var bulunanHarfler = new Array(harfSayisi).fill(false);

container.innerHTML = "";

for (var i = 0; i < harfSayisi; i++) {
    var span = document.createElement("span");
    span.innerText = " _ ";
    span.style.margin = "5px";
    span.dataset.index = i; // Span'in indeksini veri özelliği olarak ekle
    container.appendChild(span); // Span'i container'a ekle
}

function rastgeleHarf() {
    var input = document.getElementById("input").value.toLowerCase();
    document.getElementById("input").value = "";

    if (input.length === 0) return; // input içi boş ise hiç birşey yapmaması için

    var spans = document.querySelectorAll("#kelimeAlani span");
    
    // Input'taki her harfi teker teker işletmeye çalışmak ÇALIŞIN KÖPEKLER
    for (var j = 0; j < input.length; j++) {
        var simdikiHarf = input[j];
        
        // Harfi kelimenin her yerinde kontrol ettirme
        // Rastgele seçilen kelimenin her harfini kontrol et
        for (var i = 0; i < rastgeleKelime.length; i++) {
            // Şu anki harf, rastgele kelimenin i. pozisyonundaki harfe eşit mi?
            if (rastgeleKelime[i] === simdikiHarf) {
                // Eğer bu pozisyondaki harf daha önce bulunmadıysa (!bulunanHarfler[i] = false ise)
                if (bulunanHarfler[i] === false) {
                    // Ekrandaki _ işaretini bulunan harfle değiştir (örnek: _ -> a)
                    spans[i].innerText = simdikiHarf;
                    // Bu pozisyondaki harfin bulunduğunu işaretle (index yani)
                    bulunanHarfler[i] = true;
                }
            }
        }
    }

    // tüm harflerin bulunduğunu kontrol et
    
    var tumHarflerBulundu = !bulunanHarfler.includes(false); //false yoksa true döner bu yüzden ! ile ters çeviriyoruz
    
    for (var i = 0; i < rastgeleKelime.length; i++) {
        puan++;
        document.querySelector(".Puan").innerText = "Puan: " + puan;
    }

    if (tumHarflerBulundu === true) {
        setTimeout(() => {
            alert("Tebrikler! Kelimeyi buldunuz: " + rastgeleKelime);
            yeniOyunBaslat();
        }, 500);
    }
}


// oyunu yeniden başlatma
function yeniOyunBaslat() {
    rastgeleKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
    harfSayisi = rastgeleKelime.length;
    
    bulunanHarfler = [];
    for(var i = 0; i < harfSayisi; i++) {
        bulunanHarfler[i] = false; // Her harf için başlangıçta bulunmadı olarak işaretleme
        //kısacası harf sayısının uzunluğunu alıyoruz ve i ile ne kadar harf varsa o kadar ekliyoruz örnek 5 harf varsa 5 tane false ekliyoruz
        //false burada şu anlama geliyor: harf bulunmadı
        //true ise harf bulundu demektir (asla true olamaz çünkü harf bulunduğunda true yapılıyor) :>
        //kısacası harfleri teker teker farklı farklı örnek "a","b","c","d","e" gibi harfleri teker teker ekliyoruz :>
    }
    
    container.innerHTML = "";
    
    for (var i = 0; i < harfSayisi; i++) {
        var span = document.createElement("span");
        span.innerText = " _ ";
        span.style.margin = "5px";
        span.setAttribute("data-index", i);
        container.appendChild(span);
    }
}

// Zaman
let zaman = 0;
const zamanElement = document.querySelector(".sure");

const zamanSayaci = setInterval(() => {
    zaman++;
    zamanElement.innerText = "Zaman: " + zaman + " saniye";
}, 1000);