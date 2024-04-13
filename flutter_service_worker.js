'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f1de229e5660ed4ad6582663633f5083",
"index.html": "b08d65486f0a4763744c8f5ec088bc44",
"/": "b08d65486f0a4763744c8f5ec088bc44",
"main.dart.js": "bf3ddd54a77f7e5c7f91d0040db50c1e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "c0f977270c00d44bb9a6543472c3177c",
"icons/Icon-192.png": "2e6571d476a1786ee4234fc99647e230",
"icons/Icon-maskable-192.png": "2e6571d476a1786ee4234fc99647e230",
"icons/Icon-maskable-512.png": "97a36f681b289597b450ac8d1ad64cf5",
"icons/Icon-512.png": "97a36f681b289597b450ac8d1ad64cf5",
"manifest.json": "b1fa34fdf8c77f8596a8791b29b00af2",
"assets/AssetManifest.json": "cf821cf94e74c3370a698f391c18be4d",
"assets/NOTICES": "8fafb695e039612d02df6d2edb122e9c",
"assets/FontManifest.json": "e959a4020239da7dccbd2847bd89c10a",
"assets/AssetManifest.bin.json": "1dcbae12d7dea87e8854f581b6b48e8a",
"assets/packages/nes_ui/google_fonts/OFL.txt": "5096248a0ad125929b038a264f57b570",
"assets/packages/nes_ui/google_fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/google_wallet/assets/tr_wallet_button_primary.svg": "d384b3554e04e7e992d07c5e43d39dc4",
"assets/packages/google_wallet/assets/ky_wallet_button_condensed.svg": "a4c963a8c278588302308c9adead05ad",
"assets/packages/google_wallet/assets/ca_wallet_button_primary.svg": "4b5de96fd0f9b295a9a79be8a8d0eae0",
"assets/packages/google_wallet/assets/sl_wallet_button_condensed.svg": "9115210492785029107c6a2270ea6b81",
"assets/packages/google_wallet/assets/kk_wallet_button_condensed.svg": "21a39f7ee3011aa092e50336e7666aea",
"assets/packages/google_wallet/assets/en_IN_wallet_button_primary.svg": "684e4081529340802d4d4942dc25d109",
"assets/packages/google_wallet/assets/cz_wallet_button_primary.svg": "c7f8036327379bedddd0955644e2f252",
"assets/packages/google_wallet/assets/zh_HK_wallet_button_condensed.svg": "5f806947f0c597698e358295dc063173",
"assets/packages/google_wallet/assets/ro_wallet_button_condensed.svg": "ad0791d56b6c874cbb82ff8c56bb15e9",
"assets/packages/google_wallet/assets/nl_wallet_button_primary.svg": "272a8c010e4fe8ddcbed3171d1f091b7",
"assets/packages/google_wallet/assets/en_US_wallet_button_condensed.svg": "b7de62572ebbd02edb55b97fea662cda",
"assets/packages/google_wallet/assets/es_US_wallet_button_primary.svg": "408c67d702c409241b287933c716f5f9",
"assets/packages/google_wallet/assets/no_wallet_button_condensed.svg": "0220c67b932537d17ba33e420abc0aea",
"assets/packages/google_wallet/assets/hu_wallet_button_primary.svg": "52fe894a003f7327edba8170663ce21a",
"assets/packages/google_wallet/assets/lt_wallet_button_condensed.svg": "3f1ac0e6e13db1cf268dcd2f496c0039",
"assets/packages/google_wallet/assets/pt_wallet_button_condensed.svg": "f352fa6b49d513011e86cff7cbcbabaf",
"assets/packages/google_wallet/assets/en_IN_wallet_button_condensed.svg": "f6388525ba6256bcddd814672d4389e5",
"assets/packages/google_wallet/assets/id_wallet_button_primary.svg": "ce5884c701d800ec94ef78d308db6e64",
"assets/packages/google_wallet/assets/hr_wallet_button_primary.svg": "1ca3f09db38e1c2cc15f690d762d9180",
"assets/packages/google_wallet/assets/ka_wallet_button_condensed.svg": "e50f3f95ec1969e6b0ea749f93561bc3",
"assets/packages/google_wallet/assets/uz_wallet_button_condensed.svg": "827febbc21a67ec1504b20d7cb68cb0f",
"assets/packages/google_wallet/assets/lv_wallet_button_primary.svg": "201e043ec36c0b812149eaa82563b47b",
"assets/packages/google_wallet/assets/hy_wallet_button_condensed.svg": "aed6e8e675a57fb66de5c87f2b1c4698",
"assets/packages/google_wallet/assets/es_ES_wallet_button_primary.svg": "79b4becce2a1cdfef82f154fe9a9af1c",
"assets/packages/google_wallet/assets/uk_wallet_button_primary.svg": "863ea50d285999147c57cbb86350ede0",
"assets/packages/google_wallet/assets/jp_wallet_button_condensed.svg": "03896b8a5dad9a42adb1bb6a7b428bd4",
"assets/packages/google_wallet/assets/ky_wallet_button_primary.svg": "fbe55d976815113cd4954100a826504c",
"assets/packages/google_wallet/assets/pl_wallet_button_condensed.svg": "61a3e3b97f4595f09a6ab97b7ed486bf",
"assets/packages/google_wallet/assets/sr_wallet_button_primary.svg": "0998bd940c28a80ba68e9c5919cdd6b2",
"assets/packages/google_wallet/assets/sq_wallet_button_condensed.svg": "9564675bca05aefe7862d599824cea6f",
"assets/packages/google_wallet/assets/az_wallet_button_condensed.svg": "3b4344df734bfe74a39de5fdce795367",
"assets/packages/google_wallet/assets/bg_wallet_button_condensed.svg": "cc28fc61d74c670c93639f27ecad2ea9",
"assets/packages/google_wallet/assets/it_wallet_button_condensed.svg": "e411485b5fb9adfbd0d258ef2efe39bf",
"assets/packages/google_wallet/assets/vi_wallet_button_condensed.svg": "06b512e3f3f7aed1bf0525b54b77f53e",
"assets/packages/google_wallet/assets/ca_wallet_button_condensed.svg": "9b3e9a6746696c9989d7eb2d3ed7580d",
"assets/packages/google_wallet/assets/en_GB_wallet_button_primary.svg": "5e394579efa0e4d2462a3fa7c4a30324",
"assets/packages/google_wallet/assets/tr_wallet_button_condensed.svg": "f53e5ac42034452ff2199c06feb2974d",
"assets/packages/google_wallet/assets/hr_wallet_button_condensed.svg": "2fcae7c3192a9669df73cb297f215542",
"assets/packages/google_wallet/assets/sl_wallet_button_primary.svg": "46d510bf1bf8017a12b828991f664c55",
"assets/packages/google_wallet/assets/pt_wallet_button_primary.svg": "d1ee37067180bfe3d83e5cb190dfc44f",
"assets/packages/google_wallet/assets/he_wallet_button_condensed.svg": "997ad26fb4d19aa8026ce51b7bf89884",
"assets/packages/google_wallet/assets/es_US_wallet_button_condensed.svg": "eca6d036063e600bbd4652fba5001917",
"assets/packages/google_wallet/assets/es_419_wallet_button_condensed.svg": "0cf21c6738ddff5ef4dff455f6a3350d",
"assets/packages/google_wallet/assets/en_CA_wallet_button_primary.svg": "c7db284caf9fb7fadfe365e5e94584dd",
"assets/packages/google_wallet/assets/my_wallet_button_primary.svg": "b9c2a17d024811424f704b94a5221ba9",
"assets/packages/google_wallet/assets/ru_wallet_button_primary.svg": "c92edf4a0c610ef993e88c54a92bb9b4",
"assets/packages/google_wallet/assets/mk_wallet_button_condensed.svg": "a5be0df87def78e495dd37e784f924e0",
"assets/packages/google_wallet/assets/my_wallet_button_condensed.svg": "8630411b06e05adfc7e4ef285c55200f",
"assets/packages/google_wallet/assets/sk_wallet_button_primary.svg": "9ebd9f4e90b7460edc2dabb62efe4a3c",
"assets/packages/google_wallet/assets/uz_wallet_button_primary.svg": "0fa3101925d940650aae990da99c013f",
"assets/packages/google_wallet/assets/fr_FR_wallet_button_primary.svg": "77e7479cbed3ac241182c4e603e47b79",
"assets/packages/google_wallet/assets/dk_wallet_button_primary.svg": "3f2440412e8583b501d527a8835d4675",
"assets/packages/google_wallet/assets/lt_wallet_button_primary.svg": "02728a3a766806a440286016b8b0d977",
"assets/packages/google_wallet/assets/zh_TW_wallet_button_condensed.svg": "69473bdf975d69a2a45a75484293899a",
"assets/packages/google_wallet/assets/br_wallet_button_primary.svg": "69034d0e4fbe96daa055f59f14b94397",
"assets/packages/google_wallet/assets/en_SG_wallet_button_primary.svg": "644d79276dddb41bab47f1f2864b62ae",
"assets/packages/google_wallet/assets/by_wallet_button_condensed.svg": "a7662ba7cafbe23dcd4f84d61d50071d",
"assets/packages/google_wallet/assets/sq_wallet_button_primary.svg": "4f749b928b9e15c76add3ee9a32a986e",
"assets/packages/google_wallet/assets/es_ES_wallet_button_condensed.svg": "8f4092b9aeabeac6ba56b2b94c6b71ff",
"assets/packages/google_wallet/assets/fl_wallet_button_primary.svg": "29121627c027f93a3065c7770b8de007",
"assets/packages/google_wallet/assets/mk_wallet_button_primary.svg": "d54b7d105274653feea7d815bde1cdef",
"assets/packages/google_wallet/assets/et_wallet_button_primary.svg": "9b9851d9fa1d9c5d1ae43647647ad832",
"assets/packages/google_wallet/assets/bs_wallet_button_primary.svg": "7f26dc32009c3bdcdd0223922c7dab94",
"assets/packages/google_wallet/assets/it_wallet_button_primary.svg": "7d37a300ec48815e7e728f727fe6dde7",
"assets/packages/google_wallet/assets/fr_CA_wallet_button_primary.svg": "0e6aad49ab8b6083566a128ee5a26bd2",
"assets/packages/google_wallet/assets/fl_wallet_button_condensed.svg": "9d73c15223a8943abdf01f141ce5b6d4",
"assets/packages/google_wallet/assets/en_AU_wallet_button_primary.svg": "2612eb82e79f677c975757d97ec2de52",
"assets/packages/google_wallet/assets/gr_wallet_button_primary.svg": "9e8c6cde53bc9a2dfb8173e9af6b3304",
"assets/packages/google_wallet/assets/ro_wallet_button_primary.svg": "1491d7729e6c85fdc9c3a0a1b20e33f1",
"assets/packages/google_wallet/assets/de_wallet_button_condensed.svg": "b168e7933f4041b4eeb6916d30410039",
"assets/packages/google_wallet/assets/en_SG_wallet_button_condensed.svg": "e17bc06ff808e9e4017702ac3d28c01e",
"assets/packages/google_wallet/assets/ru_wallet_button_condensed.svg": "16138e745d66a58a7cb8cf845b10f29d",
"assets/packages/google_wallet/assets/hy_wallet_button_primary.svg": "23d9a60fcd91cbc4b8bc606255ba4f59",
"assets/packages/google_wallet/assets/ka_wallet_button_primary.svg": "fdf3c6f39bb30450fb408a13016e1575",
"assets/packages/google_wallet/assets/cz_wallet_button_condensed.svg": "82fe8e3cdffa5356e0380543f4683b2c",
"assets/packages/google_wallet/assets/et_wallet_button_condensed.svg": "62b05af6deaa442b0a92772e5082f7d0",
"assets/packages/google_wallet/assets/en_AU_wallet_button_condensed.svg": "f2ed7ab9b5e408cfecea7f932cd1e829",
"assets/packages/google_wallet/assets/gr_wallet_button_condensed.svg": "6519be79b0460e47ad3bac4e5c76274e",
"assets/packages/google_wallet/assets/bg_wallet_button_primary.svg": "de51e6a6a1a79f553362c81fcb115bf8",
"assets/packages/google_wallet/assets/se_wallet_button_primary.svg": "b7cbf672a7c76fa2b866db8c61872675",
"assets/packages/google_wallet/assets/bs_wallet_button_condensed.svg": "f85ee9046ae15cc141d006d431e4753c",
"assets/packages/google_wallet/assets/en_CA_wallet_button_condensed.svg": "ed7347971f3f38da63fa3a353fa1d1bf",
"assets/packages/google_wallet/assets/no_wallet_button_primary.svg": "ef1b1060bc300377b1a170c55435c797",
"assets/packages/google_wallet/assets/fp_wallet_button_primary.svg": "56f86f9710333ad0581f3a7d8ed3c657",
"assets/packages/google_wallet/assets/jp_wallet_button_primary.svg": "3652b471a5eba0699a4a39321270b4a1",
"assets/packages/google_wallet/assets/zh_TW_wallet_button_primary.svg": "2978c5543b4c976988e0d0b32251a210",
"assets/packages/google_wallet/assets/en_ZA_wallet_button_primary.svg": "5690da15159fda07619e638de45ea33d",
"assets/packages/google_wallet/assets/is_wallet_button_primary.svg": "cb3c716d27dc78c571bdbc9d160d671a",
"assets/packages/google_wallet/assets/he_wallet_button_primary.svg": "a6c9669b61eb02bcb3d24b9801986f54",
"assets/packages/google_wallet/assets/lv_wallet_button_condensed.svg": "5e54397529c340c5a431abdefb823f24",
"assets/packages/google_wallet/assets/zh_HK_wallet_button_primary.svg": "d76005c4492437c367ac349668fb6899",
"assets/packages/google_wallet/assets/sk_wallet_button_condensed.svg": "0d0b3bdce79456adc84f2031c584e53d",
"assets/packages/google_wallet/assets/de_wallet_button_primary.svg": "c4f083b8749b29cdb4fc0c897a4b5bac",
"assets/packages/google_wallet/assets/es_419_wallet_button_primary.svg": "51c635c02b989718d25a946fd6221530",
"assets/packages/google_wallet/assets/fr_FR_wallet_button_condensed.svg": "2b123f266da7715af1957203cb0d3b84",
"assets/packages/google_wallet/assets/sr_wallet_button_condensed.svg": "0621d013c3cb36393e2f5a10cb9ca695",
"assets/packages/google_wallet/assets/th_wallet_button_condensed.svg": "54235a7d84eb3872470ab14822be8bb2",
"assets/packages/google_wallet/assets/fr_CA_wallet_button_condensed.svg": "d9761af1d0998d0303c9079b37f99d62",
"assets/packages/google_wallet/assets/ar_wallet_button_condensed.svg": "a4f4977e753024e30c90f8bf207a360f",
"assets/packages/google_wallet/assets/by_wallet_button_primary.svg": "deb42ee451e45251299dd61187fe7705",
"assets/packages/google_wallet/assets/uk_wallet_button_condensed.svg": "a0e680dfdd829d8b264f3a57096a34cb",
"assets/packages/google_wallet/assets/ar_wallet_button_primary.svg": "260159159e270d1415a1efa00c8a6a76",
"assets/packages/google_wallet/assets/se_wallet_button_condensed.svg": "50a1f038bb8f299f697f41d55403f0a6",
"assets/packages/google_wallet/assets/az_wallet_button_primary.svg": "90f2e2d3c4de0f883c99b4085b8fc866",
"assets/packages/google_wallet/assets/kk_wallet_button_primary.svg": "a3d875aeed8ab306f7469460453273af",
"assets/packages/google_wallet/assets/vi_wallet_button_primary.svg": "9672cf033497f6730d7c3c374222718b",
"assets/packages/google_wallet/assets/nl_wallet_button_condensed.svg": "861f9e2bd43b92dbd6def9a07aa48631",
"assets/packages/google_wallet/assets/dk_wallet_button_condensed.svg": "6ee6ab67841ba870f31ec300d12f734e",
"assets/packages/google_wallet/assets/en_GB_wallet_button_condensed.svg": "d6395ad1b9b061acef26417a04477adf",
"assets/packages/google_wallet/assets/id_wallet_button_condensed.svg": "590b3141d2d9adfd1c32bbc8426d96e3",
"assets/packages/google_wallet/assets/th_wallet_button_primary.svg": "d8e936ddb250181ef216fadd70470b66",
"assets/packages/google_wallet/assets/fp_wallet_button_condensed.svg": "3e42d792fa586f7e9ac014d2a27992b5",
"assets/packages/google_wallet/assets/is_wallet_button_condensed.svg": "255356758290070c55593aaf05c22f0f",
"assets/packages/google_wallet/assets/en_ZA_wallet_button_condensed.svg": "8b01291cd9e8bc9050d3cf4fa4a4dd60",
"assets/packages/google_wallet/assets/br_wallet_button_condensed.svg": "2fd345513b4e4d9b46f11e8c9c915c4e",
"assets/packages/google_wallet/assets/en_US_wallet_button_primary.svg": "942f89835971592cbf7d716aed8a00f5",
"assets/packages/google_wallet/assets/pl_wallet_button_primary.svg": "0687e88f92f98b8363d0148c2b5b63d0",
"assets/packages/google_wallet/assets/hu_wallet_button_condensed.svg": "f218c201a311f880b476984129fbfcd3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "85c76b60f9b9cc6a8a0f466fe8ac08a1",
"assets/fonts/MaterialIcons-Regular.otf": "1b7ffcb86dd010ead0e73476bc360b98",
"assets/assets/music/summer_park.mp3": "500e49f581463cd018f50adbb3573bde",
"assets/assets/music/CREDITS.TXT": "76c2c10fe9833d945ac41f615fdcca10",
"assets/assets/music/long_away_home.wav": "6ce7a9112bc1a5d279737e16794b86ea",
"assets/assets/images/whaley_happy.png": "0a52d707c3ce0b763e9d9bed69027a31",
"assets/assets/images/ultimateChampion.png": "a6d015d7b00e19f6f22a63c7ec03cbe2",
"assets/assets/images/bg_splash.png": "1d16b423895b5f92f39b6d82cb4f0154",
"assets/assets/images/black_swabs.png": "b7988b97db4f26d629efa56afd875cde",
"assets/assets/images/whaleBuddy.png": "41171c6395aff3e2fa80394a619a6673",
"assets/assets/images/yellow_tray.png": "bd82ea3829998037492f33a0ffb1073e",
"assets/assets/images/yellow_pot.png": "585b2680981aa263a2f30fb9b1f9d7ec",
"assets/assets/images/bonus_full_row.png": "01c9244c47e3669e0b798682961b9561",
"assets/assets/images/blue_newspaper.png": "b97517c96b82025ced0580f64cdbbf70",
"assets/assets/images/green_apple.png": "8bc0775a938bd291a521cbd1c14bf2ff",
"assets/assets/images/green_nutshell.png": "2e555bbd575c80a877064cb52bb0d680",
"assets/assets/images/blue_towels.png": "d05b8be5e39842dbc7cbb1f5d2e1facd",
"assets/assets/images/bg_clean.png": "b40ef6fc64012bd93aaa24fab60bab99",
"assets/assets/images/blue_carton.png": "372c51ddaaa4a5fbab07d916076dc86f",
"assets/assets/images/red_cleaner.png": "333c01d1ddd405f59c706d13d3e20729",
"assets/assets/images/whaley_sad.png": "0eeb1b6e0b9fc39e5609a917ce6dc01e",
"assets/assets/images/lock.png": "1d595e246f013c8d890cbabeebfba322",
"assets/assets/images/banner.png": "e2cc265b53d068fe3ad44230e83f2c88",
"assets/assets/images/bonus_highspeed.png": "0e6174ad20e4b8ea9d0cc5d834659f68",
"assets/assets/images/blue_paper.png": "db2f2dd876e3c6a091cdebe3733b55fa",
"assets/assets/images/bonus_battery.png": "8c2baf3c1328a7c2345b05b02e39aca7",
"assets/assets/images/black_cup.png": "9a336eb380c6f69e392b1638afaac57a",
"assets/assets/images/ecoWarrior.png": "cfc5ea300cd2a7dd7fa254c83af826df",
"assets/assets/images/red_oil.png": "320120d00fcc266a21e30af581ca6551",
"assets/assets/images/black_shoe.png": "db35c93dad43aadbecaffe01c5449374",
"assets/assets/images/star_blue.png": "53c78e3b92208a9017c54cee4cc2aac3",
"assets/assets/images/black_chips.png": "b719c8263355f5d33aac8eba9ac40d41",
"assets/assets/images/README.md": "542268c3df538d0ff84c881a2ca8019b",
"assets/assets/images/green_bread.png": "25674f74211871ffe0280bf9a00031de",
"assets/assets/images/whaley_neutral.png": "d9bfdd329ee770484dd2af1cf620ed1c",
"assets/assets/images/level.png": "e07597d6c7d9edf629fcc8f0754a1aa1",
"assets/assets/images/logo.png": "657c18d2fe4a0f0e12f733645335361d",
"assets/assets/images/oceanGuardian.png": "c7fdb390c29d8db191021a162bc4ec34",
"assets/assets/images/yellow_tin.png": "672227cb703e7aa7fb251e47d2b3e119",
"assets/assets/images/yellow_can.png": "5978198c216664ffc2417b20c6b26b5a",
"assets/assets/images/black_dish.png": "eaafe4576fa903aca6d71fa8701f284c",
"assets/assets/images/green_eggshell.png": "f0ba2b8b5cb2aef87e8da0cbbc3db255",
"assets/assets/images/red_phone.png": "6abb94f3ac68697ab251af94300dfd33",
"assets/assets/images/star_gold.png": "cd946ee22a8f27c3448f8df830793079",
"assets/assets/images/yellow_bottle.png": "99871d12ff2d74e2549c3e2d2e86e4ff",
"assets/assets/images/green_leaves.png": "37b6a7c4d24f2bd4cb5a0c95011ea817",
"assets/assets/images/bins.png": "eb3bb0b1b4d4f8a1a84e14653eb1b202",
"assets/assets/images/red_thermometer.png": "0bfa518840fc6e9d8902fa054d8e29a8",
"assets/assets/images/recyclingHero.png": "000490837ef8294eb1812e4dce862346",
"assets/assets/images/blue_box.png": "1a2112f37088c77580f0d9f8c8bf13d5",
"assets/assets/images/bonus_five_rows.png": "0d699264cb1df4aa54c4dadd25214304",
"assets/assets/images/red_danger.png": "578b3c2f68605c5e25e270e1fbee62b6",
"assets/assets/images/whaley_speaking.png": "a28e0477009ee68198e4ee6718524898",
"assets/assets/sfx/whoHoo.m4a": "bff0ddeac3844d5791e0238c5bbc6861",
"assets/assets/sfx/click3.mp3": "23f7ef1589277fc59d0b297db8d0297f",
"assets/assets/sfx/CREDITS.TXT": "9d7cd11ffdcd07e867f7566e13e0fd31",
"assets/assets/sfx/click2.mp3": "e7c23ca3c1bd7c9c3285c9e60f27504c",
"assets/assets/sfx/click1.mp3": "10dfe538c54ddca1d967034637a37cbb",
"assets/assets/sfx/click4.mp3": "fc48c687051776935ee27782a6ee5648",
"assets/assets/sfx/ohNo.m4a": "210a46d71030870566a2de75a766a695",
"assets/assets/json/questions.json": "a740973bbb5b15ef0cf3b308ff52d309",
"assets/assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
