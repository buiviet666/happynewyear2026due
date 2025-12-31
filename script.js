

const FIREWORK_CONTAINER = document.querySelector(".card");

const field=document.querySelector('.diamond-field');

for(let i=0;i<26;i++){
  const d=document.createElement('div');
  d.className='diamond';
  d.innerText='✦';
  d.style.left=Math.random()*100+'%';
  d.style.top=Math.random()*100+'%';
  d.style.animationDelay=Math.random()*4+'s';
  d.style.fontSize=(Math.random()*10+12)+'px';
  field.appendChild(d);
}


const toggle = document.getElementById('musicToggle');
const bgm = document.getElementById('bgm');
const source = document.getElementById('bgmSource');

let isPlay = false;
let isLoaded = false;

toggle.addEventListener('click', async () => {
  try {
    if (!isLoaded) {
      bgm.load();
      isLoaded = true;
    }

    if (!isPlay) {
      await bgm.play();
      toggle.innerText = '❚❚';
    } else {
      bgm.pause();
      toggle.innerText = '♫';
    }

    isPlay = !isPlay;
  } catch (err) {
    console.log('Audio blocked:', err);
  }
});



const wishes = [
  "🌸 Chúc em một năm mới xinh hơn hôm qua, giàu hơn hôm nay và vui hơn hôm kia 😆",
  "✨ Chúc em năm mới tiền vào như nước, nỗi buồn trôi như mây ☁️",
  "🏸 Mong em smash cầu lông đâu thắng đó, mở ví ra là thấy tiền đầy 😝",
  "💖 Chúc em năm nay yêu đời hơn, cười nhiều hơn và được thương thật nhiều",
  "🧧 Chúc em và gia đình năm mới an khang, hạnh phúc và sum vầy ấm áp",
  "📜 Mong em viết thơ đâu là hay đó, đăng bài đâu là được thả tim 💘",
  "🍀 Chúc em mở mắt ra là thấy vui, nhắm mắt vào là mơ toàn điều tốt đẹp 😴",
  "🎉 Chúc em năm nay lúc nào cũng tươi như hoa, rạng rỡ như nắng 🌼",
  "💫 Mong em ngủ ngon hơn, stress ít hơn và tiền tiêu thì dư dả hơn 💵",
  "🐰 Chúc gia đình em một năm mới vui như hội, ấm như bếp lửa và đầy ắp yêu thương 🏡",
  "😆 Mong em smash nhẹ cái là win, crush thích nhẹ cái là gật đầu 😝",
  "🎀 Chúc em luôn là “nhân vật chính” trong mọi cuộc vui và mọi câu chuyện đẹp",
  "🍓 Năm mới mong em bớt deadline, thêm tiền thưởng và thêm nhiều ngày nghỉ 😆",
  "🌈 Chúc em & gia đình thuận buồm xuôi gió, làm gì cũng gặp may mắn",
  "💝 Mong em năm nay nhiều năng lượng tích cực, nhiều nụ cười và nhiều điều bất ngờ dễ thương ✨",
  "🏆 Chúc em khỏe như vận động viên, vui như trẻ nhỏ và giàu như kho báu 😝",
  "🎊 Năm mới mong gia đình em sum vầy ấm áp, tiếng cười vang khắp nhà",
  "🌟 Chúc em một năm mới thật rực rỡ, thật hạnh phúc và thật nhiều điều tốt đẹp",
  "🍀 Mong em đi đâu cũng gặp hên, làm gì cũng được thương 💖",
  "🎶 Chúc em một năm mới nhẹ nhàng, an yên và tràn đầy những khoảnh khắc đáng nhớ",
  "🧘‍♀️ Chúc em năm mới lưng hết mỏi, cổ hết đau, sáng dậy người nhẹ tênh như mây ☁️",
  "💆‍♀️ Mong em năm nay ngủ dậy không còn kêu “ôi cái lưng tui”, thay vào đó là cười tươi cả ngày 😆",
  "🌿 Chúc em lưng khỏe – dáng xinh – tinh thần lúc nào cũng phơi phới",
  "🛌 Mong năm mới mang đến cho em những giấc ngủ sâu, sáng dậy lưng không nhức, cổ không mỏi",
  "💖 Chúc em hết đau lưng, hết mỏi vai, hết stress và thêm thật nhiều năng lượng tích cực",
  "🌸 Mong em luôn khỏe từ trong ra ngoài, lưng êm – người nhẹ – lòng vui",
  "🍀 Chúc em mỗi sáng thức dậy đều thấy khoan khoái, dễ chịu và tràn đầy sức sống",
  "✨ Chúc em năm mới body nhẹ tênh, tinh thần thoải mái, làm gì cũng thấy dễ chịu",
  "💫 Mong em đi làm không mỏi lưng, về nhà không mỏi cổ, cả ngày chỉ toàn là dễ chịu thôi"
];


const wishEl = document.getElementById("wishText");

let typingTimer = null;
let autoTimer = null;
let isTyping = false;

function typeWish(text) {
  // Kill mọi typing cũ
  if (typingTimer) clearInterval(typingTimer);

  isTyping = true;
  wishEl.innerHTML = "";
  wishEl.style.opacity = 1;

  let i = 0;
  typingTimer = setInterval(() => {
    wishEl.innerHTML += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(typingTimer);
      typingTimer = null;
      isTyping = false;
    }
  }, 45);
}

function randomWish() {
  return wishes[Math.floor(Math.random() * wishes.length)];
}

function startAutoWish() {
  if (autoTimer) clearInterval(autoTimer);

  autoTimer = setInterval(() => {
    if (!isTyping) {
      typeWish(randomWish());
    }
  }, 9000);
}

// Nút đổi lời chúc
document.getElementById("changeWish").onclick = () => {
  typeWish(randomWish());
};

// Init
typeWish(randomWish());
startAutoWish();


const petals = document.getElementById("petals");
const icons = ["🌸","🧧"];
setInterval(()=>{
  const p=document.createElement("span");
  p.innerText = icons[Math.random()*icons.length|0];
  p.style.left = Math.random()*100+"%";
  p.style.animationDuration = 8+Math.random()*6+"s";
  petals.appendChild(p);
  setTimeout(()=>p.remove(),15000);
},500);




