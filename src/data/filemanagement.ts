import screenshots from "../assets/screenshots.png";
import searchInFolder from "../assets/searchInFolder.png";
import sorot2 from "../assets/sorot2.png";
import sorotlatketik from "../assets/sorotlatketik.png";
import foldermana from "../assets/foldermana.png";
import week1 from "../assets/week1.png";

const filemanagement = {
  id: 4,
  title: "File Management",
  questions: [
    {
      question: "Perhatikan gambar file explorer di bawah. Bagaimana cara membuka folder 'Screenshots'?",
      options: [{text:"Double click folder 'Screenshots'"},
      {text:"Left click folder 'Screenshots'"},
      {text:"Right click folder 'Screenshots'"}],
      image: screenshots,
      answer: "Double click folder 'Screenshots'",
    },
    {
      question: "Yang manakah langkah-langkah untuk mencari file bernama foto.png?",
      options: [{text:"Ketik foto di textbox nomor 2, tekan key nomor 4"},
        {text:"Ketik foto di textbox nomor 2, tekan key nomor 3"},
        {text:"Ketik foto.png di textbox nomor 1, tekan key nomor 4"},
        {text:"Ketik foto.png di textbox nomor 1, tekan key nomor 3"}],
      image: searchInFolder,
      answer: "Ketik foto di textbox nomor 2, tekan key nomor 4",
    },
    {
      question: "Di manakah file atau folder yang telah dihapus disimpan untuk sementara?",
      options: [{text:"Recycle Bin"}, {text:"Downloads"}, {text:"Documents"}, {text:"Home"}],
      answer: "Recycle Bin",
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'C'?",
      options: [{text:"Copy"}, {text:"Cut"}, {text:"Paste"}, {text:"Save"}],
      answer: "Copy",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Berapa folder kah yang sudah disorot?",
      options: [{text:"8"},
      {text:"1"},
      {text:"6"},
      {text:"2"}],
      image: sorot2,
      answer: "2",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Bagaimanakah cara menghapus file 'Latihan Mengetik'?",
      options: [{text:"Tekan key 'Delete' di keyboard"},
      {text:"Klik kanan"},
      {text:"Klik kiri"},
      {text:"Tekan key 'Enter' di keyboard"}],
      image: sorotlatketik,
      answer: "Tekan key 'Delete' di keyboard",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Di folder manakah terdapat file 'Latihan Mengetik'?",
      options: [{text:"Computer Class"},
      {text:"Kelas Komputer"},
      {text:"Week 1"},
      {text:"Latihan Word"}],
      image: foldermana,
      answer: "Computer Class",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Di folder manakah terdapat folder 'Week 1'?",
      options: [{text:"Computer Class"},
      {text:"Kelas Komputer"},
      {text:"Week 1"},
      {text:"Latihan Word"}],
      image: foldermana,
      answer: "Kelas Komputer",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Bagaimana cara menghapus folder 'Latihan 1'?",
      options: [{text:"Klik kanan pada folder 'Latihan 1', klik 'Delete' option"},
      {text:"Klik kanan pada folder 'Latihan 1', klik 'Rename' option"},
      {text:"Klik kanan folder 'Latihan 1', klik 'Copy' option"},
      {text:"Klik kanan folder 'Latihan 1', klik 'Open' option"}],
      image: week1,
      answer: "Klik kanan pada folder 'Latihan 1', klik 'Delete' option",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Ada berapa file dan folder yang ditunjukkan?",
      options: [{text:"1"},
      {text:"2"},
      {text:"3"}],
      image: week1,
      answer: "2",
    },
  ],
};

export default filemanagement;
