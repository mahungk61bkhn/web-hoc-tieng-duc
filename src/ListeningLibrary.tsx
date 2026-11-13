import { ArrowUpRight, Headphones } from 'lucide-react';
import './listening-library.css';

const lessons = [
  { level: 'B1', title: 'Tin nhắn về lịch hẹn', topic: 'Đời sống · Nghe thông báo ngắn', description: 'Nghe một lời nhắn và tìm thông tin liên quan đến cuộc hẹn.', audio: 'https://bfu.goethe.de/medien/b1_m/audio1.mp4', source: 'https://bfu.goethe.de/b1_mod/hoeren.php', exercise: 'Teil 1 · Text 1' },
  { level: 'B1', title: 'Tham quan bảo tàng Munich', topic: 'Du lịch · Nghe hướng dẫn', description: 'Nghe hướng dẫn viên giới thiệu chuyến tham quan và tìm các thông tin chính.', audio: 'https://bfu.goethe.de/medien/b1_m/audio6.mp4', source: 'https://bfu.goethe.de/b1_mod/hoeren.php', exercise: 'Teil 2 · Câu 11–15' },
  { level: 'B1', title: 'Trò chuyện về một buổi tiệc', topic: 'Giao tiếp · Hội thoại', description: 'Nghe 2 người trò chuyện về một buổi tiệc và ghi lại các chi tiết được nhắc đến.', audio: 'https://bfu.goethe.de/medien/b1_m/audio7.mp4', source: 'https://bfu.goethe.de/b1_mod/hoeren.php', exercise: 'Teil 3 · Câu 16–22' },
  { level: 'B2', title: 'Thực phẩm trong tương lai', topic: 'Khoa học · Phỏng vấn', description: 'Nghe một cuộc phỏng vấn về thực phẩm, sản xuất nông nghiệp và những lựa chọn trong tương lai.', audio: 'https://bfu.goethe.de/medien/b2_16/audio2.mp4', source: 'https://bfu.goethe.de/b2_mod_2MX6/hoeren.php', exercise: 'Teil 2 · Câu 11–16' },
  { level: 'B2', title: 'Những hình thức sống chung', topic: 'Xã hội · Thảo luận', description: 'Nghe cuộc trò chuyện về các hình thức sống chung và quan điểm của những người tham gia.', audio: 'https://bfu.goethe.de/medien/b2_16/audio3.mp4', source: 'https://bfu.goethe.de/b2_mod_2MX6/hoeren.php', exercise: 'Teil 3 · Câu 17–22' },
  { level: 'B2', title: 'Phương pháp làm việc hiệu quả', topic: 'Công việc · Bài nói', description: 'Nghe bài nói về khả năng tập trung, việc xử lý nhiều nhiệm vụ và thời gian nghỉ.', audio: 'https://bfu.goethe.de/medien/b2_16/audio4.mp4', source: 'https://bfu.goethe.de/b2_mod_2MX6/hoeren.php', exercise: 'Teil 4 · Câu 23–30' },
];

export default function ListeningLibrary() {
  return <section className="listeningLibrary" aria-labelledby="library-title">
    <div className="listeningIntro"><span className="pill"><Headphones size={14}/> THƯ VIỆN BÀI NGHE · B1–B2</span><h2 id="library-title">Luyện nghe với Goethe-Institut</h2><p>Chọn một chủ đề, nghe và ghi lại ý chính. Mở bài tập gốc để trả lời câu hỏi và kiểm tra kết quả.</p></div>
    <div className="listeningCards">{lessons.map(lesson => <article className="listeningCard panel" key={lesson.audio}>
      <div className="listeningCardTop"><span className="listeningLevel">{lesson.level}</span><span>{lesson.topic}</span></div>
      <h3>{lesson.title}</h3><p>{lesson.description}</p>
      <audio controls preload="none" aria-label={'Nghe bài ' + lesson.title} src={lesson.audio}>Trình duyệt không hỗ trợ phát âm thanh. Hãy mở bài tập gốc để nghe.</audio>
      <div className="listeningCardFooter"><span>Goethe-Institut · {lesson.exercise}</span><a href={lesson.source} target="_blank" rel="noopener noreferrer">Mở bài tập gốc <ArrowUpRight size={15}/><span className="visuallyHidden"> (mở trong thẻ mới)</span></a></div>
    </article>)}</div>
    <p className="listeningNote">Âm thanh được phát từ máy chủ Goethe-Institut và cần kết nối Internet. Nếu không phát được, hãy mở bài tập gốc để nghe trực tiếp.</p>
  </section>;
}
