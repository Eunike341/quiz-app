import fungsiApa from "../assets/fungsi-apa.png";
import sortfilter from "../assets/sortfilter.png";
import type { QuizQuestion } from '../interface/QuizQuestion';

const excel4 = {
  id: 9,
  title: "Microsoft Excel/ Google Sheet – 4",
  questions: [
    {
      question: "Untuk mengurutkan data angka penjualan dari nilai tertinggi ke terendah di Excel/Google Sheets, fungsi apa yang harus Anda gunakan",
      options: [
        {text:"Sort A to Z"},
        {text:"Sort Z to A (Descending)"},
        {text:"Filter"},
        {text:"VLOOKUP"},
      ],
      answer: "Sort Z to A (Descending)",
      score: 10,
    },

    {
      question: "Jika Anda memiliki tabel berisi ratusan transaksi dan hanya ingin menampilkan baris data transaksi yang terjadi pada bulan 'Januari', fitur mana yang paling tepat digunakan?",
      options: [
        {text:"Sort"},
        {text:"VLOOKUP"},
        {text:"Filter"},
        {text:"HLOOKUP"},
      ],
      answer: "Filter",
      score: 10,
    },
    {
      question: 'Fungsi =LEFT("INDONESIA", 4) akan menghasilkan output teks berupa...',
      options: [
        {text:"ESIA"},
        {text:"INDO"},
        {text:"NDON"},
        {text:"NESI"},
      ],
      answer: "INDO",
      score: 10,
    },

    {
      question: "Dalam rumus =VLOOKUP(A2, B2:E10, 3, FALSE), angka '3' (sebagai col_index_num) berfungsi untuk menentukan...",
      options: [
        {text:"Baris ke-3 dari rentang referensi"},
        {text:"Kolom ke-3 dari rentang referensi"},
        {text:"Nilai yang sedang dicari"},
        {text:"Tipe pencarian perkiraan (approximate match)"},
      ],
      answer: "Kolom ke-3 dari rentang referensi",
      score: 10,
    },
    {
      question: "Anda memiliki kode pesanan 'SBY-2024-INV' di cell A1. Jika Anda hanya membutuhkan kode area 'SBY' dari teks tersebut, kombinasi fungsi apa yang paling efisien?",
      options: [
        {text:"=LEFT(A1, 3)"},
        {text:"=RIGHT(A1, 3)"},
        {text:"=VLOOKUP(A1, 3, FALSE)"},
        {text:"=HLOOKUP(A1, 3, FALSE)"},
      ],
      answer: "=LEFT(A1, 3)",
      score: 10,
    },
    {
      question: "Fungsi apakah yang digunakan untuk mengisi value pada cell C11?",
      options: [
        {text:"=VLOOKUP(A11,A2:B6,2,FALSE)"},
        {text:"=HLOOKUP(A11,A2:B6,2,FALSE)"},
        {text:"=LEFT(A11,A2:B6,2,FALSE)"},
        {text:"=SORT(A11,A2:B6,2,FALSE)"},
      ],
      image: fungsiApa,
      answer: "=VLOOKUP(A11,A2:B6,2,FALSE)",
      score: 10,
    },
    {
      question: "Fungsi apakah yang digunakan untuk mengisi value pada cell D11?",
      options: [
        {text:"=B11*C11"},
        {text:"=A11*B11"},
        {text:"=B1*C1"},
        {text:"=B11+C11"},
      ],
      image: fungsiApa,
      answer: "=B11*C11",
      score: 10,
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
      score: 10,
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
      score: 10,
    },

    {
      question: "Nomor berapa yang harus digunakan untuk memilah data film sehingga hanya film yang terdapat kata 'day' di judulnya yang ditunjukkan?",
      options: [
        {text:"1"},
        {text:"2"},
        {text:"3"},
        {text:"4"}
      ],
      image: sortfilter,
      answer: "3",
      score: 10,
    },



  ] as QuizQuestion[],
};

export default excel4;
