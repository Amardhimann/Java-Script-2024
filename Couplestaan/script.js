// this local romantic quotes .....

const romanticQuotes = [
  "Your love is the sunrise that brightens my darkest days.",
  "When I'm with you, nothing else seems to matter.",
  "Every moment we spend together is a beautiful memory in the making.",
  "Your kiss leaves an imprint on my heart that never fades.",
  "The sound of your laughter is the sweetest music I've ever heard.",
  "You are the reason I wake up every morning with a smile on my face.",
  "Loving you feels like coming home, no matter where I am.",
  "With every glance, you make me fall deeper in love with you.",
  "Your touch is like magic, igniting sparks of love in my soul.",
  "You are the rhythm to my heart, the melody to my life.",
  "Every time you hold me, I feel like the luckiest person in the world.",
  "Your love is the anchor that keeps me grounded in life’s storms.",
  "I find heaven in your arms, in the way you look at me with love.",
  "Your smile is the key that unlocks the happiness in my heart.",
  "No matter how much time we spend together, I’ll always crave more of you.",
  "You are the dream I never want to wake up from.",
  "तुम्हारे बिना जीने का ख्याल भी नहीं आ सकता। - मिर्जा गालिब",
  "इश्क़ वो नहीं जो तुझे मेरा कर दे, इश्क़ वो है जो तुझे किसी और का होने ना दे। - अमृता प्रीतम",
  "तुम्हारी मोहब्बत में एक खासियत है, जब भी महसूस करता हूँ, खुद को खुदा के करीब पाता हूँ। - जगजीत सिंह",
  "मोहब्बत में अक्सर लोग आधे हो जाते हैं, पूरा तो वो वही रहता है जो टूट कर बिखर जाता है। - गुलजार",
  "दिल से लिखी बातें दिल तक पहुँचती हैं, चाहे वो लफ्जों में हों या खामोशी में। - जावेद अख्तर",
  "तेरा नाम लूँ ज़ुबान से और सांसों में खुशबू आ जाए, तेरे ख्यालों में खो जाऊँ और शाम सुहानी हो जाए। - राहत इंदौरी",
  "कभी-कभी किसी को देखने भर से ही दिल को सुकून मिल जाता है। - रवीन्द्रनाथ टैगोर",
  "तेरी हँसी से मुझे ऐसे प्यार है जैसे किसी किताब से किसी पन्ने का रिश्ता। - हरिवंश राय बच्चन",
  "तेरी आँखों में बसा हुआ चाँद मेरे हर सपने का साथी है। - मीर तकी मीर",
  "मोहब्बत के रंग में डूबी हुई वो रात कुछ अलग ही थी। - साहिर लुधियानवी",
  "प्यार वो चीज है जो इंसान को भगवान के करीब लाकर खड़ा कर देता है। - क़ुर्रतुलऐन हैदर",
  "तुम्हारी याद में जीना एक किस्म की इबादत है। - फैज़ अहमद फैज़",
  "तुमसे मोहब्बत है, बस यही कहना है। - मंटो",
  "तेरी हँसी, तेरी बातें, दिल को छूने वाले तेरे अंदाज़, दिल में हमेशा बसते हैं। - प्रेमचंद",
  "जिंदगी में प्यार पाने से ज्यादा प्यार देना बड़ी बात होती है। - इब्ने इंशा",
  "इश्क़ की आग में जो जलता है, वही इस आग की तपिश को समझता है। - फिराक गोरखपुरी",
  "तेरे पास रहते हैं लेकिन दिल तेरा होता नहीं। - शैलेन्द्र",
  "तुम्हारी मोहब्बत का असर हर वक्त महसूस होता है। - सादत हसन मंटो",
  "जो दिल में है कह देना चाहिए, क्योंकि मौका और वक्त दोनों दुबारा नहीं मिलते। - महादेवी वर्मा",
  "तुम्हारी खुशबू मेरे ख्वाबों में हर रात शामिल होती है। - मीर",
  "दिल से तुमसे मिलना था और किस्मत ने हमें मिलवा ही दिया। - गुलजार",
  "तेरी हँसी मेरी सबसे प्यारी मोहब्बत है। - अमृता प्रीतम",
  "जब तुम पास होते हो तो हर मंजर खूबसूरत लगने लगता है। - राहत इंदौरी",
  "मोहब्बत ऐसी चीज है जिसे महसूस कर सकते हैं, बयान नहीं कर सकते। - मीर",
  "तुम्हारी मोहब्बत में मेरी जिंदगी का हर लम्हा खिला-खिला लगता है। - मंटो",
  "मोहब्बत में सिर्फ खूबसूरती नहीं, बल्कि इंसानियत भी देखनी चाहिए। - साहिर लुधियानवी",
  "मोहब्बत वो नहीं जो हासिल करने के लिए होती है, मोहब्बत तो वो है जो खो जाने के बाद भी होती है। - गुलजार",
  "तेरी आँखों का नशा मेरे दिल को बेकरार कर देता है। - निदा फाज़ली",
  "मोहब्बत के बिना ये जिंदगी अधूरी सी लगती है। - फिराक गोरखपुरी",
  "मोहब्बत करने वाले लोग खुदा के करीब होते हैं। - मंटो",
  "तेरी हँसी से मुझे ऐसा सुकून मिलता है जैसे परिंदे को अपने आशियाने में। - गुलजार",
  "प्यार में सच्चाई है तभी वह आत्मा तक पहुँच जाती है। - जावेद अख्तर",
  "तेरे लिए मेरे दिल में ऐसी कशिश है जैसे गुलाब में खुशबू। - मीर",
  "तुमसे मोहब्बत है, ये सिर्फ एक एहसास नहीं बल्कि जिंदगी है। - साहिर लुधियानवी",
  "तुम्हारी मोहब्बत में मेरा दिल अपने आप को खास महसूस करता है। - फैज़ अहमद फैज़",
  "मोहब्बत में दिल का हर कोना एक बाग़ सा खिल उठता है। - अमृता प्रीतम",
  "तेरे ख्यालों का सुरूर मेरे दिल की धड़कन को तेज़ कर देता है। - राहत इंदौरी",
  "प्यार वो लफ्ज़ है जो हमें जिंदा रखता है। - हरिवंश राय बच्चन",
  "जब तुम हँसते हो तो मुझे यूँ लगता है जैसे चाँदनी रात का दीदार हो गया हो। - मीर",
  "इश्क़ का हर रंग मेरे ख्वाबों में बस जाता है। - निदा फाज़ली",
  "तेरे प्यार में मुझे अपने आप से ज्यादा खुशी मिलती है। - जावेद अख्तर",
  "तेरी मोहब्बत में ऐसी मिठास है जो दिल को हमेशा सुकून देती है। - गुलजार",
  "जब तुम पास होते हो तो मेरी सारी चिंताएं खो जाती हैं। - अमृता प्रीतम",
  "तेरे बिन इस दिल का सुकून हमेशा अधूरा रहता है। - साहिर लुधियानवी",
  "मोहब्बत में हर लम्हा दिल के करीब होता है। - फैज़ अहमद फैज़",
  "तेरी मोहब्बत ने मुझे एक नयी जिंदगी दी है। - जावेद अख्तर",
  "प्यार करने का मतलब बस समझ लेना है। - मीर",
  "तेरे ख्यालों में ही मुझे सुकून मिलता है। - मंटो",
  "मोहब्बत के बिना जिंदगी अधूरी है। - हरिवंश राय बच्चन",
  "तेरी हँसी मेरे दिल को हमेशा खुश कर देती है। - निदा फाज़ली",
  "Your love is a fire that burns bright, warming my heart with every glance.",
  "Every time I kiss you, I’m reminded of how beautiful life can be.",
  "You have a way of making everything feel more beautiful just by being there.",
  "In your eyes, I see my future, my love, my forever.",
  "The way you hold me makes the world feel like a better place.",
  "I could listen to your heartbeat forever and still want more time with you.",
  "Your love is like a lighthouse, guiding me through the stormy seas of life.",
  "Every touch from you feels like a whisper of love on my skin.",
  "You make my heart race with every smile, every touch, every kiss.",
  "Loving you is like breathing—effortless, natural, and necessary for life.",
  "With every hug, you remind me that love is the most beautiful feeling in the world.",
  "In your love, I find strength I never knew I had.",
  "Your love is a beautiful story, and I’m so lucky to be a part of it.",
  "Every time we kiss, it's as if the universe stops to celebrate our love.",
  "Your love is like a soft melody that plays in my heart, soothing my soul.",
  "You are the missing piece in the puzzle of my life, completing me in every way.",
  "I never knew love could feel this deep until I found you.",
  "With you, every day feels like a fairytale, filled with magic and love.",
  "Your love is the greatest gift life has ever given me.",
  "In your arms, I find the strength to face anything that comes our way.",
  "You are the poetry in my heart, the song in my soul.",
  "Every kiss from you feels like the beginning of something beautiful.",
  "Your love is a garden where my heart blooms with joy and passion.",
  "Being with you feels like a dream come true, every single day.",
  "Your touch has a way of healing every hurt, every scar in my heart.",
  "I never want to let go of this love we share, it’s too beautiful to lose.",
  "Every time we kiss, it’s like the first time—magical, unforgettable.",
  "Your love is like the ocean—deep, vast, and full of mysteries.",
  "With you, I’ve found the happiness I’ve been searching for all my life.",
  "Your love makes every day feel like a celebration of life and joy.",
  "In your arms, the world disappears, and it's just you and me.",
  "You make even the simplest moments feel like grand adventures.",
  "Loving you is the best decision I’ve ever made, and I’ll keep choosing you every day.",
  "Your love is like a gentle breeze, brushing against my soul and leaving me breathless.",
  "Every kiss from you feels like a spark igniting the fire in my heart.",
  "In your arms, I find the peace and warmth that I've always longed for.",
  "The way you look at me makes the whole world disappear, and it's just you and me.",
  "A thousand kisses wouldn’t be enough to quench the thirst I have for your love.",
  "Your smile is the sunrise that brightens my day, and your touch is the moonlight that soothes my night.",
  "Walking with you through the park, hand in hand, feels like the perfect symphony of our hearts.",
  "When you hold me close, it's as if the universe has conspired to bring us together.",
  "Every time we kiss, I fall deeper into the paradise of your love.",
  "Your love is the poetry that my heart sings every time you're near.",
  "The scent of the flowers in the garden is nothing compared to the sweetness of your love.",
  "With every touch, you paint the colors of love on the canvas of my heart.",
  "Your voice is the melody that calms the chaos within me.",
  "The taste of your lips lingers like the finest wine, intoxicating me with your love.",
  "In the silence of the night, your love echoes through my soul, reminding me of how deeply I adore you.",
  "Your love is the star that guides me through the darkest nights.",
  "Each time you say 'I love you,' it's as if time stops, and the world fades away.",
  "The warmth of your breath against my skin is the only comfort I need.",
  "With every heartbeat, I feel your love coursing through my veins.",
  "Your love is a journey, and I cherish every step we take together.",
  "Tumhari yaadon mein jeena hi meri zindagi hai.",
  "Tum meri zindagi ka sabse bada sukoon ho.",
  "Mujhe tumse beintehaa pyaar hai.",
  "Tumhari yaadon se zyada khoobsurat kuch nahi.",
  "Tum meri khushi ka asli matlab ho.",
  "Mujhe tumhari yaad har pal aati hai.",
  "Tumhari muskurahat meri zindagi ki sabse badi khushi hai.",
  "मोहब्बत में जो तड़प होती है वो एक खास एहसास है। - मीर",
  "तेरे बिना मेरा दिल अधूरा है। - जावेद अख्तर",
  "मोहब्बत में हर रंग की बात होती है। - हरिवंश राय बच्चन",
  "तेरी मोहब्बत की हर अदा मुझे दीवाना बना देती है। - मंटो",
  "प्यार में सब कुछ खूबसूरत लगने लगता है। - फैज़ अहमद फैज़",
  "तेरे करीब रहकर हर मुश्किल आसान हो जाती है। - निदा फाज़ली",
  "मोहब्बत में खुद को भूल जाना एक किस्म की इबादत है। - फिराक गोरखपुरी",
  "तेरी मोहब्बत में खो जाना ही मेरी खुशी है। - जावेद अख्तर",
  "तुम्हारे बिन ये जिंदगी वीरान लगती है। - साहिर लुधियानवी",
  "मोहब्बत वो एहसास है जो जिंदगी को खूबसूरत बना देता है। - हरिवंश राय बच्चन",
  "तेरी आँखों में मेरी पूरी दुनिया बसती है। - राहत इंदौरी",
  "प्यार के बिना ये दिल वीरान सा लगता है। - गुलजार",
  "तेरे साथ हर लम्हा जैसे एक ख्वाब हो। - मीर",
  "मोहब्बत में जो सुकून मिलता है वो कहीं और नहीं। - निदा फाज़ली",
  "तेरी बातों का असर मेरे दिल पर हमेशा रहेगा। - अमृता प्रीतम",
  "तुम्हारे साथ बिताया हर पल अनमोल है। - मंटो",
  "Mujhe tumhari yaadon mein jeena acha lagta hai.",
  "Tumhari yaadon se hi meri zindagi hai.",
  "Tum meri pehli aur aakhri mohabbat ho.",
  "Meri aankhon mein sirf tum hi ho.",
  "तेरी मोहब्बत के बिना ये जिंदगी अधूरी है। - गुलजार",
  "तेरी यादों में डूब जाना मेरा सबसे प्यारा काम है। - राहत इंदौरी",
  "तेरी मोहब्बत में खो जाना मेरा सबसे हसीन एहसास है। - जावेद अख्तर",
  "मोहब्बत में दिल का हर लम्हा खास बन जाता है। - मीर",
  "तेरी आँखों की गहराई में खो जाना ही मेरा आराम है। - साहिर लुधियानवी",
  "मोहब्बत के बिना हर खुशी अधूरी लगती है। - निदा फाज़ली",
  "तेरी हँसी मेरे दिल को हर बार जीत लेती है। - अमृता प्रीतम",
  "प्यार में दिल का हर दर्द भी मीठा लगता है। - फिराक गोरखपुरी",
  "तेरे साथ बिताए लम्हे मेरे दिल की सबसे प्यारी यादें हैं। - हरिवंश राय बच्चन",
  "मोहब्बत में दिल का हर ख्वाब पूरा हो जाता है। - मंटो",
  "तेरी बातें मेरे दिल में बस गई हैं। - जावेद अख्तर",
  "तेरे बिन ये दिल हमेशा उदास रहता है। - साहिर लुधियानवी",
  "मोहब्बत में हर लम्हा जिंदगी का सबसे हसीन पल बन जाता है। - गुलजार",
  "तेरे साथ बिताए पल मेरे दिल की धड़कन बन गए हैं। - राहत इंदौरी",
  "प्यार के बिना ये दिल हमेशा अधूरा लगता है। - निदा फाज़ली",
  "तेरे बिना हर खुशी अधूरी सी लगती है। - मीर",
  "मोहब्बत में दिल का हर ख्वाब सजीव हो जाता है। - फैज़ अहमद फैज़",
  "तेरे साथ होने का एहसास मेरी जिंदगी का सबसे हसीन लम्हा है। - मंटो",
  "प्यार के बिना हर चीज अधूरी सी लगती है। - हरिवंश राय बच्चन",
  "तेरी मोहब्बत में मेरे दिल की हर धड़कन बस गई है। - फिराक गोरखपुरी",
  "तेरी हँसी से मेरा दिन रौशन हो जाता है। - जावेद अख्तर",
  "तेरे साथ बिताए हर लम्हे को मैं दिल से महसूस करता हूँ। - साहिर लुधियानवी",
  "मोहब्बत में हर ख्वाब सच हो जाता है। - राहत इंदौरी",
  "तेरे बिना ये दिल वीरान सा लगता है। - अमृता प्रीतम",
  "प्यार के बिना दिल को हमेशा अकेलापन लगता है। - निदा फाज़ली",
  "तेरी मोहब्बत में दिल का हर कोना खुश हो जाता है। - मंटो",
  "Meri har khushi tumhari wajah se hai.",
  "Tumhari muskurahat se zyada haseen kuch nahi.",
  "Mujhe tumhari aadat ho gayi hai, aur yeh aadat kabhi chutegi nahi.",
  "Tum mere dil ki dhadkan ho.",
  "Tumse door jaane ka khayal hi dil ko rula deta hai.",
  "Your love is the light that guides me through the darkest nights.",
  "Every time our eyes meet, it's like the first time all over again.",
  "I could lose myself in the softness of your touch forever.",
  "In your arms, I find my home, my safe haven, and my forever.",
  "Your kiss tastes like the sweetest dream I've ever had.",
  "With every word you say, you write poetry on the pages of my heart.",
  "Holding your hand feels like holding the entire world in my palm.",
  "You are the missing piece that makes my heart whole.",
  "Every heartbeat whispers your name and calls you mine.",
  "In your love, I've found the reason why the universe exists.",
  "Your laughter is the song that plays in my heart, a melody I never want to end.",
  "Each kiss is a promise, a vow to love you more with every moment.",
  "The way you smile makes everything else fade into the background.",
  "I didn’t know what love was until I found you, and now I never want to let it go.",
  "In the warmth of your embrace, I feel a love that will never fade.",
  "You are the dream I never knew I had, the love I never knew I needed.",
  "Every moment with you feels like a beautiful love story in the making.",
  "Your love is a flame that burns within me, lighting up every corner of my soul.",
  "When our lips touch, time stops, and the world belongs only to us.",
  "तुम्हारे ख्यालों में खो जाना मेरे दिल का सबसे प्यारा काम है। - मीर",
  "तेरी बातों में वो मिठास है जो दिल को हर बार जीत लेती है। - जावेद अख्तर",
  "तेरी मोहब्बत की खुशबू मेरी रूह में बसी रहती है। - अमृता प्रीतम",
  "मोहब्बत करने का हुनर किसी को सिखाया नहीं जा सकता। - निदा फाज़ली",
  "तेरे साथ हर लम्हा जैसे सदा के लिए थम गया हो। - साहिर लुधियानवी",
  "तेरी आँखों में वो जादू है जो हर दर्द को भुला देता है। - राहत इंदौरी",
  "तेरी हँसी मेरे लिए एक हसीन तोहफा है। - मंटो",
  "प्यार में हर मुश्किल आसान लगती है। - फैज़ अहमद फैज़",
  "मोहब्बत में हर दर्द भी अच्छा लगता है। - फिराक गोरखपुरी",
  "तेरी यादों के सहारे जीना भी एक इबादत है। - गुलजार",
  "तेरी तस्वीर मेरे दिल के करीब है। - हरिवंश राय बच्चन",
  "तेरे साथ बिताए पल मेरे सबसे कीमती खजाने हैं। - मीर",
  "तेरी बातों का असर मेरे दिल पर हमेशा के लिए है। - मंटो",
  "मोहब्बत वो दरिया है जिसमें हर कोई डूबना चाहता है। - मीर",
  "तेरी हँसी की मिठास हर दर्द को भुला देती है। - निदा फाज़ली",
  "मोहब्बत में दिल का हर कोना एक फूल सा खिल जाता है। - अमृता प्रीतम",
  "तेरी आँखों में मुझे अपना जहाँ मिलता है। - राहत इंदौरी",
  "प्यार वो तोहफा है जो हर किसी के नसीब में नहीं होता। - गुलजार",
  "तेरे ख्यालों में खो जाना मेरे दिन का सबसे खास पल है। - साहिर लुधियानवी",
  "You’re the reason I believe in love, in magic, in forever.",
  "Your touch is the rhythm my heart beats to, and your love is the song it sings.",
  "The way you look at me makes me believe in fairy tales and happily-ever-afters.",
  "I could live a thousand lifetimes and still never get enough of your love.",
  "Your kiss leaves a trail of warmth on my skin, a memory that lingers forever.",
  "In your eyes, I see the stars, the moon, and every beautiful possibility.",
  "You are the spark that lights the fire in my soul, and I never want it to burn out.",
  "Every kiss from you feels like the beginning of forever.",
  "The sound of your voice is my favorite love song, playing on repeat in my heart.",
  "Your love is the calm in my storm, the anchor to my restless soul.",
  "I fall in love with you all over again every time you smile at me.",
  "Your love has a way of making the ordinary feel extraordinary.",
  "In your arms, the world feels right, and nothing else matters.",
  "Your love is like a rose—beautiful, delicate, and full of life.",
  "Kissing you feels like touching the stars, like tasting eternity.",
  "You and I are two souls entwined in the dance of love, forever and always.",
  "Your love is the greatest adventure I’ve ever embarked on.",
  "With every whisper, with every kiss, you write love letters on my heart.",
  "Your love is the fuel that keeps the fire in my heart burning bright.",
  "Being with you feels like walking through a garden of endless beauty and passion.",
  "Every time you hold me close, the world fades away, and it's just us.",
  "The love we share is like a secret language only we understand.",
  "Your love is like a river that flows through my soul, endless and eternal.",
  "With every look, you steal another piece of my heart.",
  "I could spend forever lost in the magic of your love.",
  "Your kiss is the sweetest addiction, one I never want to give up.",
  "Loving you feels like breathing—I can't imagine living without it.",
  "You are the reason behind every beat of my heart, every smile on my face.",
  "Your love is the melody I hum in the quiet moments of my day.",
  "In your arms, I find the peace I’ve searched for all my life.",
  "Every time I kiss you, it's like rediscovering love for the very first time.",
  "Mujhe tumse pyaar hai, aur yeh kehne ke liye mujhe kisi saboot ki zaroorat nahi.",
  "Meri duniya tum se hai.",
  "Mujhe tumse beintehaa pyaar hai, aur yeh kabhi kam nahi hoga.",
  "Tum meri zindagi ka sabse bada sukoon ho.",
  "Mujhe tumhari yaad har pal aati hai.",
  "Dil se dil ki baat ho, toh mohabbat ka rang gehra hota hai.",
  "Aapko dekh kar lagta hai, khuda ne fursat se banaya hai.",
  "Har pal tere khayalon mein, hum apni zindagi bita rahe hain.",
  "Kuch is tarah se tune zindagi mein rang bhare hain, ke har pal haseen lagta hai.",
  "Chand si roshni hai teri muskurahat mein, dil bechain rehta hai teri ek jhalak ke liye.",
  "Aapke bina zindagi adhoori lagti hai, har lamha teri yaadon mein doobi lagti hai.",
  "Tumhare bina jeene ki aadat nahi, tumhari yaadon se dil ko sukoon milta hai.",
  "Mohabbat ka ehsaas bhi ajeeb hota hai, jo door hote hain, wahi kareeb hote hain.",
  "Dil ki baat aankhon se keh di, humne kabhi alfaaz ka sahara nahi liya.",
  "Tere bina meri duniya suna lagti hai, jaise khushiyon ka koi raasta nahi.",
  "Tum se door jaane ka khayal hi dil ko rula deta hai.",
  "Mohabbat mein humne sab kuch gawaya hai, sirf tumhe pane ki tamanna hai.",
  "Teri yaadon mein khoya rehta hoon, tujhe har pal apna banane ki dua karta hoon.",
  "Aapki yaadon mein jeene ka maza hi kuch aur hai, aapke bina sab kuch bekaar hai.",
  "Ishq ka junoon hai hum par, ke hum har pal aapko yaad karte hain.",
  "Zindagi ke safar mein tera saath mila, toh yeh safar haseen ban gaya.",
  "Tere pyaar mein sab kuch khona hai, lekin yeh junoon phir bhi jeena hai.",
  "Aapke bina zindagi adhuri si lagti hai, jaise saans bhi poori nahi hoti.",
  "Tumhari yaadon mein aaj bhi wahi dard hai, jo kabhi mohabbat mein mehsoos hota tha.",
  "Mohabbat hai tumse, yeh baat sabse chhupayi hai, sirf tumhe apna banane ki tamanna dil mein basayi hai.",
  "तेरे ख्यालों में जीना ही मेरी खुशी है। - हरिवंश राय बच्चन",
  "मोहब्बत में हर दर्द भी अच्छा लगता है। - मीर",
  "तेरी बातें दिल में ऐसे बस गई हैं जैसे फूल में खुशबू। - फैज़ अहमद फैज़",
  "मोहब्बत में खो जाना ही मेरी सबसे प्यारी खुशी है। - जावेद अख्तर",
  "तेरे बिना ये दिल हमेशा उदास रहता है। - साहिर लुधियानवी",
  "प्यार के बिना दिल हमेशा अधूरा सा लगता है। - राहत इंदौरी",
  "तेरी मोहब्बत के बिना ये जिंदगी अधूरी है। - अमृता प्रीतम",
  "मोहब्बत में दिल का हर लम्हा खास बन जाता है। - निदा फाज़ली",
  "तेरी यादों में खो जाना मेरे दिल का सबसे खास एहसास है। - मीर",
  "प्यार के बिना हर चीज अधूरी लगती है। - फैज़ अहमद फैज़",
  "तेरे साथ बिताए लम्हे मेरी सबसे प्यारी यादें हैं। - हरिवंश राय बच्चन",
  "मोहब्बत में दिल का हर ख्वाब पूरा हो जाता है। - मंटो",
  "तेरे ख्यालों में जीना ही मेरा सुकून है। - फिराक गोरखपुरी",
  "तेरी मोहब्बत में मेरा दिल हमेशा बसता है। - जावेद अख्तर",
  "मोहब्बत के बिना हर खुशी अधूरी लगती है। - गुलजार",
  "तेरी यादों में खो जाने का अपना ही मजा है। - राहत इंदौरी",
  "मोहब्बत वो तोहफा है जो हर किसी के नसीब में नहीं होता। - निदा फाज़ली",
  "तेरे साथ हर लम्हा जैसे एक ख्वाब हो। - मीर",
  "तेरी आँखों में मुझे अपना जहाँ मिलता है। - साहिर लुधियानवी",
  "प्यार में सब कुछ खूबसूरत लगने लगता है। - अमृता प्रीतम",
  "तेरी मोहब्बत के बिना ये दिल हमेशा वीरान सा लगता है। - फिराक गोरखपुरी",
  "मोहब्बत में दिल का हर कोना खुश हो जाता है",
];

// Pictures array....
var romanticPhotos = [
  "img/image1.jfif",
  "img/image2.jfif",
  "img/image3.jfif",
  "img/image4.jfif",
  "img/image5.jfif",
  "img/image6.jfif",
  "img/image7.jfif",
  "img/image8.jfif",
  "img/image9.jfif",
  "img/image10.jfif",
  "img/image11.jfif",
  "img/image12.jfif",
  "img/image13.jfif",
  "img/image14.jfif",
  "img/image15.jfif",
  "img/image16.jfif",
  "img/image17.jfif",
  "img/image18.jfif",
  "img/image19.jfif",
  "img/image20.jfif",
  "img/image21.jfif",
  "img/image23.jfif",
  "img/image24.jfif",
  "img/image25.jfif",
  "img/image26.jfif",
  "img/image27.jfif",
  "img/image28.jfif",
  "img/image22.jfif",
  "img/image29.jfif",
  "img/image30.jfif",
  "img/image31.jfif",
  "img/image32.jfif",
  "img/image33.jfif",
  "img/image34.jfif",
  "img/image35.jfif",
  "img/image36.jfif",
  "img/image37.jfif",
  "img/image38.jfif",
  "img/image39.jfif",
  "img/image40.jfif",
  "img/image41.jfif",
  "img/image42.jfif",
  "img/image43.jfif",
  "img/image44.jfif",
  "img/image45.jfif",
  "img/image46.jfif",
  "img/image47.jfif",
  "img/image48.jfif",
  "img/image49.jfif",
  "img/image50.jfif",
  "img/image51.jfif",
  "img/image52.jfif",
  "img/image53.jfif",
  "img/image54.jfif",
  "img/image55.jfif",
  "img/image56.jfif",
  "img/image57.jfif",
  "img/image58.jfif",
  "img/image59.jfif",
  "img/image60.jfif",
];
// all elements collect by id's
const quoteContainer = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const img = document.getElementById("main-pic");
const wtsBtn = document.getElementById("wts");
const nextBtn = document.getElementById("new-quote");
const pictures = document.getElementById("main-pic");
const loader = document.getElementById("loader");

// to maintain pictures....
function mainpicture() {
  var photoIndex = Math.floor(Math.random() * romanticPhotos.length);
  pictures.src = romanticPhotos[photoIndex];
}
function loading() {
  loader.hidden = false;
  pictures.hidden = true;
  quote.hidden = true;
  wtsBtn.hidden = true;
  nextBtn.hidden = true;
}

// Remove Loading Spinner
function complete() {
  pictures.hidden = false;
  quote.hidden = false;
  loader.hidden = true;
  wtsBtn.hidden = false;
  nextBtn.hidden = false;
}

// Its main fuction.....
function shareQuote() {
  loading();
  //    its fuction to dealy output....
  setTimeout(() => {
    mainpicture();
    var indexNumber = Math.floor(Math.random() * romanticQuotes.length);

    if (romanticQuotes[indexNumber].length > 35) {
      quote.classList.add("font-size-small");
    } else {
      quote.classList.remove("font-size-small");
    }
    quote.innerText = romanticQuotes[indexNumber];
    complete();
  }, 150);
}
// its way to share quote at whats app.....
function shareOnWhatsApp() {
  const quote1 = encodeURIComponent(quote.innerText);
  const message = `${quote1}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
  window.open(whatsappUrl, "_blank");
}
// after click they will occure....
nextBtn.addEventListener("click", shareQuote);
wtsBtn.addEventListener("click", shareOnWhatsApp);
shareQuote();

// Prevent screenshot functionality
function preventScreenshot() {
  // Detect if the 'printscreen' key is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen") {
      e.preventDefault();
      alert("Screenshots are disabled on this page.");
    }
  });

  // Disable right-click on the page
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right-click is disabled.");
  });

  // Attempt to blur content on copy
  document.addEventListener("copy", (e) => {
    e.preventDefault();
    alert("Copying content is not allowed.");
  });
}

preventScreenshot();
