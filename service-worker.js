if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404.html",revision:"b9a23bb0708b75756d3d27f817f1040c"},{url:"/404/index.html",revision:"b9a23bb0708b75756d3d27f817f1040c"},{url:"/advanced-mining/index.html",revision:"309ad09c00ced0eba64f480cb4bbd67b"},{url:"/assets/css/0.styles.35b62a4b.css",revision:"144bca19541a9c39fcb410a356834c12"},{url:"/assets/data/404/index.json",revision:"60d6b504837d425775ba8c74a67be322"},{url:"/assets/data/advanced-mining/index.json",revision:"ce4319a7de83a18078aef342c770fe7a"},{url:"/assets/data/author/7dev7urandom/index.json",revision:"48611af0e64c324eba26e72d7d9f0c12"},{url:"/assets/data/author/enderzombi102/index.json",revision:"d7d50b3674a834d134d3a3d424790f39"},{url:"/assets/data/author/gamemode-one/index.json",revision:"449d5baa429fc9fce90fb0b07aad3cf3"},{url:"/assets/data/author/joelant05/index.json",revision:"12d654be1abf18edf26347112b9aba1f"},{url:"/assets/data/author/montudor/index.json",revision:"5734680622d3c356bdd3f5ede9460d5e"},{url:"/assets/data/author/solveddev/index.json",revision:"4f6c3dcec61d773d98331f4bca5ca8f8"},{url:"/assets/data/creations/index.json",revision:"68182b070ed2985fa63884d79c6ad440"},{url:"/assets/data/editor-docs/faq/index.json",revision:"cd7e606f46eeb159dd6799b57a2914c9"},{url:"/assets/data/editor-docs/features/index.json",revision:"e3b7410e373213e5bee42ac8186934d9"},{url:"/assets/data/editor-docs/getting-started/index.json",revision:"3c60f25bb1032e0f0bc75a1e6d443cc6"},{url:"/assets/data/editor-docs/index.json",revision:"0444a63e34ff303bcfcef4eebca93540"},{url:"/assets/data/editor-docs/other/molang/index.json",revision:"ca062f06e7d77ae4e44c56d36a0ac2c4"},{url:"/assets/data/index.json",revision:"e13193a62c9fb3259236168eccc36817"},{url:"/assets/data/pac-man/index.json",revision:"d01ccc1de542aa25a07c220fe62d3503"},{url:"/assets/data/plugin-docs/auto-completions/dynamic-references/index.json",revision:"9bd94092d9fe2f80629bcbffd6c5b91e"},{url:"/assets/data/plugin-docs/auto-completions/index.json",revision:"18c5ab5f6a2422287984857ad9506167"},{url:"/assets/data/plugin-docs/custom-commands/index.json",revision:"a0ea539eeef3a6e6029b0457cc292b6c"},{url:"/assets/data/plugin-docs/custom-components/index.json",revision:"6e158c3f4dcd2b97066f3c78bc88bc53"},{url:"/assets/data/plugin-docs/index.json",revision:"b79d1391c7877299d67aa407b94d7119"},{url:"/assets/data/plugin-docs/json/file-definitions/index.json",revision:"b4b6fb4903ccf2d1604d917c71ff427e"},{url:"/assets/data/plugin-docs/json/lightning-cache/index.json",revision:"20f4640fd1edd5a66b4e29649be1ee05"},{url:"/assets/data/plugin-docs/json/presets/index.json",revision:"477a7b2ca859cb44929317b29abe13c1"},{url:"/assets/data/plugin-docs/json/snippets/index.json",revision:"ebd5d07205d1df75ece2a5cd11d1792f"},{url:"/assets/data/plugin-docs/json/themes/index.json",revision:"304db3f8d9d55251d4006cf642200a1c"},{url:"/assets/data/plugin-docs/modules/env/index.json",revision:"5dcc621c6892febfaa5aa551ba69463d"},{url:"/assets/data/plugin-docs/modules/fetch-definition/index.json",revision:"9aa516b1eb4bd0a571679d94237b1f45"},{url:"/assets/data/plugin-docs/modules/footer/index.json",revision:"74781ffaf47fbe2ec101c7a8fb0904e8"},{url:"/assets/data/plugin-docs/modules/fs/index.json",revision:"cae7b8564481d153ca0d449b97df4103"},{url:"/assets/data/plugin-docs/modules/globals/index.json",revision:"b61943198eff44e361162a428c1fd71f"},{url:"/assets/data/plugin-docs/modules/index.json",revision:"c55c90f95c63b83953e7cf190493aa3d"},{url:"/assets/data/plugin-docs/modules/path/index.json",revision:"0b12ed7b2df06e63b9c76bf3822e8efa"},{url:"/assets/data/plugin-docs/modules/sidebar/index.json",revision:"7bba55b352d84dcbcdc9988cdf06f0ce"},{url:"/assets/data/plugin-docs/modules/ui/index.json",revision:"f5f3665dca123151a3575732935513df"},{url:"/assets/data/plugin-docs/modules/utils/index.json",revision:"f10dc432adfaefb03d622a9f0a477788"},{url:"/assets/data/plugin-docs/modules/windows/index.json",revision:"c5f7fabaf489e2d75fffd949c7792c8f"},{url:"/assets/data/plugin-docs/other/default-file-types/index.json",revision:"a250bf21cffcd837f8983227927ac103"},{url:"/assets/data/plugin-docs/other/styles/index.json",revision:"5bb32e68bb832046d77339da856ce072"},{url:"/assets/data/tags/advanced/index.json",revision:"df323e87edd4cfcebdc60a9d10ed4587"},{url:"/assets/data/tags/economy/index.json",revision:"bf0b377bd470f6bf53ca0875ec62374b"},{url:"/assets/data/tags/minigame/index.json",revision:"b2063f7379378baafb1dc209faed7a09"},{url:"/assets/data/tags/mining/index.json",revision:"68512f17847c77e00facdfeb15a81b4c"},{url:"/assets/js/app.3a470819.js",revision:"a480d65d187facdf77eea2212f3651ba"},{url:"/assets/js/page--src--pages--404-vue.3a657a54.js",revision:"4cd5a84ca939482233a23ea31ab8b0de"},{url:"/assets/js/page--src--pages--creations-vue.3165ec0f.js",revision:"5c1b1f4d98ac6c31b3cadceb92dcdec8"},{url:"/assets/js/page--src--pages--index-vue.e5db36cf.js",revision:"c266cbf7545b0201c1170e27cd3c3bb1"},{url:"/assets/js/page--src--templates--author-vue.83c9ebe4.js",revision:"8f57e25d18c39cf600aa6666fbdfc8ee"},{url:"/assets/js/page--src--templates--creation-vue.c6d78ec4.js",revision:"1b68590d137a0a6dddc2261c414d1d70"},{url:"/assets/js/page--src--templates--markdown-page-vue.b0785be5.js",revision:"b77bc28528efe2fae102fce3601b6c63"},{url:"/assets/js/page--src--templates--tag-vue.d309c918.js",revision:"b51d6a6c06ff032fb340a9b088d2ebc4"},{url:"/assets/js/search.708548d7.js",revision:"d2a54b60670490f474eb0d9495fba902"},{url:"/assets/static/faq_1.4833fd8.b5cd21168a425af93e27e684ca0d6f55.png",revision:"97b458f1fac075ac045ea7f727fe8fd9"},{url:"/assets/static/faq_1.82a2fbd.b5cd21168a425af93e27e684ca0d6f55.png",revision:"265f1e958576f2ef4a9bd90e5608713a"},{url:"/assets/static/faq_1.cbab2cf.b5cd21168a425af93e27e684ca0d6f55.png",revision:"916ec3e596f3410d74cb3c8c9b9fcd09"},{url:"/assets/static/favicon.ac8d93a.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"a72097143141ba7cebc09b34ee456feb"},{url:"/assets/static/favicon.b9532cc.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"814ace81e164119642545ea6fff550d4"},{url:"/assets/static/favicon.ce0531f.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"0aa61a5fe515860da05fa7739eecc641"},{url:"/assets/static/getting-started-1.4833fd8.a169e97caf7ed0dbb576ac84927c5654.png",revision:"fc7e3a11a588e8f76b139de70e973176"},{url:"/assets/static/getting-started-1.82a2fbd.a169e97caf7ed0dbb576ac84927c5654.png",revision:"d0a01890d709d0a72805e820f14462b2"},{url:"/assets/static/getting-started-1.cbab2cf.a169e97caf7ed0dbb576ac84927c5654.png",revision:"1ba0b45a0f174399e768de2c10df0b4f"},{url:"/assets/static/getting-started-10.4833fd8.82daf94f15845adb1646a54c924793f8.png",revision:"14814157ba776c5922320954a763cc8e"},{url:"/assets/static/getting-started-10.82a2fbd.82daf94f15845adb1646a54c924793f8.png",revision:"ab98598d4ba2592721d6d604bcb41bd7"},{url:"/assets/static/getting-started-10.cbab2cf.82daf94f15845adb1646a54c924793f8.png",revision:"82daf94f15845adb1646a54c924793f8"},{url:"/assets/static/getting-started-11.4833fd8.db3a0a18f8d4db9756159a368efe90da.png",revision:"8eda2803deed13b5eab3e3b9f3382161"},{url:"/assets/static/getting-started-11.82a2fbd.db3a0a18f8d4db9756159a368efe90da.png",revision:"503a4a9b6a85a06654653fd16c25acfc"},{url:"/assets/static/getting-started-11.cbab2cf.db3a0a18f8d4db9756159a368efe90da.png",revision:"0044f24179daa0dfa7b7a1a8d87c37bf"},{url:"/assets/static/getting-started-12.4833fd8.03807ff21653d4d406f19b0a1e1490ab.png",revision:"1ed74d6243379e393a68dc9d89f44246"},{url:"/assets/static/getting-started-12.82a2fbd.03807ff21653d4d406f19b0a1e1490ab.png",revision:"1321bb186053cd75d6ea9fa3fe4489c8"},{url:"/assets/static/getting-started-12.cbab2cf.03807ff21653d4d406f19b0a1e1490ab.png",revision:"ed046352e7a59f3a2b853d1d9a1374f9"},{url:"/assets/static/getting-started-13.4833fd8.5c7968afa0abcfccf6cc844367465067.png",revision:"5c7968afa0abcfccf6cc844367465067"},{url:"/assets/static/getting-started-13.82a2fbd.5c7968afa0abcfccf6cc844367465067.png",revision:"1eefe3d4ad737f4718073dc0ab38d58f"},{url:"/assets/static/getting-started-13.cbab2cf.5c7968afa0abcfccf6cc844367465067.png",revision:"282ef249bc0da65ac59bfa71cc674e46"},{url:"/assets/static/getting-started-14.4833fd8.73125189ffa662a78587a322da981df0.png",revision:"d7b51c2b9359588e55788dc5adc743ca"},{url:"/assets/static/getting-started-14.82a2fbd.73125189ffa662a78587a322da981df0.png",revision:"d619d790d50c6f9d5cd493a0b91348e8"},{url:"/assets/static/getting-started-14.cbab2cf.73125189ffa662a78587a322da981df0.png",revision:"c0d841047a050ff684aed49e60c93575"},{url:"/assets/static/getting-started-15.4833fd8.bf649fb35398df8340bbfd3670f0a86b.png",revision:"b7e3b9fb4eb54b33e47ccb17aefec95d"},{url:"/assets/static/getting-started-15.82a2fbd.bf649fb35398df8340bbfd3670f0a86b.png",revision:"31af712ea24e93b0c2f3c2fd3dc97ece"},{url:"/assets/static/getting-started-15.cbab2cf.bf649fb35398df8340bbfd3670f0a86b.png",revision:"0274dda921ae61ab95bfca15405b88fb"},{url:"/assets/static/getting-started-16.4833fd8.696ffaaa40e143e765b345789a75ffb9.png",revision:"63fd3c5d6ad344cda94428c89659d42d"},{url:"/assets/static/getting-started-16.82a2fbd.696ffaaa40e143e765b345789a75ffb9.png",revision:"54565f591d8a0789df90ebb6a4a8128b"},{url:"/assets/static/getting-started-16.cbab2cf.696ffaaa40e143e765b345789a75ffb9.png",revision:"c9f0ae5a8f302ffef65478725b14f086"},{url:"/assets/static/getting-started-17.4833fd8.44738d5eb7970905bd593362b04c6f74.png",revision:"b2e48098ddf4dbebaaf91482cbd27720"},{url:"/assets/static/getting-started-17.82a2fbd.44738d5eb7970905bd593362b04c6f74.png",revision:"0fea96b942e4b9ad5fd37aaf3fbb7ac2"},{url:"/assets/static/getting-started-17.cbab2cf.44738d5eb7970905bd593362b04c6f74.png",revision:"8080b8f949892a772e101a49ae5fe425"},{url:"/assets/static/getting-started-2.4833fd8.0313588be7a4ea8bce35c9175b9beff6.png",revision:"1da07e0f71da66c5099e3e86730071a6"},{url:"/assets/static/getting-started-2.82a2fbd.0313588be7a4ea8bce35c9175b9beff6.png",revision:"3200ebb39ff22d82334551b80e7e6d24"},{url:"/assets/static/getting-started-2.cbab2cf.0313588be7a4ea8bce35c9175b9beff6.png",revision:"70571c7bc68eec4f5f9d35dcf2d2d910"},{url:"/assets/static/getting-started-3.4833fd8.1f7f3033956969f2d73879c3636683c0.png",revision:"bd6ea82a00c9c8aa92df9a297b3c8c3c"},{url:"/assets/static/getting-started-3.82a2fbd.1f7f3033956969f2d73879c3636683c0.png",revision:"3f2f1402a6bf2c1c56de63643ecd0958"},{url:"/assets/static/getting-started-3.cbab2cf.1f7f3033956969f2d73879c3636683c0.png",revision:"f072d4c9a5f190320ccaec217581c0fe"},{url:"/assets/static/getting-started-4.4833fd8.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"9134e9eb497343e1042bac9c0702c10c"},{url:"/assets/static/getting-started-4.82a2fbd.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"48a40a73e4a0adee6cb3771e5b9c189d"},{url:"/assets/static/getting-started-4.cbab2cf.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"452afd88bf07652e26d4aae422db9f95"},{url:"/assets/static/getting-started-5.4833fd8.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"55b5486e140d593a6e151100fcfd54de"},{url:"/assets/static/getting-started-5.82a2fbd.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"b976c593aa74c4adbba1eebed5918ede"},{url:"/assets/static/getting-started-5.cbab2cf.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"36adcb2f59114914113929157cbbf436"},{url:"/assets/static/getting-started-6.4833fd8.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"f2180df8ce71b22504552afa3e5d6bf0"},{url:"/assets/static/getting-started-6.82a2fbd.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"3ae9b94c28932303a190c00da36160be"},{url:"/assets/static/getting-started-6.cbab2cf.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"28838175b7379e8b3f1a4083ece63ecd"},{url:"/assets/static/getting-started-7.4833fd8.12d7c440bcc9c15e246c549442e2d438.png",revision:"680a40633ef3c889afc1f7f7fe2f0331"},{url:"/assets/static/getting-started-7.82a2fbd.12d7c440bcc9c15e246c549442e2d438.png",revision:"d99bf7d61ced63315706c4e37fcebc22"},{url:"/assets/static/getting-started-7.cbab2cf.12d7c440bcc9c15e246c549442e2d438.png",revision:"a38d4b8d8ae2f12116c4184ca43fb03d"},{url:"/assets/static/getting-started-8.4833fd8.9398ec1bf2a300ec5ab845934d516359.png",revision:"0c76fea6efdea6ae2a51042446e43866"},{url:"/assets/static/getting-started-8.82a2fbd.9398ec1bf2a300ec5ab845934d516359.png",revision:"209e0ca72efaafc3191e797d98b3a3a4"},{url:"/assets/static/getting-started-8.cbab2cf.9398ec1bf2a300ec5ab845934d516359.png",revision:"9e398d68519f333d55b7b4a22076c521"},{url:"/assets/static/getting-started-9.4833fd8.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"f14590e40443084b931038a0fe373994"},{url:"/assets/static/getting-started-9.82a2fbd.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"8e27e8e8e9bb7c7499d57e550a78b499"},{url:"/assets/static/getting-started-9.cbab2cf.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"9d9ef4fd679c93e16e0b2619c8d40439"},{url:"/assets/static/icon.03a41a4.14b6279430a5e8ffcf50a17b6444e2bb.jpg",revision:"0d51b2111015f027311d1728306ae754"},{url:"/assets/static/icon.03a41a4.964cb2bb7e0725be355050687f550230.png",revision:"ea807e7bbb2a941864e32ae15f53f8be"},{url:"/assets/static/icon.1e38f94.4f43aa663a6b71aafee0052f3d97f04a.png",revision:"9983389c7e31af3ea915a2890c4fc75a"},{url:"/assets/static/icon.2ef5f76.541ceb744df4f9a2598327cb625ea7dd.jpg",revision:"81bc9e560fdd8ec9859351b098fb85c3"},{url:"/assets/static/icon.566f69c.fd2c653f7592848b6e70464574b89035.jpg",revision:"85d5d75e5d57351264baf593dbc4339a"},{url:"/assets/static/icon.dc52710.a3356c160acfe3767fd0f28284067129.png",revision:"3c05eae17d11c97f8b327faf29d29686"},{url:"/assets/static/logo.1539b60.a5e261baa9961fe146ba3d259eacd132.png",revision:"5f61e3d6ddfefa2120976996791dc025"},{url:"/assets/static/logo.62d22cb.a5e261baa9961fe146ba3d259eacd132.png",revision:"c10d0cae06f0df213a55a60fa173fdcb"},{url:"/assets/static/logo.7b22250.a5e261baa9961fe146ba3d259eacd132.png",revision:"13b628b41565399bc98d83a8432b41e7"},{url:"/assets/static/logo.82a2fbd.a5e261baa9961fe146ba3d259eacd132.png",revision:"b0532c04dc892791494ec1ada9c258eb"},{url:"/assets/static/logo.cbab2cf.a5e261baa9961fe146ba3d259eacd132.png",revision:"f1a5354fa241c585797bcd1a539db95b"},{url:"/assets/static/logo.dc0cdc5.a5e261baa9961fe146ba3d259eacd132.png",revision:"c7ab07c5d8e2f51710e6150a3e17eb0f"},{url:"/assets/static/logo.f22e9f3.a5e261baa9961fe146ba3d259eacd132.png",revision:"36520c96d5b6eb7a6c909beddfaa51ef"},{url:"/assets/static/main.1b91758.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"a5fa01e812a0d093946220f7c86ab6c1"},{url:"/assets/static/main.1b91758.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"66c879b66c226450672d6bc3bf1f890b"},{url:"/assets/static/main.4250cd3.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"c16ef8fcafd1f7a2fb21f15be894700a"},{url:"/assets/static/main.4250cd3.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"fd7520edececb3ca1b2a79e12d984187"},{url:"/assets/static/touch-icon-120x120.png",revision:"1700e43bc7471e180aa1584fbe486e88"},{url:"/assets/static/touch-icon-128x128.png",revision:"25850408cd6bf099fc2255b9bca497d0"},{url:"/assets/static/touch-icon-144x144.png",revision:"9398355695d72868a27f743892e7e3e3"},{url:"/assets/static/touch-icon-152x152.png",revision:"1b83463e121efbc3dea4eb6cb8c9d88a"},{url:"/assets/static/touch-icon-16x16.png",revision:"041dc01dfb9c0f25ebf8f44c06391bd6"},{url:"/assets/static/touch-icon-180x180.png",revision:"c2031431c345fa94e5ff0ea02cf66c71"},{url:"/assets/static/touch-icon-192x192.png",revision:"e22c5bab58306977b8d400d9eff72796"},{url:"/assets/static/touch-icon-384x384.png",revision:"e8d5657279421b0221d87bfb9cac3013"},{url:"/assets/static/touch-icon-48x48.png",revision:"e69deff1e8970918c1188c45b333f2c8"},{url:"/assets/static/touch-icon-512x512.png",revision:"7685da60fcbdea37fa54a324ddabc498"},{url:"/assets/static/touch-icon-72x72.png",revision:"cd4f600463d136a96909be790b7f6370"},{url:"/assets/static/touch-icon-96x96.png",revision:"482528887fddfcfae136d6410770e84a"},{url:"/author/7dev7urandom/index.html",revision:"b0ebd97789026077188647def67eb015"},{url:"/author/enderzombi102/index.html",revision:"056c5c5f6fa9ae7c68c82b3f4da8642c"},{url:"/author/gamemode-one/index.html",revision:"778648f290c3cd12e31ae4b362f44885"},{url:"/author/joelant05/index.html",revision:"a13d07ba92e3ee7f97644e34ea3eb1e5"},{url:"/author/montudor/index.html",revision:"8c2e09e9ed8a9968708d1ffda83a9bfe"},{url:"/author/solveddev/index.html",revision:"c2fca2ee4905d90539b2060765e97fea"},{url:"/creations/index.html",revision:"76e602af3fc83884e5190d5c70c258dd"},{url:"/editor-docs/faq/index.html",revision:"8a33e2cbcb29b3b17488a4de8fe1e40a"},{url:"/editor-docs/features/index.html",revision:"43492ec218bc6ff44f383dc0e3c00490"},{url:"/editor-docs/getting-started/index.html",revision:"1e0792ed182edc514577693c9fe22ebf"},{url:"/editor-docs/index.html",revision:"0f1586c54eee16e74aad46b25699c8d2"},{url:"/editor-docs/other/molang/index.html",revision:"c330c7f2907695d47b7b6143645e1703"},{url:"/index.html",revision:"64d2ec0fb50e5be942146d5ddb6572f5"},{url:"/logo.png",revision:"a5e261baa9961fe146ba3d259eacd132"},{url:"/manifest.json",revision:"caae166894ac694a66597ded3a200888"},{url:"/pac-man/index.html",revision:"8cce0bff884de187f84dafdfa7a94bf1"},{url:"/plugin-docs/auto-completions/dynamic-references/index.html",revision:"66111ca8fc2f8ccb634d55c06fc27d66"},{url:"/plugin-docs/auto-completions/index.html",revision:"b64c339391c84081ab49de77a9e89729"},{url:"/plugin-docs/custom-commands/index.html",revision:"a420c533afe458cdd33576fa82ad3e2b"},{url:"/plugin-docs/custom-components/index.html",revision:"a866a69acbf6fe377cf063d71730f1e6"},{url:"/plugin-docs/index.html",revision:"76cc9e4eb8f11e0ea806f2e602033d1e"},{url:"/plugin-docs/json/file-definitions/index.html",revision:"c14deb8d880a962e5237ef338d6f7623"},{url:"/plugin-docs/json/lightning-cache/index.html",revision:"adbc63b2f43a84bed7a4a0e051a21f8a"},{url:"/plugin-docs/json/presets/index.html",revision:"ad410613d8194444c90395227e2b6f70"},{url:"/plugin-docs/json/snippets/index.html",revision:"85f332b52222be45986fbde0da72357c"},{url:"/plugin-docs/json/themes/index.html",revision:"6d258b442ae9ccd376ca8e7ce6d91268"},{url:"/plugin-docs/modules/env/index.html",revision:"25e54e175ef3863edd6e2bc27f64003d"},{url:"/plugin-docs/modules/fetch-definition/index.html",revision:"7e9ec9991fe6e6db01945484bfe20169"},{url:"/plugin-docs/modules/footer/index.html",revision:"8f22245a061ae05f04bb521568c131eb"},{url:"/plugin-docs/modules/fs/index.html",revision:"c05022adce32b127fe249f9f1d378a60"},{url:"/plugin-docs/modules/globals/index.html",revision:"444cb67cd02484a181e0add7dc0b8a3e"},{url:"/plugin-docs/modules/index.html",revision:"6c2bfae3693e4ea83571aede1850031d"},{url:"/plugin-docs/modules/path/index.html",revision:"e7a4408b54d57ff72db55cc2545b1b8e"},{url:"/plugin-docs/modules/sidebar/index.html",revision:"0ec553456e1e43974fa6473027bebd5e"},{url:"/plugin-docs/modules/ui/index.html",revision:"edb19378f25daa3b3ada746e3da70300"},{url:"/plugin-docs/modules/utils/index.html",revision:"db430ab52d782c2d625d448234ab21df"},{url:"/plugin-docs/modules/windows/index.html",revision:"eb8e042adf1c2da3a80103197242c987"},{url:"/plugin-docs/other/default-file-types/index.html",revision:"49cc4f2495b6169526b59dbf6ec88c19"},{url:"/plugin-docs/other/styles/index.html",revision:"0c4b2cbcc46e04fc89293a49d6b1d599"},{url:"/tags/advanced/index.html",revision:"10d8e9dbe05a257bf0796ff1e27d382e"},{url:"/tags/economy/index.html",revision:"fcf41bb4b475091711ad94953ae7cbf2"},{url:"/tags/minigame/index.html",revision:"e9bc15a3b8d7a36caf776c9015ffefe5"},{url:"/tags/mining/index.html",revision:"385fbbc81f877e90c38489a5cd2fa564"},{url:"/touch-icon.png",revision:"e64600d215ff68c5afe9cc7d5bbdd179"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/plugin-docs/modules/windows",revision:"4925427da638547a9ab39dcd6d63aebc"},{url:"/plugin-docs/modules/ui",revision:"67fe44503a425cfa80527033e5021ec8"},{url:"/plugin-docs/modules/utils",revision:"6a2db9c16b3f169f99351e1729a36a48"},{url:"/plugin-docs/other/styles",revision:"163726e4c56d13d5b27d4278a57cfd26"},{url:"/plugin-docs/modules/sidebar",revision:"0e8d93117c9e35e73b42b5a4432caa45"},{url:"/plugin-docs/json/themes",revision:"2b7e139ef3e47dc7f6740c77943f1e0c"},{url:"/plugin-docs/json/snippets",revision:"efb27c100bfdd6f00be31af6257905f7"},{url:"/plugin-docs/modules/path",revision:"b882ae2c971c4b5184665f0c8cfb5c5d"},{url:"/plugin-docs/json/presets",revision:"8650b170cd42d8aa95857a16c7f2cab2"},{url:"/plugin-docs/json/lightning-cache",revision:"853ab9ad6d70afc4b7b2bc8a68187957"},{url:"/plugin-docs/other/default-file-types",revision:"8b8077ff13dd6efb45164852af650c52"},{url:"/plugin-docs/modules/fetch-definition",revision:"34f95dde3bd5ab5ceb0b2fd6b5f1c324"},{url:"/plugin-docs/modules/globals",revision:"396cacf477003770b17c87c10d5a017f"},{url:"/plugin-docs/modules/footer",revision:"b1996dd8c02f276e640bb9974abbfefd"},{url:"/plugin-docs/modules/fs",revision:"e08b0d555fec3924e45a345d21911bad"},{url:"/plugin-docs/modules/env",revision:"fb9dc48ca6a91c47b2247356655ce30a"},{url:"/editor-docs/other/molang",revision:"65a42e86a21a663a2b0ac28441164ec8"},{url:"/plugin-docs/json/file-definitions",revision:"4e7c2df49f8e995d3a9b71d5a4b4cc2d"},{url:"/plugin-docs/auto-completions/dynamic-references",revision:"99c76df544827f4bea7748e9af20cce6"},{url:"/tags/minigame",revision:"e6706847134b36790938d0d956c552e1"},{url:"/tags/mining",revision:"9f207bded5b17dae80417bf03623c56f"},{url:"/plugin-docs/modules",revision:"f6401df87dd9ee89021a499fa93d5a8c"},{url:"/tags/economy",revision:"aea0f3ea6bd2c107ba9c68419194ed01"},{url:"/plugin-docs/custom-commands",revision:"abeecd5bfc3f5be0848befb43e48b8cd"},{url:"/plugin-docs/custom-components",revision:"d73003ea4237b9a931bf8f23b9b28c7f"},{url:"/tags/advanced",revision:"c7cdf9145963d7cb605aee778e51f464"},{url:"/author/solveddev",revision:"e3cfbfd7e54c231b25f820a717ecf704"},{url:"/plugin-docs/auto-completions",revision:"8c3c907019a4c79c2ade079e109dc930"},{url:"/author/montudor",revision:"9ca300ff89325b8434c20d7dabc82180"},{url:"/editor-docs/getting-started",revision:"bfce7a6460c67cc3a183ee88b459d009"},{url:"/editor-docs/faq",revision:"08e35c58f85a987e5fa8bb5935ad0040"},{url:"/editor-docs/features",revision:"ef361341eee61fdd0dfe3e3902748ac4"},{url:"/author/joelant05",revision:"ddd600b5440a88125cce026676db17e3"},{url:"/author/gamemode-one",revision:"7947fcb557e0215df27bac8f9ccbc6c5"},{url:"/author/enderzombi102",revision:"8a2dca7ba2e9ef79ff2a4e56edab44cb"},{url:"/author/7dev7urandom",revision:"73eef6eec28008b481bf4e396135364c"},{url:"/creations",revision:"a3f98ad857c7681fa05e6ed622b0bc9d"},{url:"/pac-man",revision:"69608d815529fc0c78ceab8ad94ae5f5"},{url:"/plugin-docs",revision:"c6288819b262d70980ab862394971d6a"},{url:"/editor-docs",revision:"d76c3a669edec636ae038a7c9bffdbf9"},{url:"/advanced-mining",revision:"dc8e30f749fcde52cb264cdffb61d6f0"}],{})}));
//# sourceMappingURL=service-worker.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})