document.addEventListener('DOMContentLoaded', function() {
    // Data Dictionary yang berisi data harga dan deskripsi
    const dataKopi = {
        "kopi-pancong": { 
            harga: "Rp 8.000", 
            deskripsi: "Kopi khas Sumatra yang disajikan hanya setengah gelas (dipancung). Rasanya pekat dan ukurannya pas untuk dinikmati dengan cepat." 
        },
        "kopi-joss": { 
            harga: "Rp 8.000", 
            deskripsi: "Kopi hitam khas Yogyakarta dengan penyajian unik: arang membara dicelupkan langsung ke dalam gelas, memberikan sensasi karamel dan aroma smoky." 
        },
        "kopi-khop": { 
            harga: "Rp 12.000", 
            deskripsi: "Kopi pesisir Aceh Barat yang disajikan dengan gelas terbalik di atas piring kecil. Dinikmati dengan cara ditiup dan diseruput perlahan melalui sedotan." 
        },
        "kopi-tubruk": { 
            harga: "Rp 10.000", 
            deskripsi: "Metode seduh klasik kebanggaan Indonesia. Air panas dituang langsung menabrak bubuk kopi tanpa penyaring, menghasilkan body dan aroma yang sangat tebal." 
        },
        "kopi-rarobang": { 
            harga: "Rp 20.000", 
            deskripsi: "Kopi rempah tradisional Ambon yang diseduh bersama jahe, cengkeh, dan kayu manis, lalu disajikan dengan taburan irisan kacang kenari yang gurih." 
        }
};

    const tombolAbout = document.querySelector('.btn-primary');
    tombolAbout.addEventListener('click', function() {
        document.getElementById('aboutcomp').style.display='block';
    })


    const tombolDetails = document.querySelectorAll('.btn-detail');

    tombolDetails.forEach(tombol => {
        tombol.addEventListener('click', function() {
            const idKopi = this.id;
            const detail = dataKopi[idKopi];
            const wadahInfo = document.getElementById('info-' + idKopi);

            if (detail && wadahInfo) {
                wadahInfo.querySelector('.harga-text').innerText = detail.harga;
                wadahInfo.querySelector('.deskripsi-text').innerText = detail.deskripsi;

                if (wadahInfo.style.display === 'none' || wadahInfo.style.display === '') {
                    wadahInfo.style.display = 'block';
                    this.innerText = 'Show less';
                } else {
                    wadahInfo.style.display = 'none';
                    this.innerText = 'Learn more';
                }
            }
        });
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
    })}
});