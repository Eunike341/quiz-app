import screenshots from "../assets/screenshots.png";
import email from "../assets/email.png";
import resizeppt from "../assets/resizeppt.png";
import cellmana from "../assets/cellmana.png";
import excel from "../assets/excel.png";
import bukaWebsite from "../assets/bukaWebsite.png";
import fungsiApa from "../assets/fungsi-apa.png";
import type { QuizQuestion } from '../interface/QuizQuestion';

const warmup = {
  id: 7,
  title: "Warmup",
  questions: [


    {
      question: "Perhatikan gambar file explorer di bawah. Bagaimana cara membuka folder 'Screenshots'?",
      options: [{text:"Double click folder 'Screenshots'"},
      {text:"Left click folder 'Screenshots'"},
      {text:"Right click folder 'Screenshots'"}],
      image: screenshots,
      answer: "Double click folder 'Screenshots'",
      score: 5,
    },

    {
      question: "Setelah Anda download file dari internet, di folder manakah biasanya file itu dapat ditemukan?",
      options: [{text:"Downloads"},
          {text:"Documents"},
           {text:"Recycle Bin"},
            {text:"Desktop"}],
      answer: "Downloads",
      score: 5,
    },

    {
      question: "Di manakah file atau folder yang telah dihapus disimpan untuk sementara?",
      options: [{text:"Recycle Bin"}, {text:"Downloads"}, {text:"Documents"}, {text:"Home"}],
      answer: "Recycle Bin",
      score: 5,
    },

    {
      question: "Email manakah yang tidak boleh dibalas?",
      options: [{text:"Email scam"}, {text:"Email spam"}, {text:"Email scam dan spam"}, {text:"Email benar dari sekolah"}],
      answer: "Email scam dan spam",
      score: 5,
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
      score: 5,
    },
    {
      question: "Apakah scam dapat dikirim melalui whatsapp?",
      options: [{text:"Dapat"}, {text:"Tidak dapat"}],
      answer: "Dapat",
      score: 5,
    },

    {
      question: "Nomor berapakah yang harus di klik untuk meng-attach file di email?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: email,
      answer: "3",
      score: 5,
    },
    {
      question: "Nomor berapakah yang harus di klik untuk mengirim email?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: email,
      answer: "1",
      score: 5,
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'B'?",
      options: [{text:"Bold"}, {text:"Underline"}, {text:"Italic"}, {text:"Enter"}],
      answer: "Bold",
      score: 5,
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'C'?",
      options: [{text:"Copy"}, {text:"Cut"}, {text:"Paste"}, {text:"Save"}],
      answer: "Copy",
      score: 5,
    },

    {
      question: "Yang manakah langkah-langkah yang paling tepat untuk mengunjungi website https://tinyurl.com/kuis-pemanasan?",
      options: [{text:"Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 2, tekan key nomor 4"},
        {text:"Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 2, tekan key nomor 3"},
        {text:"Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 1, tekan key nomor 4"},
        {text:"Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 1, tekan key nomor 3"}],
      image: bukaWebsite,
      answer: "Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 1, tekan key nomor 4",
      score: 5,
    },
    {
      question: "Ketika menggunakan Microsoft Powerpoint, mengapa kita menambahkan gambar ke dalam slide?",
      options: [{text:"Supaya file jadi lebih besar"}, {text:"Supaya teks hilang semua"},
          {text:"Supaya penjelasan lebih jelas dan presentasi lebih menarik"}, {text:"Supaya tidak perlu bicara"}],
      answer: "Supaya penjelasan lebih jelas dan presentasi lebih menarik",
      score: 5,
    },
    {
      question: "Bagian mana yang harus ditarik untuk resize gambar?",
      options: [{text:"A"}, {text:"B"}, {text:"C"}],
      answer: "B",
      score: 5,
      image: resizeppt
    },
    {
      question: "Manakah yang merupakan tips presentasi/ powerpoint yang baik?",
      options: [{text:"Menulis teks sangat panjang dalam satu slide"},
          {text:"Menggunakan kalimat singkat dan jelas"},
          {text:"Membaca semua teks di slide"},
          {text:"Menggunakan font sangat kecil"}],
      answer: "Menggunakan kalimat singkat dan jelas",
      score: 5,
    },

    {
      question: "Nomor berapakah yang merupakan KOLOM (COLUMN)?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}],
      answer: "1",
      score: 5,
      image: excel
    },

    {
      question: "Nomor berapakah yang merupakan BARIS (ROW)?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}],
      answer: "2",
      score: 5,
      image: excel
    },

    {
      question: "Aplikasi yang dapat digunakan sebagai pengganti Microsoft Excel adalah...",
      options: [
        {text:"Google Docs"},
        {text:"Google Sheets"},
        {text:"Google Drive"},
        {text:"Google Slides"},
      ],
      answer: "Google Sheets",
      score: 5,
    },
    {
      question: "Di cell manakah terdapat warna favorit dari Ria?",
      options: [
        {text:"2C"},
        {text:"5C"},
        {text:"C2"},
        {text:"C5"},
      ],
      image: cellmana,
      answer: "C5",
      score: 5,
    },

    {
      question: "Anda memiliki kode pesanan 'SBY-2024-INV' di cell A1. Jika Anda hanya membutuhkan kode area 'SBY' dari teks tersebut, kombinasi fungsi apa yang paling efisien?",
      options: [
        {text:"=LEFT(A1, 3)"},
        {text:"=LEFT(3, A1)"},
        {text:"=LEFT(A, 1, 3)"},
        {text:"=LEFT(A, 3, 1)"},
      ],
      answer: "=LEFT(A1, 3)",
      score: 5,
    },
    {
      question: "Fungsi apakah yang digunakan untuk mengisi value pada cell C11?",
      options: [
        {text:"=VLOOKUP(A11,A2:B6,2,FALSE)"},
        {text:"=VLOOKUP(A11,A2:B6,3,FALSE)"},
        {text:"=VLOOKUP(C11,A2:B6,2,FALSE)"},
        {text:"=VLOOKUP(C11,A2:B6,3,FALSE)"},
      ],
      image: fungsiApa,
      answer: "=VLOOKUP(A11,A2:B6,2,FALSE)",
      score: 5,
    },

  ] as QuizQuestion[],
};

export default warmup;
