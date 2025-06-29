function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// إخفاء القائمة عند الضغط خارجها
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

// اضافة لغة 
let arabic =document.getElementById("arabic");
let english =document.getElementById("english");
let home = document.getElementById("home");
let Sections = document.getElementById("Sections");
let forads = document.getElementById("forads");
let review = document.getElementById("review");
let contact = document.getElementById("contact");
let login = document.getElementById("login");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let orderNow = document.getElementById("orderNow");
let orderNow1 = document.getElementById("orderNow1");
let orderNow2 = document.getElementById("orderNow2");
let orderNow3 = document.getElementById("orderNow3");
let orderNow4 = document.getElementById("orderNow4");
let orderNow5 = document.getElementById("orderNow5");
let orderNow6 = document.getElementById("orderNow6");
let jewelry = document.getElementById("jewelry");
let makeup = document.getElementById("makeup");
let Bodycare = document.getElementById("Bodycare");
let lm1 = document.getElementById("lm1");
let lm2 = document.getElementById("lm2");
let subscribefor = document.getElementById("subscribefor");
let clientreview = document.getElementById("clientreview");
let home1 = document.getElementById("home1");
let Sections1 = document.getElementById("Sections1");
let forads1 = document.getElementById("forads1");
let review1 = document.getElementById("review1");
let contact1 = document.getElementById("contact1");
let Quicklink = document.getElementById("Quicklink");
let Extralink = document.getElementById("Extralink");
let orderitem = document.getElementById("orderitem");
let privacypolicy = document.getElementById("privacypolicy");
let paymentmethod = document.getElementById("paymentmethod");
let ourservices = document.getElementById("ourservices");
let ContactInfo = document.getElementById("ContactInfo");
let created = document.getElementById("created");
let Language = document.getElementById("Language");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanugage){
if(getLanugage === "arabic"){
    Language.innerHTML="اللغة"
    home.innerHTML = "الرئيسية"
    Sections.innerHTML = "الاقسام"
    forads.innerHTML = "الاعلانات"
    review.innerHTML = "المراجعة"
    contact.innerHTML = "التواصل"
    login.innerHTML = "تسجيل الدخول"
    h2.innerHTML = "أقسامنا الحصرية"
    h3.innerHTML ="عطور"
    orderNow.innerHTML= "طلب  الان "
    orderNow1.innerHTML= "طلب  الان "
    orderNow2.innerHTML= "طلب  الان "
    orderNow3.innerHTML= "طلب  الان "
    orderNow4.innerHTML= "طلب  الان "
    orderNow5.innerHTML= "طلب  الان "
    orderNow6.innerHTML= "طلب  الان "
    jewelry.innerHTML="مجوهرات"
    makeup.innerHTML="مكياج"
    Bodycare.innerHTML="العناية بالجسم"
    lm.innerHTML="التعرف على المزيد"
    lm1.innerHTML="التعرف على المزيد"
    lm2.innerHTML="التعرف على المزيد"
    subscribefor.innerHTML="اشترك للحصول على اخر التحديثات" 
    clientreview.innerHTML="مراجعة العملاء"
    home1.innerHTML = "الرئيسية"
    Sections1.innerHTML = "الاقسام"
    forads1.innerHTML = "الاعلانات"
    review1.innerHTML = "المراجعة"
    contact1.innerHTML = "التواصل"
    Quicklink.innerHTML="رابط سريع"
    orderitem.innerHTML="عنصر الطلب"
    privacypolicy.innerHTML="سياسة الخصوصية"
    paymentmethod.innerHTML="طريقة الدفع"
    ourservices.innerHTML="خدماتنا"
    Extralink.innerHTML="رابط إضافي"
    ContactInfo.innerHTML="معلومات التواصل"
    created.innerHTML="تم إنشاؤها بواسطة فريق SUN |جميع الحقوق محفوظة!"
}else if(getLanugage === "english"){
    Language.innerHTML="Language"
    home.innerHTML = "home"
    Sections.innerHTML = "Sections"
    forads.innerHTML = "for ads"
    review.innerHTML = "review"
    contact.innerHTML = "contact"
    login.innerHTML = "login"
    h2.innerHTML = "Our Exclusive Sections"
    h3.innerHTML ="Perfumes"
    orderNow.innerHTML="orderNow"
    orderNow1.innerHTML="orderNow"
    orderNow2.innerHTML="orderNow"
    orderNow3.innerHTML="orderNow"
    orderNow4.innerHTML="orderNow"
    orderNow5.innerHTML="orderNow"
    orderNow6.innerHTML="orderNow"
    jewelry.innerHTML="jewelry"
    makeup.innerHTML="makeup"
    Bodycare.innerHTML="Body care"
    lm.innerHTML="learn more"
    lm1.innerHTML="learn more"
    lm2.innerHTML="learn more"
    subscribefor.innerHTML="subscribe for latest update"
    clientreview.innerHTML="client review"
    Quicklink.innerHTML="Quick link"
    orderitem.innerHTML="order item"
    privacypolicy.innerHTML="privacy policy"
    paymentmethod.innerHTML="payment method"
    ourservices.innerHTML="our  services"
    Extralink.innerHTML="Extralink"
    ContactInfo.innerHTML="Contact Info"
    created.innerHTML="created by SUN team |all rights reserved !"
}

}
// اختيار عنصر الشريط الجانبي من الصفحة
let navbar = document.querySelector('.navbar');

// تعيين وظيفة عند النقر على زر القائمة
document.querySelector('#menu-bar').onclick = () => {
    // تبديل الفئة 'active' بين إضافة وإزالة من عنصر navbar
    navbar.classList.toggle('active');
}

// اختيار عنصر البحث من الصفحة
let search = document.querySelector('.search');

// تعيين وظيفة عند النقر على زر البحث
document.querySelector('#search').onclick = () => {
    // تبديل الفئة 'active' بين إضافة وإزالة من عنصر search
    search.classList.toggle('active');
}

// إنشاء نموذج سلايدر للمنتجات باستخدام مكتبة Swiper
var swiper = new Swiper(".product-row", {
    spaceBetween: 30, // المسافة بين الشرائح
    loop: true, // تكرار الشرائح بشكل دائري
    centeredSlides: true, // جعل الشرائح مركزية
    autoplay: {
        delay: 9500, // تأخير التبديل بين الشرائح بالميلي ثانية
        disableOnInteraction: false, // السماح بالتبديل التلقائي حتى بعد التفاعل مع السلايدر
    },
    pagination: {
        el: ".swiper-pagination", // عنصر التعداد (الترقيم) للسلايدر
        clickable: true, // جعل التعداد قابل للنقر
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات الصغيرة
        },
        768: {
            slidesPerView: 2, // عدد الشرائح المعروضة على الشاشات المتوسطة
        },
        1024: {
            slidesPerView: 3, // عدد الشرائح المعروضة على الشاشات الكبيرة
        },
    },
});

// إنشاء نموذج سلايدر للمدونات باستخدام مكتبة Swiper
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30, // المسافة بين الشرائح
    loop: true, // تكرار الشرائح بشكل دائري
    centeredSlides: true, // جعل الشرائح مركزية
    autoplay: {
        delay: 9500, // تأخير التبديل بين الشرائح بالميلي ثانية
        disableOnInteraction: false, // السماح بالتبديل التلقائي حتى بعد التفاعل مع السلايدر
    },
    pagination: {
        el: ".swiper-pagination", // عنصر التعداد (الترقيم) للسلايدر
        clickable: true, // جعل التعداد قابل للنقر
    },
    navigation: {
        nextEl: ".swiper-button-next", // عنصر زر التالي
        prevEl: ".swiper-button-prev", // عنصر زر السابق
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات الصغيرة
        },
        768: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات المتوسطة
        },
        1024: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات الكبيرة
        },
    },
});

// إنشاء نموذج سلايدر للمراجعات باستخدام مكتبة Swiper
var swiper = new Swiper(".review-row", {
    spaceBetween: 30, // المسافة بين الشرائح
    loop: true, // تكرار الشرائح بشكل دائري
    centeredSlides: true, // جعل الشرائح مركزية
    autoplay: {
        delay: 9500, // تأخير التبديل بين الشرائح بالميلي ثانية
        disableOnInteraction: false, // السماح بالتبديل التلقائي حتى بعد التفاعل مع السلايدر
    },
    pagination: {
        el: ".swiper-pagination", // عنصر التعداد (الترقيم) للسلايدر
        clickable: true, // جعل التعداد قابل للنقر
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // عدد الشرائح المعروضة على الشاشات الصغيرة
        },
        768: {
            slidesPerView: 2, // عدد الشرائح المعروضة على الشاشات المتوسطة
        },
        1024: {
            slidesPerView: 3, // عدد الشرائح المعروضة على الشاشات الكبيرة
        },
    },
});
