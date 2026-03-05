function sumDigits(num) {
    let sum = 0;
    const str = String(num);
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}

const garisHidupData = {
    1: {
        title: "Tanggal Lahir Anda Berada Pada Garis Hidup 1",
        text: [
            "Bagi mereka yang jumlah angka dari lahirnya 1, kemandirian, individualitas, dan pencapaian sebagai pelajaran yang harus dituntaskan dalam Hidupnya. Karakter mereka memiliki jiwa kepemimpinan yang kuat, ambisius, dan penuh tekad. Mereka adalah pelopor dan pionir yang selalu ingin menjadi yang terdepan.",
            "Kepribadian yang terpenting dari angka ini adalah kemandirian. Mereka cenderung tidak suka bergantung pada orang lain dan lebih memilih untuk menyelesaikan segala sesuatu sendiri. Kreativitas dan inovasi mengalir dalam diri mereka.",
            "Anda tidak terlalu pandai menerima kritik dari orang lain. Namun, Anda memiliki kemampuan luar biasa untuk memotivasi diri sendiri dan orang-orang di sekitar Anda. Sifat Anda yang tegas menjadikan Anda pemimpin alami yang dihormati."
        ]
    },
    2: {
        title: "Tanggal Lahir Anda Berada Pada Garis Hidup 2",
        text: [
            "Bagi mereka yang jumlah angka dari lahirnya 2, kerja sama, diplomasi, dan keseimbangan sebagai pelajaran yang harus dituntaskan dalam Hidupnya. Mereka adalah mediator alami yang memiliki kemampuan untuk melihat kedua sisi dari setiap situasi.",
            "Kepribadian yang terpenting dari angka ini adalah kepekaan dan empati. Mereka sangat perhatian terhadap perasaan orang lain dan selalu berusaha menciptakan harmoni di lingkungan sekitarnya. Mereka memiliki intuisi yang kuat dan sering menjadi pendengar yang baik.",
            "Anda memiliki kemampuan diplomatik yang luar biasa. Namun, terkadang Anda terlalu sensitif dan mudah terpengaruh oleh suasana hati orang lain. Belajarlah untuk menetapkan batasan yang sehat sambil tetap mempertahankan sifat penyayang Anda."
        ]
    },
    3: {
        title: "Tanggal Lahir Anda Berada Pada Garis Hidup 3",
        text: [
            "Bagi mereka yang jumlah angka dari lahirnya 3, ekspresi, sosialisasi, dan kreativitas sebagai pelajaran yang harus dituntaskan dalam Hidupnya. Dituntunlah keluar dunia, ramahlah yang berkilau dan optimistis termasuk di dalamnya. Orang-orang dengan garis hidup 3 yang telah mengatasi kebutuhannya memunculkan bakat kreatif yang istimewa, biasanya dalam verbal, tulisan, akting, atau semacamnya. Misi yang harus dicapainya dalam Hidup adalah kesuksesan dalam bersendirian. Bisa contoh bagi orang-orang ini berharap harmoni, kebahagiaan dan kesenangan, serta meringkas kemampuan kreatif Anda dengan dunia. Mengingat kemampuan Anda dalam ekspresi kreatif dan ini tertuang bagi angka garis hidup ini. Karakter mereka hangat dan bersahabat, pemikiran yang baik, sosial dan terbuka.",
            "Kepribadian yang terpenting di antri ini adalah bahwa kekuasaan seseorang yang menyenangkan untuk dibuang, tak lebih penting lagi, seseorang yang mampu untuk mengekspresikan. Mereka adalah individu-individu yang selalu diterima dengan baik dalam setiap situasi sosial, dan juga mengasah kegembiraan mereka bersama orang lain dan mereka diterima. Potensi menjalan kreativit seisi adik, seseorang bisa bersyukur atas hal yang telah lahir, karena mereka tidak selalu tengelam untuk mengungkapkan perasaan ini. Skenario mudah kehilangan bersifat selalu positif, dan perkembangan rindu dan terbuka. Anda bisa mengambil banyak harapan dalam hidup dengan efektif dan tanggunglah keberhasilan. Anda mempunyai kata-kata yang baik dan tampilannya cukup peka akan perasaan dan emosi orang lain. Hidup dijalani sepenuhnya, seseorang tanpa kesedihan atau hari esok.",
            "Anda tidak terlalu pandai menerima perihal kesuksesan karena bisa mengganggu perilng hal lii. Uang akan diberartikan saat Anda punya, dan tidak dikhawatirkan saat Anda tidak ada. Sisi negatifnya, sikap mereka dalam hidup bisa sangat cukup sangan menimbulkan jadi superfisial. Kemampuan Anda senyataft bersifat dan jadi keseimbang fokus. Mereka dengan angka garis hidup 3 ini adalah tabu-lelah, dan Anda sempurna menjadi mood orang untuk mendorong. Sulitlah bagi Anda untuk memulai di satu tempat. Juga agar tidak selalu mengubah orang, tidak sukanya, ataupun terlalu optimistis. Garis hidup 3 ini membentuk kemampuan di atas rata-rata dalam seni. Baik melalui, dalam retorik, tamasha, menulis, musik, foker, aktualis: mungkin semuanya. Anda selalu gembira, penuh inspirasi, dan selalu merasa stimulasi dari orang-orang yang sosialan. Sifat Anda yang rintan itu membuat Anda soian dala mendengarkan seseorang dan saran-saran Anda jadi bahan Anda jadi paling yang tepat."
        ]
    },
    4: {
        title: "Tanggal Lahir Anda Berada Pada Garis Hidup 4",
        text: [
            "Bagi mereka yang jumlah angka dari lahirnya 4, kestabilan, kerja keras, dan kedisiplinan sebagai pelajaran yang harus dituntaskan dalam Hidupnya. Mereka adalah pembangun yang handal, orang-orang yang membuat fondasi kokoh untuk masa depan. Praktis dan terorganisir adalah ciri khas mereka.",
            "Kepribadian yang terpenting dari angka ini adalah keandalan dan kejujuran. Mereka sangat bertanggung jawab dan selalu menepati janji. Orang-orang dengan garis hidup 4 dikenal sebagai pekerja keras yang tidak pernah menyerah.",
            "Anda memiliki kemampuan organisasi yang sangat baik dan selalu merencanakan segala sesuatu dengan matang. Namun, terkadang Anda terlalu kaku dan sulit menerima perubahan. Cobalah untuk lebih fleksibel dan terbuka terhadap ide-ide baru."
        ]
    },
    5: {
        title: "Tanggal Lahir Anda Berada Pada Garis Hidup 5",
        text: [
            "Bagi mereka yang jumlah angka dari lahirnya 5, kebebasan, petualangan, dan perubahan sebagai pelajaran yang harus dituntaskan dalam Hidupnya. Mereka adalah jiwa yang bebas, selalu mencari pengalaman baru dan tidak suka terikat oleh rutinitas.",
            "Kepribadian yang terpenting dari angka ini adalah adaptabilitas dan rasa ingin tahu. Mereka mudah bergaul dan memiliki kemampuan komunikasi yang sangat baik. Perjalanan dan eksplorasi adalah bagian penting dari hidup mereka.",
            "Anda memiliki energi yang luar biasa dan selalu antusias terhadap hal-hal baru. Namun, terkadang Anda kurang fokus dan mudah bosan. Belajarlah untuk menyelesaikan apa yang telah Anda mulai sebelum berpindah ke hal berikutnya."
        ]
    },
    6: {
        title: "Tanggal Lahir Anda Berada Pada Garis Hidup 6",
        text: [
            "Bagi mereka yang jumlah angka dari lahirnya 6, tanggung jawab, cinta kasih, dan pelayanan sebagai pelajaran yang harus dituntaskan dalam Hidupnya. Mereka adalah pengasuh alami yang selalu mementingkan keluarga dan komunitas.",
            "Kepribadian yang terpenting dari angka ini adalah kasih sayang dan rasa tanggung jawab. Mereka selalu siap membantu orang lain dan memiliki naluri melindungi yang kuat. Rumah dan keluarga menjadi pusat kehidupan mereka.",
            "Anda memiliki kemampuan untuk menciptakan keharmonisan di mana pun Anda berada. Namun, terkadang Anda terlalu memaksakan standar Anda kepada orang lain. Belajarlah untuk membiarkan orang lain membuat keputusan mereka sendiri."
        ]
    },
    7: {
        title: "Tanggal Lahir Anda Berada Pada Garis Hidup 7",
        text: [
            "Bagi mereka yang jumlah angka dari lahirnya 7, spiritualitas, kebijaksanaan, dan introspeksi sebagai pelajaran yang harus dituntaskan dalam Hidupnya. Mereka adalah pemikir mendalam yang selalu mencari makna di balik segala sesuatu.",
            "Kepribadian yang terpenting dari angka ini adalah kecerdasan dan intuisi. Mereka memiliki pikiran analitis yang tajam dan sering tertarik pada hal-hal yang bersifat spiritual atau filosofis. Kesendirian bukan hal yang menakutkan bagi mereka.",
            "Anda memiliki kemampuan analisis yang luar biasa dan selalu mencari kebenaran. Namun, terkadang Anda terlalu tertutup dan sulit membuka diri kepada orang lain. Cobalah untuk lebih terbuka dan berbagi pemikiran Anda dengan orang-orang terdekat."
        ]
    },
    8: {
        title: "Tanggal Lahir Anda Berada Pada Garis Hidup 8",
        text: [
            "Bagi mereka yang jumlah angka dari lahirnya 8, kekuasaan, kemakmuran, dan pencapaian material sebagai pelajaran yang harus dituntaskan dalam Hidupnya. Mereka adalah pribadi yang ambisius dan berorientasi pada kesuksesan di dunia bisnis dan keuangan.",
            "Kepribadian yang terpenting dari angka ini adalah ketegasan dan kemampuan manajerial. Mereka memiliki visi yang jelas tentang apa yang ingin dicapai dan tidak takut mengambil risiko besar untuk meraihnya.",
            "Anda memiliki bakat alami dalam mengelola keuangan dan bisnis. Namun, terkadang Anda terlalu fokus pada materi hingga mengabaikan aspek emosional dalam hidup. Seimbangkan antara ambisi dan hubungan personal Anda."
        ]
    },
    9: {
        title: "Tanggal Lahir Anda Berada Pada Garis Hidup 9",
        text: [
            "Bagi mereka yang jumlah angka dari lahirnya 9, kemanusiaan, kebijaksanaan, dan pengabdian sebagai pelajaran yang harus dituntaskan dalam Hidupnya. Mereka adalah jiwa tua yang penuh kasih dan memiliki visi besar untuk kebaikan umat manusia.",
            "Kepribadian yang terpenting dari angka ini adalah kemurahan hati dan idealisme. Mereka selalu ingin membuat dunia menjadi tempat yang lebih baik dan sering terlibat dalam kegiatan sosial atau kemanusiaan.",
            "Anda memiliki karisma alami yang menarik banyak orang kepada Anda. Namun, terkadang Anda terlalu idealis dan kecewa ketika kenyataan tidak sesuai harapan. Belajarlah untuk menerima ketidaksempurnaan sambil tetap berusaha untuk yang terbaik."
        ]
    }
};

function hitungGarisHidup() {
    const tanggal = parseInt(document.getElementById('tanggal').value);
    const bulan = parseInt(document.getElementById('bulan').value);
    const tahun = parseInt(document.getElementById('tahun').value);

    const gabungan = String(tanggal) + String(bulan) + String(tahun);
    let hasil1 = 0;
    for (let i = 0; i < gabungan.length; i++) {
        hasil1 += parseInt(gabungan[i]);
    }

    let hasil2 = hasil1;
    if (hasil2 > 9) {
        hasil2 = sumDigits(hasil2);
    }

    let hasilAkhir = hasil2;
    while (hasilAkhir > 9) {
        hasilAkhir = sumDigits(hasilAkhir);
    }

    document.getElementById('outputSection').style.display = 'block';

    document.getElementById('outTanggal').value = tanggal;
    document.getElementById('outBulan').value = bulan;
    document.getElementById('outTahun').value = tahun;
    document.getElementById('outHasil1').value = hasil1;
    document.getElementById('outHasil2').value = hasil2;
    document.getElementById('outHasilAkhir').value = hasilAkhir;

    const data = garisHidupData[hasilAkhir];
    if (data) {
        document.getElementById('garisHidupTitle').textContent = data.title;
        let htmlText = '';
        for (let i = 0; i < data.text.length; i++) {
            htmlText += data.text[i] ;
        }
        document.getElementById('garisHidupText').innerHTML = htmlText;
        document.getElementById('garisHidupDescription').style.display = 'block';
    }
}

function resetForm() {
    document.getElementById('tanggal').selectedIndex = 0;
    document.getElementById('bulan').selectedIndex = 0;
    document.getElementById('tahun').selectedIndex = 0;

    document.getElementById('outTanggal').value = '';
    document.getElementById('outBulan').value = '';
    document.getElementById('outTahun').value = '';
    document.getElementById('outHasil1').value = '';
    document.getElementById('outHasil2').value = '';
    document.getElementById('outHasilAkhir').value = '';

    document.getElementById('outputSection').style.display = 'none';
    document.getElementById('garisHidupDescription').style.display = 'none';
}
