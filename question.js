// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Dân chủ là gì ?",
  answer: "C. Là quyền lực của nhân dân, thuộc về nhân dân",
  options: [
    "A. Là quyền tự do của mỗi người",
    "B. Là quyền của con người",
    "C. Là quyền lực của nhân dân, thuộc về nhân dân",
    "D. Là trật tự xã hội"
  ]
},
  {
  numb: 2,
  question: "Cụm từ “Demoskratos” được hiểu là dân chủ, trong đó từ “Demos” có nghĩa là gì ?",
  answer: "B. Nhân dân",
  options: [
    "A. Dân quyền",
    "B. Nhân dân",
    "C. Quyền lực",
    "D. Cai trị"
  ]
},
  {
  numb: 3,
  question: "Cụm từ “Demoskratos” được hiểu là dân chủ, trong đó từ “Kratos” có nghĩa là gì ?",
  answer: "C. Quyền lực",
  options: [
    "A. Quyền hạn",
    "B. Nhân dân",
    "C. Quyền lực",
    "D. Trách nhiệm"
  ]
},
  {
  numb: 4,
  question: "Theo quan điểm của chủ nghĩa Mác Lênin, nội dung nào sau đây là nội dung cơ bản của dân chủ ?",
  answer: "D. Tất cả các phương án trên đều đúng",
  options: [
    "A. Dân chủ là quyền lực thuộc về nhân dân, nhân dân là chủ nhân của nhà nước",
    "B. Dân chủ là một hình thức hay hình thái nhà nước, là chính thể dân chủ hay chế độ dân chủ",
    "C. Dân chủ là một nguyên tắc - nguyên tắc dân chủ",
    "D. Tất cả các phương án trên đều đúng"
  ]
},
  {
  numb: 5,
  question: "Trong lịch sử nhân loại, có bao nhiêu nền (chế độ) dân chủ ?",
  answer: "A. 3",
  options: [
    "A. 3",
    "B. 4",
    "C. 5",
    "D. 1"
  ]
},
  {
  numb: 6,
  question: "Khi Cách mạng xã hội chủ nghĩa Tháng Mười Nga thắng lợi (1917) đã thiết lập kiểu nhà nước nào ?",
  answer: "D. Nhà nước xã hội chủ nghĩa",
  options: [
    "A. Nhà nước chủ nô",
    "B. Nhà nước phong kiến",
    "C. Nhà nước tư sản",
    "D. Nhà nước xã hội chủ nghĩa"
  ]
},
  {
  numb: 7,
  question: "Nền dân chủ chủ nô gắn với chế độ nào ?",
  answer: "B. Chế độ chiếm hữu nô lệ",
  options: [
    "A. Chế độ tư bản chủ nghĩa",
    "B. Chế độ chiếm hữu nô lệ",
    "C. Chế độ xã hội chủ nghĩa",
    "D. Chế độ tư sản"
  ]
},
{
  numb: 8,
  question: "Khi Cách mạng xã hội chủ nghĩa Tháng Mười Nga thắng lợi (1917) đã thiết lập kiểu nền dân chủ nào ?",
  answer: "A. Nền dân chủ vô sản",
  options: [
    "A. Nền dân chủ vô sản",
    "B. Nền dân chủ chủ nô",
    "C. Nền dân chủ tư sản",
    "D. Các đáp án trên đều sai"
  ]
},
{
  numb: 9,
  question: "Trong các hình thái nhà nước hình thái nào có dân chủ ?",
  answer: "C. Nô lệ - Tư bản chủ nghĩa - Xã hội chủ nghĩa",
  options: [
    "A. Nguyên thủy - Phong kiến - Tư bản chủ nghĩa",
    "B. Nô lệ - Tư bản chủ nghĩa - Cộng sản chủ nghĩa",
    "C. Nô lệ - Tư bản chủ nghĩa - Xã hội chủ nghĩa",
    "D. Nô lệ - Phong kiến - Tư bản chủ nghĩa"
  ]
},
{
  numb: 10,
  question: "Đâu là quan niệm của Mác Lênin về dân chủ ?",
  answer: "B. Dân chủ là sự thống trị của đa số",
  options: [
    "A. Dân chủ là dân là chủ và dân làm chủ",
    "B. Dân chủ là sự thống trị của đa số",
    "C. Dân chủ là một thể chế chính trị",
    "D. Dân chủ là một chế độ xã hội"
  ]
},
{
  numb: 11,
  question: ". Bản chất chính trị của nền dân chủ xã hội chủ nghĩa mang bản chất giai cấp nào ?",
  answer: "B.	Giai cấp công nhân",
  options: [
    "A.	Giai cấp nông dân",
    "B.	Giai cấp công nhân",
    "C.	Giai cấp tư sản",
    "D.	Giai cấp vô sản"
  ]
},
{
  numb: 12,
  question: ". Điền từ vào chỗ trống (…): Xét về bản chất chính trị, dân chủ xã hội chủ nghĩa vừa có bản chất giai cấp công nhân, vừa có tính nhân dân rộng rãi, tính (…) sâu sắc ?",
  answer: "C. Dân tộc",
  options: [
    "A.	Giai cấp",
    "B.	Nhân văn",
    "C. Dân tộc",
    "D.	Xã hội"
  ]
},
{
  numb: 13,
  question: "Bầu cử Quốc hội là hình thức dân chủ nào ?",
  answer: "B.	Dân chủ gián tiếp",
  options: [
    "A.	Dân chủ trực tiếp",
    "B.	Dân chủ gián tiếp",
    "C. A và B đều ĐÚNG",
    "D. A và B đều SAI" 
  ]
},
{
  numb: 14,
  question: "Thực hiện chế độ công hữu về tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu. Đây là bản chất nào của nền dân chủ xã hội chủ nghĩa ?",
  answer: "B.	Bản chất kinh tế",
  options: [
    "A.	Bản chất chính trị",
    "B.	Bản chất kinh tế",
    "C.	Bản chất tư tưởng - văn hoá xã hội",
    "D.	Tất cả đều đúng"
  ]
},
{
  numb: 15,
  question: "Nền dân chủ xã hội chủ nghĩa là nền dân chủ ?",
  answer: "D. Tất cả các phương án trên đều đúng",
  options: [
    "A. Mọi quyền lực thuộc về nhân dân, dân là chủ và dân làm chủ",
    "B.	Dân chủ và pháp luật nằm trong sự thống nhất biện chứng",
    "C. Được thực hiện bằng nhà nước pháp quyền xã hội chủ nghĩa, đặt dưới sự lãnh đạo của Đảng Cộng sản",
    "D. Tất cả các phương án trên đều đúng"
  ]
},
{
  numb: 16,
  question: "Nền dân chủ xã hội chủ nghĩa chính thức được xác lập khi nào ?",
  answer: "B.	Cách mạng Tháng Mười Nga (1917)",
  options: [
    "A.	Thực tiễn đấu tranh giai cấp ở Pháp và Công xã Pari năm 1871",
    "B.	Cách mạng Tháng Mười Nga (1917)",
    "C.	Cả A, B đều đúng",
    "D. Không có câu trả lời đúng"
  ]
},
{
  numb: 17,
  question: "Dưới góc độ bản chất nào, dân chủ được xem là một thành tựu văn hoá, một quá trình sáng tạo văn hoá, thể hiện khát vọng tự do được sáng tạo và phát triển của con người ?",
  answer: "C.	Bản chất tư tưởng - văn hoá xã hội",
  options: [
    "A. Bản chất kinh tế",
    "B.	Bản chất chính trị",
    "C.	Bản chất tư tưởng - văn hoá xã hội",
    "D.	Tất cả đều đúng"
  ]
},
{
  numb: 18,
  question: "Nền dân chủ xã hội chủ nghĩa dựa trên hệ tư tưởng nào làm nền tảng chủ đạo đối với mọi loại hình thái ý thức xã hội khác trong xã hội mới ?",
  answer: "C.	Mác - Lênin",
  options: [
    "A.	Giai cấp công nhân",
    "B.	Giai cấp nông dân",
    "C.	Mác - Lênin",
    "D.	Giai cấp tư sản"
  ]
},
{
  numb: 19,
  question: "Bản chất của nền dân chủ xã hội chủ nghĩa được thực hiện trên các khía cạnh nào ?",
  answer: "D.	Kinh tế, chính trị, tư tưởng - văn hoá xã hội",
  options: [
    "A.	Kinh tế, tư tưởng - văn hoá xã hội",
    "B.	Kinh tế, chính trị",
    "C.	Chính trị, tư tưởng - văn hoá xã hội",
    "D.	Kinh tế, chính trị, tư tưởng - văn hoá xã hội"
  ]
},
{
  numb: 20,
  question: "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa là ?",
  answer: "B.	Dưới sự lãnh đạo duy nhất của một Đảng của giai cấp công nhân (Đảng Mác Lênin)",
  options: [
    "A.	Dưới sự lãnh đạo của nhiều Đảng của giai cấp nông dân (Đảng Mác Lênin)",
    "B.	Dưới sự lãnh đạo duy nhất của một Đảng của giai cấp công nhân (Đảng Mác Lênin)",
    "C.	Cả A, B đều đúng",
    "D.	Cả A, B đều sai"
  ]
},
];