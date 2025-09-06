import pembagian from "../assets/pembagian.png";
import cellmana from "../assets/cellmana.png";
import nilaicell from "../assets/nilaicell.png";
import type { QuizQuestion } from '../interface/QuizQuestion';

const excel3 = {
  id: 6,
  title: "Microsoft Excel – 3",
  questions: [
    {
      question: "Formula yang dapat digunakan untuk mengisi cell E6 dengan hasil pembagian dari cell A6 dengan B6",
      options: [
        {text:"=A6:B6"},
        {text:"=A6/B6"},
        {text:"=A6*C6"},
      ],
      image: pembagian,
      answer: "=A6/B6",
      score: 6.25,
    },

    {
      question: "Di cell manakah terdapat tanggal lahir dari Meri?",
      options: [
        {text:"B1"},
        {text:"B2"},
        {text:"B3"},
        {text:"B4"},
      ],
      image: cellmana,
      answer: "B2",
      score: 6.25,
    },
    {
      question: "Di cell manakah terdapat tanggal lahir dari Ari?",
      options: [
        {text:"B1"},
        {text:"B2"},
        {text:"B3"},
        {text:"B4"},
      ],
      image: cellmana,
      answer: "B3",
      score: 6.25,
    },
    {
      question: "Di cell manakah terdapat warna favorit dari Lusi?",
      options: [
        {text:"A4"},
        {text:"B4"},
        {text:"C4"},
      ],
      image: cellmana,
      answer: "C4",
      score: 6.25,
    },
    {
      question: "Di cell manakah terdapat warna favorit dari Meri?",
      options: [
        {text:"A1"},
        {text:"A2"},
        {text:"C2"},
        {text:"C1"},
      ],
      image: cellmana,
      answer: "C2",
      score: 6.25,
    },
    {
      question: "Di kolom manakah terdapat data warna favorit?",
      options: [
        {text:"A"},
        {text:"B"},
        {text:"C"},
        {text:"D"},
      ],
      image: cellmana,
      answer: "C",
      score: 6.25,
    },
    {
      question: "Berapakah value yang akan ditunjukkan di cell C2 dengan formula seperti dibawah?",
      options: [
        {text:"1700"},
        {text:"1000"},
        {text:"700"},
        {text:"300"},
      ],
      image: nilaicell,
      answer: "300",
      score: 6.25,
    },
    {
      question: "Alamat cell yang berada pada kolom B dan baris 3 ditulis sebagai",
      options: [{text:"3B"}, {text:"B3"}, {text:"2C"}, {text:"C2"}],
      answer: "B3",
      score: 6.25,
    },
    {
      question: "Semua formula/rumus di Excel selalu diawali dengan tanda",
      options: [{text:"="}, {text:"+"}, {text:"-"}, {text:"@"}],
      answer: "=",
      score: 6.25,
    },
    {
      question: "Fungsi apakah yang tepat untuk menghitung RATA-RATA sekumpulan angka?",
      options: [{text:"AVERAGE"}, {text:"SUM"}, {text:"COUNT"}, {text:"MIN"}],
      answer: "AVERAGE",
      score: 6.25,
    },

    {
      question: "Manakah yang BENAR tentang referensi absolut?",
      options: [
        {text:"Menggunakan tanda $ seperti $B$2 agar tidak berubah saat disalin"},
        {text:"Selalu berubah mengikuti posisi salinan"},
        {text:"Hanya untuk teks, bukan angka"},
        {text:"Tidak bisa digunakan dalam fungsi"}
      ],
      answer: "Menggunakan tanda $ seperti $B$2 agar tidak berubah saat disalin",
      score: 6.25,
    },

    {
      question: "Skenario: Anda memiliki tabel penjualan Q1 (Januari–Maret) di cell range B2:B9. Formula mana yang dapat digunakan untuk menghitung totalnya di cell B10?",
      options: [
        {text:"=B2+B9"},
        {text:"=B2+B10"},
        {text:"=SUM(B2:B9)"},
        {text:"=SUM(B2:B10)"}
      ],
      answer: "=SUM(B2:B9)",
      score: 6.25,
    },
    {
      question: "Skenario: Baris 1 berisi judul kolom. Setelah menggulir ke bawah, Anda sulit melihat judul. Apa yang harus dilakukan?",
      options: [
        {text:"View → Freeze Panes → Freeze Top Row"},
        {text:"Home → Wrap Text"},
        {text:"Insert → Table → Design"},
        {text:"Data → Text to Columns"}
      ],
      answer: "View → Freeze Panes → Freeze Top Row",
      score: 6.25,
    },

    {
      question: "Skenario: Anda menyalin formula dari D2 ke D3–D10, tetapi formula itu menggunakan referensi ke B2 yang harus selalu tetap. Apa yang digunakan?",
      options: [
        {text:"Referensi absolut seperti $B$2"},
        {text:"Referensi relatif seperti B2"},
        {text:"Teks biasa"},
        {text:"Wrap Text"}
      ],
      answer: "Referensi absolut seperti $B$2",
      score: 6.25,
    },

    {
      question: "Istilah apakah untuk menyalin formula/rumus ke cell lain dengan menarik sudut kanan bawah cell?",
      options: [
        {text:"Auto Fill"},
        {text:"Copy Format"},
        {text:"Copy Link"},
        {text:"Quick Drag"}
      ],
      answer: "Auto Fill",
      score: 6.25,
    },

    {
      question: "Apakah kegunaan formula =PRODUCT(cell1/range1, cell2/range2,...)?",
      options: [
        {text:"Menjumlah semua cell atau range di antara kedua tanda kurung"},
        {text:"Memberikan hasil perkalian semua cell atau range di antara kedua tanda kurung"},
        {text:"Memberikan hasil rata-rata semua cell atau range di antara kedua tanda kurung"},
      ],
      answer: "Memberikan hasil perkalian semua cell atau range di antara kedua tanda kurung",
      score: 6.25,
    },


  ] as QuizQuestion[],
};

export default excel3;
