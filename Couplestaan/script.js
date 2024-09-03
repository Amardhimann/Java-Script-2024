// this local romantic quotes .....
const romanticQuotes = [
    "Tum mile toh laga ke is duniya mein pyaar bhi sach hota hai.",
    "Meri zindagi mein tumhari muskurahat ki jagah sabse khaas hai.",
    "Tere bina zindagi se koi shikwa toh nahi, tere bina zindagi bhi lekin zindagi toh nahi.",
    "Pyaar dosti hai. Agar woh meri sabse achhi dost nahi ban sakti, toh main usse kabhi pyaar kar hi nahi sakta.",
    "Tum paas hote ho toh dil ko sukoon milta hai.",
    "Maine tumhe apne khwab mein dekha tha, aur tum sach mein meri zindagi ban gayi.",
    "Tumhare bina meri duniya adhoori hai.",
    "Mere dil mein tum hi ho, aur tum hi rahoge.",
    "Agar tum saath ho, toh har din suhana hai.",
    "Main tumse pyaar karta hoon, aur yeh kabhi nahi badlega.",
    "Tum meri dhadkan ho, meri har saans mein tum ho.",
    "Tujhse milna jaise koi sapna tha, ab jo tum ho toh lagta hai poora ho gaya.",
    "Tumse milne ke baad zindagi mein rang bhar gaye.",
    "Meri duniya tumse shuru hoti hai, aur tum par hi khatam hoti hai.",
    "Tumhara pyaar meri zindagi ka sabse bada tohfa hai.",
    "Tumhe dekh kar dil se sirf ek hi dua nikalti hai, tum hamesha khush raho.",
    "Maine tumhare liye hi toh saansein sambhali hain.",
    "Jis din tumhe dekha, us din se dil ke sab armaan poore ho gaye.",
    "Mujhe tumse pyaar hai, aur hamesha rahega.",
    "Tum jo ho, meri zindagi mein, bas isi baat ka shukriya.",
    "Pyaar mein sab kuch jayaz hai, bas tum mere ho, yeh zaroori hai.",
    "Tere bina zindagi ka ek lamha bhi guzarna mushkil hai.",
    "Tum jo saath ho, toh phir kis baat ka gham hai.",
    "Tumhara pyaar meri zindagi ka sabse khubsurat ehsaas hai.",
    "Meri duniya tum se hai, tum ho toh sab hai.",
    "Tumhe paane ke liye main duniya se lad sakta hoon.",
    "Tere pyaar mein itna dard hai, par phir bhi ismein sukoon hai.",
    "Tum meri zindagi ka woh khwab ho, jise main hamesha jeena chahta hoon.",
    "Maine tumhe apni zindagi mein apne dil ke sabse kareeb rakha hai.",
    "Tumhara haath thamna, meri zindagi ka sabse bada faisla tha.",
    "Meri har khushi tumhari wajah se hai.",
    "Tumhari muskurahat se zyada haseen kuch nahi.",
    "Pyaar wo ehsaas hai jo hamesha tumhari yaad dilata hai.",
    "Mujhe tumse pyaar hai, aur yeh kehne ke liye mujhe kisi saboot ki zaroorat nahi.",
    "Tumse door jaane ka khayal hi dil ko rula deta hai.",
    "Jitna pyaar tumse hai, utna kisi aur se nahi ho sakta.",
    "Meri aankhon mein sirf tum hi ho, aur tum hi rahoge.",
    "Tumhare bina zindagi ka matlab hi khatam ho jaata hai.",
    "Maine apne dil mein sirf tumhare liye jagah rakhi hai.",
    "Tumhe dekhne se zyada khubsurat kuch nahi.",
    "Mujhe tumhari aadat ho gayi hai, aur yeh aadat kabhi chutegi nahi.",
    "Tum meri pehli aur aakhri mohabbat ho.",
    "Tere pyaar ka ehsaas mere dil ko sukoon deta hai.",
    "Meri har saans mein sirf tumhara naam hai.",
    "Tumhe paana meri zindagi ka sabse bada sapna hai.",
    "Tum mere dil ki dhadkan ho, tumhare bina sab kuch soona lagta hai.",
    "Tere pyaar mein jeene ka maza hi kuch aur hai.",
    "Tumhari yaadon mein jeena hi meri zindagi hai.",
    "Meri zindagi mein tumhari jagah koi nahi le sakta.",
    "Tumhe dekh kar hi din shuru hota hai, aur tumhe soch kar hi raat hoti hai.",
    "Tum meri zindagi ka sabse bada sukoon ho.",
    "Mujhe tumse beintehaa pyaar hai, aur yeh kabhi kam nahi hoga.",
    "Tumhara pyaar mere liye sabse bada inaam hai.",
    "Tum meri jaan ho, meri zindagi ho.",
    "Mujhe tumhare bina zindagi ka koi matlab nahi lagta.",
    "Tumse pyaar hai, aur yeh ehsaas kabhi nahi badlega.",
    "Tumhari muskurahat meri zindagi ki sabse badi khushi hai.",
    "Tumhari yaadon mein jeena meri majboori hai.",
    "Mujhe tumhari aadat ho gayi hai, aur yeh chhodna mushkil hai.",
    "Tum meri khushi ka asli matlab ho.",
    "Mujhe tumse pyaar hai, aur yeh pyaar kabhi nahi mit sakta.",
    "Tumhari yaadon se zyada khoobsurat kuch nahi.",
    "Tum mere dil ki har dhadkan mein ho.",
    "Tumhari muskurahat se zyada haseen kuch nahi.",
    "Tumhari yaadon mein jeena hi meri zindagi hai.",
    "Meri zindagi tumhare bina adhoori hai.",
    "Mujhe tumhari yaad har pal aati hai.",
    "Tumhari yaadon se mera dil hamesha khush rehta hai.",
    "Mujhe tumse bepanah pyaar hai.",
    "Tumhara pyaar mere liye sabse bada tohfa hai.",
    "Tumhe dekh kar dil ko sukoon milta hai.",
    "Tumhari muskurahat meri sabse badi khushi hai.",
    "Mujhe tumhari yaadon mein jeena acha lagta hai.",
    "Tumhari yaadon se hi meri zindagi hai.",
    "Tumhari yaadon mein jeena meri majboori hai.",
    "Mujhe tumse pyaar hai, aur yeh pyaar kabhi kam nahi hoga.",
    "Tumhara pyaar meri zindagi ka sabse bada inaam hai.",
    "Tumhari yaadon mein jeena hi meri zindagi hai.",
    "Tum meri zindagi ka sabse bada sukoon ho.",
    "Mujhe tumse beintehaa pyaar hai.",
    "Tumhari yaadon se zyada khoobsurat kuch nahi.",
    "Tum meri khushi ka asli matlab ho.",
    "Mujhe tumhari yaad har pal aati hai.",
    "Tumhari muskurahat meri zindagi ki sabse badi khushi hai.",
    "Mujhe tumhari yaadon mein jeena acha lagta hai.",
    "Tumhari yaadon se hi meri zindagi hai.",
    "Tum meri pehli aur aakhri mohabbat ho.",
    "Meri aankhon mein sirf tum hi ho.",
    "Meri har khushi tumhari wajah se hai.",
    "Tumhari muskurahat se zyada haseen kuch nahi.",
    "Mujhe tumhari aadat ho gayi hai, aur yeh aadat kabhi chutegi nahi.",
    "Tum mere dil ki dhadkan ho.",
    "Tumse door jaane ka khayal hi dil ko rula deta hai.",
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
    "Mohabbat hai tumse, yeh baat sabse chhupayi hai, sirf tumhe apna banane ki tamanna dil mein basayi hai."
];


// Pictures array....
var romanticPhotos = [
    'img/image1.jfif','img/image2.jfif','img/image3.jfif','img/image4.jfif',
    'img/image5.jfif','img/image6.jfif','img/image7.jfif','img/image8.jfif',
    'img/image9.jfif','img/image10.jfif','img/image11.jfif',
    'img/image12.jfif','img/image13.jfif','img/image14.jfif','img/image15.jfif','img/image16.jfif', 'img/image17.jfif','img/image18.jfif','img/image19.jfif','img/image20.jfif','img/image21.jfif',
    'img/image23.jfif','img/image24.jfif','img/image25.jfif','img/image26.jfif','img/image27.jfif','img/image28.jfif','img/image22.jfif',
    'img/image29.jfif','img/image30.jfif','img/image31.jfif','img/image32.jfif','img/image33.jfif',
    'img/image34.jfif','img/image35.jfif','img/image36.jfif','img/image37.jfif','img/image38.jfif','img/image39.jfif',
    'img/image40.jfif','img/image41.jfif','img/image42.jfif','img/image43.jfif','img/image44.jfif','img/image45.jfif',
    'img/image46.jfif','img/image47.jfif','img/image48.jfif','img/image49.jfif','img/image50.jfif','img/image51.jfif',
    'img/image52.jfif','img/image53.jfif',
    'img/image54.jfif','img/image55.jfif','img/image56.jfif','img/image57.jfif','img/image58.jfif','img/image59.jfif','img/image60.jfif',

]  ;
  
// all elements collect by id's
const qouteContainer = document.getElementById('qoute-container');
const quote = document.getElementById('quote');
const img = document.getElementById('main-pic');
const wtsBtn = document.getElementById('wts');
const nextBtn = document.getElementById('new-quote');
const pictures = document.getElementById('main-pic');

// to maintain pictures....
function mainpicture(){
    var photoIndex = Math.floor(Math.random()* romanticPhotos.length);
    pictures.src = romanticPhotos[photoIndex];
} 
// Its main fuction.....
function shareQuote () {
   pictures.hidden = true;
   quote.innerText = "Muaaaaaa Buddyyyyyyy✨💖"

//    its fuction to dealy output....
    setTimeout(() => {
        pictures.hidden = false;
        
        mainpicture(); 
         
         var indexNumber = Math.floor(Math.random()* romanticQuotes.length);
     quote.innerText = romanticQuotes[indexNumber];

    if (romanticQuotes[indexNumber].length > 45) {
        quote.classList.add('font-size-small');
    } else {
        quote.classList.remove('font-size-small');
        
    }
    }, 500);
   
  
}
// its way to share quote at whats app.....
function shareOnWhatsApp() {
    const quote1 = encodeURIComponent(quote.innerText);
    const message = `${quote1}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
// after click they will occure....  
nextBtn.addEventListener('click',shareQuote);
wtsBtn.addEventListener('click',shareOnWhatsApp);
shareQuote();