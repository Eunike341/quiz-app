import pembagian from "../assets/pembagian.png";
import type { QuizQuestion } from '../interface/QuizQuestion';

const excel3 = {
  id: 6,
  title: "Microsoft Excel – Dasar",
  questions: [
    {
      question: "Formula yang dapat digunakan untuk mengisi cell F6 dengan membagikan isi dari cell B6 dengan C6 adalah",
      options: [
        {text:"=B6:C6"},
        {text:"=B6/C6"},
        {text:"=B6*C6"},
      ],
      image: pembagian,
      answer: "=B6/C6",
    },

    {
      question: "Alamat sel yang berada pada kolom B dan baris 3 ditulis sebagai",
      options: [{text:"3B"}, {text:"B3"}, {text:"2C"}, {text:"C2"}],
      answer: "B3",
    },
    {
      question: "Semua formula/rumus di Excel selalu diawali dengan tanda",
      options: [{text:"="}, {text:"+"}, {text:"-"}, {text:"@"}],
      answer: "=",
    },
    {
      question: "Fungsi apakah yang tepat untuk menghitung RATA-RATA sekumpulan angka?",
      options: [{text:"AVERAGE"}, {text:"SUM"}, {text:"COUNT"}, {text:"MIN"}],
      answer: "AVERAGE",
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
    },

    {
      question: "Skenario: Anda memiliki tabel penjualan Q1 (Januari–Maret) di sel B2:B9. Formula mana yang dapat digunakan untuk menghitung totalnya di sel B10?",
      options: [
        {text:"=B2+B9"},
        {text:"=B2+B10"},
        {text:"=SUM(B2:B9)"},
        {text:"=SUM(B2:B10)"}
      ],
      answer: "=SUM(B2:B9)",
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
    },

    {
      question: "Istilah apakah untuk menyalin formula/rumus ke sel lain dengan menarik sudut kanan bawah sel?",
      options: [
        {text:"Auto Fill"},
        {text:"Copy Format"},
        {text:"Copy Link"},
        {text:"Quick Drag"}
      ],
      answer: "Auto Fill",
    },

    {
      question: "Apakah kegunaan formula =PRODUCT(cell1/range1, cell2/range2,...)?",
      options: [
        {text:"Menjumlah semua cell atau range di antara kedua tanda kurung"},
        {text:"Memberikan hasil perkalian semua cell atau range di antara kedua tanda kurung"},
        {text:"Memberikan hasil rata-rata semua cell atau range di antara kedua tanda kurung"},
      ],
      answer: "Memberikan hasil perkalian semua cell atau range di antara kedua tanda kurung",
    },


  ] as QuizQuestion[],
};

export default excel3;
