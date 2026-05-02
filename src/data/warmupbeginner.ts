import screenshots from "../assets/screenshots.png";
import email from "../assets/email.png";
import bukaWebsite from "../assets/bukaWebsite.png";
import type { QuizQuestion } from '../interface/QuizQuestion';

const warmup = {
  id: 8,
  title: "Warmup",
  questions: [


    {
      question: "Perhatikan gambar file explorer di bawah. Bagaimana cara membuka folder 'Screenshots'?",
      options: [{text:"Double click folder 'Screenshots'"},
      {text:"Left click folder 'Screenshots'"},
      {text:"Right click folder 'Screenshots'"}],
      image: screenshots,
      answer: "Double click folder 'Screenshots'",
      score: 10,
    },

    {
      question: "Di manakah file atau folder yang telah dihapus disimpan untuk sementara?",
      options: [{text:"Recycle Bin"}, {text:"Downloads"}, {text:"Documents"}, {text:"Home"}],
      answer: "Recycle Bin",
      score: 10,
    },

    {
      question: "Apakah kita boleh mengunduh file yang diakhiri dengan .exe atau .com?",
      options: [{text:"Boleh"}, {text:"Tidak boleh"}],
      answer: "Tidak boleh",
      score: 10,
    },
    {
      question: "Apakah scam dapat dikirim melalui whatsapp?",
      options: [{text:"Dapat"}, {text:"Tidak dapat"}],
      answer: "Dapat",
      score: 10,
    },

    {
      question: "Nomor berapakah yang harus di klik untuk meng-attach file di email?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: email,
      answer: "3",
      score: 10,
    },
    {
      question: "Nomor berapakah yang harus di klik untuk mengirim email?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: email,
      answer: "1",
      score: 10,
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'B'?",
      options: [{text:"Bold"}, {text:"Underline"}, {text:"Italic"}, {text:"Enter"}],
      answer: "Bold",
      score: 10,
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'C'?",
      options: [{text:"Copy"}, {text:"Cut"}, {text:"Paste"}, {text:"Save"}],
      answer: "Copy",
      score: 10,
    },

    {
      question: "Shortcut apakah 'Ctrl' + 'V'?",
      options: [{text:"Copy"}, {text:"Cut"}, {text:"Paste"}, {text:"Save"}],
      answer: "Paste",
      score: 10,
    },

    {
      question: "Yang manakah langkah-langkah yang paling tepat untuk mengunjungi website https://tinyurl.com/kuis-pemanasan?",
      options: [{text:"Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 2, tekan key nomor 4"},
        {text:"Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 2, tekan key nomor 3"},
        {text:"Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 1, tekan key nomor 4"},
        {text:"Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 1, tekan key nomor 3"}],
      image: bukaWebsite,
      answer: "Ketik https://tinyurl.com/kuis-pemanasan di textbox nomor 1, tekan key nomor 4",
      score: 10,
    },


  ] as QuizQuestion[],
};

export default warmup;
