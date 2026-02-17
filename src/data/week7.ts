import addressBar from "../assets/addressBar.png";
import numOfFolderFile from "../assets/numOfFolderFile.png";
import wordMenu from "../assets/wordMenu.png";
import insertPicture from "../assets/insertPicture.png";
import berapaWordFiles from "../assets/berapaWordFiles.png";
import jumlahMyfolder from "../assets/jumlahMyfolder.png";
import bukaWebsite from "../assets/bukaWebsite.png";
import type { QuizQuestion } from '../interface/QuizQuestion';

const week7 = {
  id: 1,
  title: "Week 7",
  questions: [
    {
      question: "Yang manakah yang merupakan 'address bar'?",
      options: [{text:"A"}, {text:"B"}, {text:"C"}, {text:"D"}],
      image: addressBar,
      answer: "B",
      score: 7,
    },

    {
      question: "Berapa jumlah Word document dari gambar di bawah ini?",
      options: [{text:"6"}, {text:"4"}, {text:"2"}, {text:"1"}],
      image: numOfFolderFile,
      answer: "1",
      score: 7,
    },

    {
      question: "Bagaimana cara membuat folder baru di Windows Explorer?",
      options: [{text:"Klik kanan pada folder, New, Folder, lalu namakan folder."},
        {text:"Klik kanan pada daerah kosong, New, Folder, lalu namakan folder."},
        {text:"Klik kiri pada folder, New, Folder, lalu namakan folder."},
        {text:"Klik kiri pada daerah kosong, New, Folder, lalu namakan folder."}],
      answer: "Klik kanan pada daerah kosong, New, Folder, lalu namakan folder.",
      score: 7,
    },
    {
      question: "Apakah shortcut untuk menyorot/ memilih semua ('Select All')?",
      options: [{text:"Ctrl + C"}, {text:"Ctrl + A"}, {text:"Ctrl + Z"}, {text:"Ctrl + V"}],
      answer: "Ctrl + A",
      score: 7,
    },
    {
      question: "Apakah shortcut untuk mencari text tertentu dalam sebuah dokumen?",
      options: [{text:"Ctrl + F"}, {text:"Ctrl + H"}, {text:"Ctrl + U"}, {text:"Ctrl + B"}],
      answer: "Ctrl + F",
      score: 7,
    },
    {
      question: "Apakah shortcut untuk menyimpan dokumen?",
      options: [{text:"Ctrl + I"}, {text:"Ctrl + S"}, {text:"Ctrl + Home"}, {text:"Ctrl + P"}],
      answer: "Ctrl + S",
      score: 7,
    },
    {
      question: "Yang mana yang digunakan untuk bullet point?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: wordMenu,
      answer: "3",
      score: 8,
    },

    {
      question: "Aplikasi apakah yang dapat digunakan untuk mengatur folder, membuat folder baru, atau menghapus folder?",
      options: [{text:"Word"}, {text:"Powerpoint"}, {text:"File Explorer"}, {text:"Chrome"}],
      answer: "File Explorer",
      score: 7,
    },

    {
      question: "Ada berapa folder di gambar ini?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: berapaWordFiles,
      answer: "3",
      score: 7,
    },
    {
      question: "Nomor berapa yang perlu digunakan untuk menaruh gambar di Word dokumen?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: insertPicture,
      answer: "3",
      score: 8,
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'B'?",
      options: [{text:"Bold"}, {text:"Underline"}, {text:"Italic"}, {text:"Enter"}],
      answer: "Bold",
      score: 7,
    },
    {
      question: "Apakah shortcut untuk meng-copy?",
      options: [{text:"Ctrl + C"}, {text:"Ctrl + A"}, {text:"Ctrl + Z"}, {text:"Ctrl + V"}],
      answer: "Ctrl + C",
      score: 7,
    },

    {
      question: "Berapakah jumlah file di dalam folder 'MyFolder'?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: jumlahMyfolder,
      answer: "4",
      score: 7,
    },
    {
      question: "Yang manakah langkah-langkah yang paling tepat untuk membuka gmail.com?",
      options: [{text:"Ketik gmail.com di textbox nomor 2, tekan key nomor 4"},
        {text:"Ketik gmail.com di textbox nomor 2, tekan key nomor 3"},
        {text:"Ketik gmail.com di textbox nomor 1, tekan key nomor 4"},
        {text:"Ketik gmail.com di textbox nomor 1, tekan key nomor 3"}],
      image: bukaWebsite,
      answer: "Ketik gmail.com di textbox nomor 1, tekan key nomor 4",
      score: 7,
    },
  ] as QuizQuestion[],
};

export default week7;
