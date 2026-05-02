const recipes = [
  {
    title: "法式紅酒燉牛肉烤箱版",
    desc: "牛肋條、紅酒、洋蔥、紅蘿蔔、蘑菇放入鑄鐵鍋，先爐上煎香，再進烤箱慢燉。",
    image: "assets/20_法式紅酒燉牛肉烤箱版.png"
  },
  {
    title: "奶油蘑菇雞肉焗飯",
    desc: "雞腿肉、蘑菇、洋蔥、白醬、米飯拌勻，鋪起司後烤至金黃。",
    image: "assets/01_奶油蘑菇雞肉焗飯.png"
  },
  {
    title: "番茄海鮮烤燉飯",
    desc: "蝦、蛤蜊、花枝、番茄、白酒與米放入鍋中，交給烤箱慢慢收汁成濃郁燉飯。",
    image: "assets/02_番茄海鮮烤燉飯.png"
  },
  {
    title: "普羅旺斯香草烤雞腿",
    desc: "雞腿排搭配馬鈴薯、櫛瓜、甜椒、迷迭香，用琺瑯烤盤一盤完成。",
    image: "assets/03_普羅旺斯香草烤雞腿.png"
  },
  {
    title: "白酒蒜香蛤蜊烤鍋",
    desc: "蛤蜊、蒜末、白酒、奶油放入小圓鍋，進烤箱烘烤後撒上巴西里。",
    image: "assets/04_白酒蒜香蛤蜊烤鍋.png"
  },
  {
    title: "南法蔬菜燉烤鍋",
    desc: "茄子、櫛瓜、番茄、甜椒層層排入鍋中，烤到蔬菜軟甜入味。",
    image: "assets/05_南法蔬菜燉烤鍋.png"
  },
  {
    title: "起司肉醬千層麵",
    desc: "肉醬、白醬、千層麵皮與起司層疊在烤盤中，烤成濃郁主餐。",
    image: "assets/06_起司肉醬千層麵.png"
  },
  {
    title: "香草蒜味烤豬肩肉",
    desc: "豬肩肉抹上蒜泥、芥末與香草，放入鑄鐵鍋中低溫慢烤。",
    image: "assets/07_香草蒜味烤豬肩肉.png"
  },
  {
    title: "地中海番茄燉魚",
    desc: "白肉魚、番茄、橄欖、酸豆、洋蔥放入鍋中烤燉，清爽但很下飯。",
    image: "assets/08_地中海番茄燉魚.png"
  },
  {
    title: "奶油南瓜雞肉烤麵",
    desc: "南瓜泥、雞肉、筆管麵、鮮奶油與起司拌勻後焗烤。",
    image: "assets/09_奶油南瓜雞肉烤麵.png"
  },
  {
    title: "匈牙利紅椒牛肉鍋",
    desc: "牛肉、洋蔥、紅椒粉、番茄與高湯放入鑄鐵鍋，烤箱慢燉至軟嫩。",
    image: "assets/10_匈牙利紅椒牛肉鍋.png"
  },
  {
    title: "蒜香奶油烤鮭魚佐蔬菜",
    desc: "鮭魚排與花椰菜、馬鈴薯、玉米筍一起放入琺瑯烤盤烘烤。",
    image: "assets/11_蒜香奶油烤鮭魚佐蔬菜.png"
  },
  {
    title: "韓式泡菜豬肉焗飯",
    desc: "泡菜、豬五花、白飯、韓式辣醬炒香後進烤盤，鋪起司焗烤。",
    image: "assets/12_韓式泡菜豬肉焗飯.png"
  },
  {
    title: "義式肉丸番茄烤鍋",
    desc: "手工肉丸放入番茄醬汁中，進烤箱烤熟，最後加莫札瑞拉起司。",
    image: "assets/13_義式肉丸番茄烤鍋.png"
  },
  {
    title: "奶油培根馬鈴薯焗烤",
    desc: "馬鈴薯片、培根、鮮奶油、蒜末與起司層疊，烤至表面焦香。",
    image: "assets/14_奶油培根馬鈴薯焗烤.png"
  },
  {
    title: "摩洛哥香料雞肉燉鍋",
    desc: "雞腿、鷹嘴豆、番茄、孜然、肉桂與檸檬用鑄鐵鍋烤燉。",
    image: "assets/15_摩洛哥香料雞肉燉鍋.png"
  },
  {
    title: "日式味噌奶油烤鮭魚鍋",
    desc: "鮭魚、高麗菜、菇類、玉米、味噌與奶油放入鍋中烤熟，鹹香溫潤。",
    image: "assets/16_日式味噌奶油烤鮭魚鍋.png"
  },
  {
    title: "焗烤咖哩雞肉飯",
    desc: "咖哩雞與米飯拌入烤盤，鋪上起司，用烤箱烤成濃厚焗飯。",
    image: "assets/17_焗烤咖哩雞肉飯.png"
  },
  {
    title: "烤箱版蔥蒜雞肉煲仔飯",
    desc: "米、雞腿肉、香菇、蔥蒜醬油調味後放入鑄鐵鍋，烤出鍋巴香氣。",
    image: "assets/18_烤箱版蔥蒜雞肉煲仔飯.png"
  },
  {
    title: "西班牙風烤海鮮飯",
    desc: "米、番紅花或薑黃、蝦、蛤蜊、雞肉與甜椒放入淺烤鍋，烤至米粒吸滿湯汁。",
    image: "assets/19_西班牙風烤海鮮飯.png"
  }
];

const grid = document.querySelector("#recipeGrid");
const template = document.querySelector("#recipeCardTemplate");
const searchInput = document.querySelector("#searchInput");
const matchCount = document.querySelector("#matchCount");
const showAllBtn = document.querySelector("#showAllBtn");

function renderRecipes() {
  recipes.forEach((recipe, index) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".recipe-card");
    const button = node.querySelector(".flip-card");
    const number = node.querySelector(".card-number");
    const title = node.querySelector(".recipe-title");
    const desc = node.querySelector(".recipe-desc");
    const img = node.querySelector("img");
    const caption = node.querySelector(".image-caption");

    card.dataset.search = `${recipe.title} ${recipe.desc}`.toLowerCase();
    number.textContent = String(index + 1).padStart(2, "0");
    title.textContent = recipe.title;
    desc.textContent = recipe.desc;
    img.src = recipe.image;
    img.alt = `${recipe.title} 圖片`;
    caption.textContent = recipe.title;
    button.setAttribute("aria-label", `翻面查看 ${recipe.title} 的圖片`);

    button.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
      const flipped = card.classList.contains("is-flipped");
      button.setAttribute("aria-label", flipped ? `翻回 ${recipe.title} 的料理說明` : `翻面查看 ${recipe.title} 的圖片`);
    });

    grid.appendChild(node);
  });
}

function filterRecipes() {
  const keyword = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll(".recipe-card").forEach((card) => {
    const isMatch = card.dataset.search.includes(keyword);
    card.classList.toggle("is-hidden", !isMatch);
    if (isMatch) visibleCount += 1;
  });

  matchCount.textContent = visibleCount;
}

renderRecipes();

searchInput.addEventListener("input", filterRecipes);

showAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".recipe-card").forEach((card) => {
    card.classList.remove("is-flipped");
  });
});
